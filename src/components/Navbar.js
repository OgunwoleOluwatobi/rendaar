import React, { Component } from 'react'
import styled from 'styled-components';
import { debounce } from '../utils';
import { theme } from '../styles';

const Container = styled.div`
    width: 100vw;
    height: 8vh;
    padding: 0 10rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    position: fixed;
    top: 0;
    z-index: 1;
    transform: ${props => (props.scrollDirection === 'down' ? `translateY(-1000%)`: `translateY(0%)`)};
    box-shadow: 0 2px 8px -1px rgba(0,0,0,0.1);
`;

const StyledHold = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
    font-size: 2rem;
    margin-right: 1.5rem;
    text-decoration: none;
    font-weight: 700;
    color: #000;
    &:hover,
    &:focus,
    &:active {
        cursor: pointer;
    }
`;

const StyledItem = styled.a`
    margin: 0 20px;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    transition: ${theme.transition};
    color: #000;
    &:hover,
    &:focus,
    &:active {
        cursor: pointer;
    }
`;

const Post = styled.a`
    margin: 0 20px;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    color: #000;
    border: 2px solid #71B5EF;
    padding: .4rem 1rem;
    border-radius: 12px;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
        cursor: pointer;
        background: #71B5EF;
        color: #fff;
    }
`;

const DELTA = 5;

export default class Navbar extends Component {

    state = {
        isMounted: !this.props.isHome,
        menuOpen: false,
        scrollDirection: 'none',
        lastScrollTop: 0,
      };
    
      componentDidMount() {
        setTimeout(
            () => 
              this.setState({isMounted: true}, () => {
                  window.addEventListener('scroll', () => debounce(this.handleScroll()));
                  window.addEventListener('resize', () => debounce(this.handleResize()));
              })
        )
      }
    
      componentWillUnmount() {
          window.removeEventListener('scroll', () => this.handleScroll());
          window.removeEventListener('resize', () => this.handleResize());
      }
    
      handleScroll = () => {
          const { isMounted, scrollDirection, lastScrollTop } = this.state;
          const fromTop = window.scrollY;
    
          if(!isMounted || Math.abs(lastScrollTop - fromTop) <= DELTA) {
              return;
          }
    
          if(fromTop < DELTA) {
              this.setState({ scrollDirection: 'none' });
          } else if (fromTop > lastScrollTop && fromTop > 100){
              if(scrollDirection !== 'down') {
                  this.setState({ scrollDirection: 'down' });
              }
          } else if (fromTop + window.innerHeight < document.documentElement.scrollHeight) {
              if(scrollDirection !== 'up') {
                  this.setState({ scrollDirection: 'up' })
              }
          }
    
          this.setState({ lastScrollTop: fromTop });
      }
    
      toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });
    
      handleResize = () => {
        if (window.innerWidth > 768 && this.state.menuOpen) {
          this.toggleMenu();
          console.log(this.state.menuOpen);
          
        }
      };
    
        clickHandler = e => {
          const target = e.target;
          const isLink = target.hasAttribute('href');
          const isMenu = target.classList && target.classList[0].includes('StyledNavo');
    
          if(isLink || isMenu) {
            this.toggleMenu();
          }
        }

  render() {
    const { scrollDirection } = this.state;

    return (
      <Container scrollDirection={scrollDirection} >
          <StyledHold>
            <Logo href="/">RENDAAR</Logo>
            <StyledItem>Find Freelancer</StyledItem>
            <StyledItem>Find Jobs</StyledItem>
            <StyledItem>How it Works</StyledItem>
          </StyledHold>
          <StyledHold>
              <Post>Post a Job</Post>
            <StyledItem>Log In</StyledItem>
            <StyledItem>Sign Up</StyledItem>
          </StyledHold>
      </Container>
    )
  }
}

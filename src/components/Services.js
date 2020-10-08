import React, { Component } from 'react'
import styled from 'styled-components';
import photography from '../assets/photography.png';
import logo from '../assets/logo-design.png';
import voiceover from '../assets/voice-over.png';
import writing from '../assets//writing.png';
import digital from '../assets/digital-markerting.png';
import animation from '../assets/animation.png';
import art from '../assets/art.png';
import social from '../assets/social.png';
import { theme } from '../styles';

const Container = styled.div`
    padding: 3rem 10rem;
    /* height: 100vh; */
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
`;

const BigText = styled.h1`
    font-size: 1.8rem;
`;

const Divider = styled.div`
    height: .4rem;
    width: 12rem;
    background-color: #9CB7CE;
    margin: .8rem 0 1.5rem 0;
`;

const ImgHolder = styled.a`
    /* position: relative; */
    padding: 1.5rem .5rem;
    width: 13rem;
    height: 16rem;
    margin: 0 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    text-decoration: none;
    /* background-color: red; */
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
        cursor: pointer;
        transform: translateY(-2%);
        box-shadow: 0 5px 8px -1px rgba(0,0,0,0.3);
    }
`;

const SmallText = styled.p`
    font-size: 1.2rem;
    color: #fff;
    font-weight: 600;
    text-align: center;
`;

const Holder = styled.li`
    display: flex;
    flex-direction: row;
    margin: .8rem 0;
`;

const ViewAll = styled.p`
    font-size: 1rem;
    font-weight: 600;
    margin: 2rem 0 0 0;
    a {
        font-size: 1rem;
        text-decoration: none;
        color: #9CB7CE;
    }
`; 

export default class Services extends Component {
    render() {
        return (
            <Container>
                <BigText>Professional Services and Talents</BigText>
                <Divider></Divider>
                <Holder>
                    <ImgHolder image={photography}> {/*image={process.env.PUBLIC_URL + '/images/photography.png'}*/}
                        <SmallText>Photography</SmallText>
                    </ImgHolder>
                    <ImgHolder image={logo}>
                        <SmallText>Logo Design</SmallText>
                    </ImgHolder>
                    <ImgHolder image={voiceover}>
                        <SmallText>Voice Over</SmallText>
                    </ImgHolder>
                    <ImgHolder image={art}>
                        <SmallText>Design & Arts</SmallText>
                    </ImgHolder>
                </Holder>
                <Holder>
                    <ImgHolder image={writing}>
                        <SmallText>Writing</SmallText>
                    </ImgHolder>
                    <ImgHolder image={animation}>
                        <SmallText>Animation</SmallText>
                    </ImgHolder>
                    <ImgHolder image={digital}>
                        <SmallText>Digital Marketing</SmallText>
                    </ImgHolder>
                    <ImgHolder image={social}>
                        <SmallText>Social Media Influencing</SmallText>
                    </ImgHolder>
                </Holder>
                <ViewAll>Can't find your desired choice?  <a href="/">See all services</a></ViewAll>
            </Container>
        )
    }
}

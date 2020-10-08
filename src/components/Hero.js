import React, { Component } from 'react'
import styled from 'styled-components';
import landing from '../assets/landing.png';
import { ReactComponent as SIcon } from '../assets/search.svg';
import { theme } from '../styles';

const Section = styled.div`
    /* width: 100vw; */
    padding: 1rem 10rem;
    background-color: #fff;
`;

const StyledHold = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionItem = styled.a`
    /* margin: 0 20px; */
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    color: #000;
    &:hover,
    &:focus,
    &:active {
        cursor: pointer;
    }
`;

const Container = styled.div`
    margin-top: 8vh;
    width: 100vw;
    height: 92vh;
    background-color: #71B5EF;
`;

const Body = styled.div`
    display: flex;
    padding: 1rem 10rem;
    height: 83vh;
    align-items: center;
    position: absolute;
    justify-content: space-between;
`;

const Hold = styled.div`
    display: flex;
    flex-direction: column;
    width: 38rem;
`;

const BigText = styled.h1`
    color: #fff;
    font-size: 3rem;
    text-align: left;
`;

const SmallText = styled.p`
    margin: 1.5rem 0;
    font-size: 1.5rem;
    text-align: left;
    color: #fff;
`;

const ImgHold = styled.img`
    width: 480px;
    height: 80vh;
    /* background-color: red; */
`;

const Field = styled.div`
    position: relative;
    /* background-color: red; */
`;

const Icon = styled.a`
    position: absolute;
    right: 15px;
    top: 18px;
    &:hover,
    &:focus,
    &:active {
        cursor: pointer;
    }
`;

const Search = styled.input`
    background-color: #fff;
    border: none;
    border-radius: 8px;
    padding: 1.2rem 1rem;
    font-size: 1rem;
    width: 100%;
`;

const QuickTextHold = styled.li`
    display: flex;
    flex-direction: row;
    margin: 1.2rem 0;
`;

const QuickText = styled.a`
    font-size: 1rem;
    /* font-weight: 500; */
    color: #fff;
    border: 1px solid #fff;
    border-radius: 20px;
    padding: .5rem 1rem;
    margin-right: 1rem;
    text-decoration: none;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
        cursor: pointer;
        background-color: #fff;
        color: #000;
    }
`;

export default class Hero extends Component {
    render() {
        return (
            <Container>
                <Section>
                    <StyledHold>
                        <SectionItem>Programming and Development</SectionItem>
                        <SectionItem>Writing & Translation</SectionItem>
                        <SectionItem>Design & Arts</SectionItem>
                        <SectionItem>Video & Animation</SectionItem>
                        <SectionItem>Digital Marketing</SectionItem>
                    </StyledHold>
                </Section>
                <Body>
                    <Hold>
                        <BigText>Find the best freelance service for your work</BigText>
                        <SmallText>Get in contact with the best freelancers across the globe on our cost-effective platform.</SmallText>
                        <Field>
                            <Search type="text" placeholder="What services are you looking for ?" />
                            <Icon>
                                <SIcon></SIcon>
                            </Icon>
                        </Field>
                        <QuickTextHold>
                            <QuickText>Voice Over</QuickText>
                            <QuickText>Web Building</QuickText>
                            <QuickText>Design & Arts</QuickText>
                            <QuickText>Logo Design</QuickText>
                        </QuickTextHold>
                    </Hold>
                    <ImgHold src={landing} alt="landing"/>
                </Body>
            </Container>
        )
    }
}

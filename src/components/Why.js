import React, { Component } from 'react';
import styled from 'styled-components';
import why1 from '../assets/why1.png';
import why2 from '../assets/why2.png';
import why3 from '../assets/why3.png';

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
    width: 8rem;
    background-color: #9CB7CE;
    margin: .8rem 0 1.5rem 0;
`;

const Img = styled.img`
    margin: 1rem 0;
`;

export default class Why extends Component {
    render() {
        return (
            <Container>
                <BigText>Why Rendaar?</BigText>
                <Divider></Divider>
                <Img src={why1} alt="" />
                <Img src={why2} alt="" />
                <Img src={why3} alt="" />
            </Container>
        )
    }
}

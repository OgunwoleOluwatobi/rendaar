import React, { Component } from 'react';
import styled from 'styled-components';
import { ReactComponent as Check } from '../assets/check.svg'
import how from '../assets/how.png'

const Container = styled.div`
    background-color: #4E494F;
    width: 100vw;
    height: 80vh;
    padding: 0 10rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Hold = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Item = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2rem 0;
`;

const BigText = styled.h1`
    font-size: 2.2rem;
    color: #fff;
    margin-bottom: 2rem;
`;

const SmallText = styled.p`
    width: 25rem;
    margin-left: 3rem;
    font-size: 1.2rem;
    text-align: left;
    color: #fff;
`;

export default class How extends Component {
    render() {
        return (
            <Container>
                <Hold>
                    <BigText>How It Works</BigText>
                    <Item>
                        <Check />
                        <SmallText>Find freelancers to get your work done or post requests and get freelancers to bid for it.</SmallText>
                    </Item>
                    <Item>
                        <Check />
                        <SmallText>Negotiate the service terms with the freelancers and generate your order details.</SmallText>
                    </Item>
                    <Item>
                        <Check />
                        <SmallText>Complete your Job by paying to Rendaar, and we pay your freelancer when you are satisfied with the job done.</SmallText>
                    </Item>
                </Hold>
                <img src={how} alt="" width="500" />
            </Container>
        )
    }
}

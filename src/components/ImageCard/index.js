import React from "react";
import styled from "styled-components";

const Card = styled.div`
    display: flex ;
    height: 90px;
    width: 90px;
    border-radius: 6px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
    background-repeat: no-repeat;
    
`;

const Title = styled.span`
    color: #fff;
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 14px;
    margin: 10px;
`;

const ImageCard = ({photo , title}) => (

<Card photo={photo}>
    <Title> {title}</Title>
</Card>
)

export default ImageCard;
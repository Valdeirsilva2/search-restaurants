import React from "react";
import styled from "styled-components";

const Card = styled.div`
    height: 90px;
    width: 90px;
    border-radius: 6px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
    background-repeat: no-repeat;
    
`;

const ImageCard = ({photo}) => <Card photo={photo}/>


export default ImageCard;
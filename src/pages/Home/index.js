import React, { useState } from 'react';
import { Aside, Container, Search, ImgLogo, Wrapper, Map, CarouselTitle, ThumbRest } from './styles';
import LogoSearch from '../../assets/logo.svg';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon/dist/index';
import Slider from "react-slick";
import imgThumb from '../../assets/restaurante-fake.png';
import { Card } from '../../components';


export const Home = () => {

    const [inputValue, setInputValue] = useState('');

    var settings = {
        dots: false,
        loop: true,
        infinite: true,
        speed: 500,
        margin: 10,
        ToScroll: 4,
        veHeight: 4,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    return (

        <>
        <Wrapper>
            <Container>
                <Aside>
                    <Search>
                        <ImgLogo src={LogoSearch} alt="Logo Header" />
                        <TextField
                            label="Pesquisar"
                            trailingIcon = {<MaterialIcon role="button" icon="search"/>}
                            outlined
                        >
                            <Input
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />

                        </TextField>
                        <CarouselTitle>Na sua Area</CarouselTitle>
                        <Slider {...settings}>                           
                               <Card photo={imgThumb} title={"restaurante 1"} />
                               <Card photo={imgThumb} title={"restaurante 2"} />
                               <Card photo={imgThumb} title={"restaurante 3"} />
                               <Card photo={imgThumb} title={"restaurante 4"} />
                               <Card photo={imgThumb} title={"restaurante 5"} />
                               <Card photo={imgThumb} title={"restaurante 6"} />
                               <Card photo={imgThumb} title={"restaurante 7"} />
                        </Slider>
                    </Search>
                </Aside>
            </Container>

            <Map/>

        </Wrapper>

        </>
    )
}

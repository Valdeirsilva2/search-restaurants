import { Aside, Container, Search, ImgLogo } from './styles';
import LogoSearch from '../../assets/logo.svg';
import {MDCTextField} from '@material/textfield';
import React from 'react';

// Parou na instalalçao do input parte3 5:00

export const Home = () =>
<>
    <Container>
        <Aside>
        <Search>
            <ImgLogo src= {LogoSearch} alt="Logo Header"/>

        </Search>
        </Aside>
    </Container>

</>


import React, { useState } from 'react';
import { Aside, Container, Search, ImgLogo, Wrapper, Map } from './styles';
import LogoSearch from '../../assets/logo.svg';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon/dist/index';

export const Home = () => {

    const [inputValue, setInputValue] = useState('');

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
                    </Search>
                </Aside>
            </Container>

            <Map/>

        </Wrapper>

        </>
    )
}

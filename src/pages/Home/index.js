import React, { useState } from 'react';
import { Aside, Container, Search, ImgLogo } from './styles';
import LogoSearch from '../../assets/logo.svg';
import TextField, {Input} from '@material/react-text-field';

// Parou na instalalçao do input parte3 5:00

export const Home = () => {

const [inputValue, setInputValue] = useState('');

return(

    <>
        <Container>
            <Aside>
            <Search>
                <ImgLogo src= {LogoSearch} alt="Logo Header"/>
                <TextField
                    label="Pesquisar"
                    outlined
                >
                    <Input 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value) }
                    />

                </TextField>
                
            </Search>
            </Aside>
        </Container>

    </>
    )
}

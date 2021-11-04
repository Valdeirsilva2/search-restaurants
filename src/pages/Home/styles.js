import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 100%;
`;

export const Aside = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    height: 100vh;
    max-width: 360px;
    overflow-y: auto;
`
export const Search = styled.section`
display: flex;
flex-direction: column;
background: #fff;
padding: 1rem;
display: grid;
place-items: center;
`;

export const ImgLogo = styled.img` 
    width: 50%
`
;
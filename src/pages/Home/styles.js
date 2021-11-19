import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const Container = styled.main`
    height: 100%;
    max-width: 360px;
    width: 100%;
`;

export const Aside = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    height: 100vh;
    max-width: 360px;
    overflow-x: auto;
`
export const Search = styled.section`
display: flex;
flex-direction: column;
background: #fff;
padding: 1rem;
`;

export const ImgLogo = styled.img` 
    width: 50%;
    margin-bottom: 1rem;
    margin: 1rem auto;
`
;

export const Map = styled.div`
    background-color: red;
    width: 100%;
`

export const CarouselTitle = styled.h1`
    font-size: 24px;
    margin:  1rem 0;
    font-weight: bold;
    text-align: start;
    width: 100%;
    font-family: ${(props) => props.theme.fonts.regular};
`
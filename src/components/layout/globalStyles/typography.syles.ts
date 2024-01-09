import { createGlobalStyle } from "styled-components";

export const TypographyStyles = createGlobalStyle`
body {
    font-family: 'Kanit', sans-serif;
}

h1, h2, h3, h4, h5, h6, b { 
    color: ${(props) => props.theme.white};
    font-weight: 300;
}

b {
    font-weight: 700;
}


h1 {
    font-size: ${(props) => props.theme.size6};
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        font-size: ${(props) => props.theme.size7};
    }
}

h2 {
    font-size: ${(props) => props.theme.size5};
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        font-size: ${(props) => props.theme.size6};
    }
}

h3 {
    font-size: ${(props) => props.theme.size4};
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        font-size: ${(props) => props.theme.size5};
    }
}

h4 {
    font-size: ${(props) => props.theme.size3};
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        font-size: ${(props) => props.theme.size4};
    }
}

h5 {
    font-size: ${(props) => props.theme.size2};
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        font-size: ${(props) => props.theme.size3};
    }
}

h6 {
    font-size: ${(props) => props.theme.size1};
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
        font-size: ${(props) => props.theme.size2};
    }
}
`;

import { createGlobalStyle } from "styled-components";
import { colors } from "./helpers/variables";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500;600;700;800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        scroll-behavior: smooth;
        border: none;
    }

    html {
        font-size: 62.5%;
    }

    body {
        overflow-x: hidden;
        background-color: ${colors.cream};
        font-family: "League Spartan", Arial, Helvetica, sans-serif;
    }

    @media (min-width: 320px) and (max-width: 768px) {
        html {
            font-size: 60%;
        }
    }

    @media (min-width: 320px) and (max-width: 480px) {
        html {
            font-size: 50%;
        }
    }
`;
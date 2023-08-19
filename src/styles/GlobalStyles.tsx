import {createGlobalStyle} from "styled-components";
import InterFont from "../assets/fonts/Inter-Medium.ttf";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url(${InterFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`
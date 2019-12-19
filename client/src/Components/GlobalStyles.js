import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
 ${reset};
 body, html{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, Arial, Helvetica, sans-serif;
    color: #211922;
    font-size: 12px;
 }
 * {
    box-sizing: border-box;
    color: #8e8e8e;
 }
 a{
    word-break: keep-all;
    text-decoration : none !important;
 }
`;

export default globalStyles;

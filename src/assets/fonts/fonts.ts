import { createGlobalStyle } from 'styled-components';
import Lato from './Lato-Regular.ttf';
export default createGlobalStyle`
    @font-face {
        font-family: 'Lato';
        src: url(${Lato}) format('truetype');
        font-display: auto;
        font-weight: 300;
        font-style: normal;
    }
`;

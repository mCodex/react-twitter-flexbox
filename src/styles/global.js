import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
     margin: 0;
     padding: 0;
        outline: 0;
        box-sizing: border-box;
 }
 
 html,body,#root {
    height: 100%;
 }

 body {
     font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
     background: #E6ECF0;
     -webkit-font-smoothing: antialiased !important;
     text-rendering: optimizeLegibility !important;
 }

 body, input , button {
     font: 14px Lato, sans-serif;
 }
 
 button {
     cursor: pointer;
 }
`;

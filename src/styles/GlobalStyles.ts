import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

import backgroundImg from './../assets/background.jpg';

// 전역 스타일 추가 필요
const GlobalStyle = createGlobalStyle`
  ${reset}
  a{
    text-decoration: none;
    color: inherit;
  }
  *{
    box-sizing: border-box;
  }
  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
  a, dl, dt, dd, ol, ul, li, form, label, table{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 20px;
    vertical-align: baseline;
  }
  body{
    line-height: 1;
    font-family: 'Noto Sans KR', sans-serif;
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    background-attachment: fixed;

    width: 100vw;
    height: 100vh;
  }
  ol, ul{
    list-style: none;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: inherit;
  }

  html,
  body,
  body > div {
    height: 100%
  }
  
  body {
    font-family: Arial, Helvetica, sans-serif;

    & > div {
      display: flex;
      flex-direction: column;
    }
  }

  a {
    text-decoration: none;
  }

  .content {
    flex: 1 0 auto;
    margin: 48px auto;
  }

  .footer {
    flex-shrink: 0;
  }

  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .text-center {
    text-align: center;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
`;

export default GlobalStyle;

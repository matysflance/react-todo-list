import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Routing } from '../config/routing/Routing';
import { Sidebar } from '../components/Sidebar/Sidebar';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Sidebar />
      <main className="main">
        <div className="content-wrapper">
          <Routing />
        </div>
      </main>
    </BrowserRouter>
  );
};

const GlobalStyle = createGlobalStyle`
  :root {
    /* --bdazzled-blue: #3d5a80;
      --pale-cerulean: #98c1d9;
      --light-cyan: #e0fbfc;
      --burnt-sienna: #ee6c4d;
      --gunmetal: #293241; */
    --color-white: #fff;
    --main-background-color: #d9e8e9;
    --sidebar-background-color: #293241;
    --color-primary: #3d5a80;
    /* --color-primary-dark: #2698d1; */
    --color-secondary: #537a5a;
    --border-radius: 3px;
    --default-transition-timing-function: cubic-bezier(0.41, 1, 0.52, 0.96);
  }

  /* BASIC CSS RESET */
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    font-family: 'Poppins', sans-serif; /* 400/500/700 */
    font-size: 1.4rem;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* GLOBAL STYLES */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .main {
    min-height: 100vh;
    background-color: var(--main-background-color);

    display: flex;
    padding-left: 4rem;
  }

  .content-wrapper {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
  }
`;

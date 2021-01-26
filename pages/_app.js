/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { ThemeProvider } from 'styled-components';
import Header from 'next/head';
import GlobalStyle from '../utils/globalStyle';
import db from '../db.json';
import { PlayerInfoProvider } from '../contexts/PlayerData';

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Header>
      <ThemeProvider theme={theme}>
        <PlayerInfoProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </PlayerInfoProvider>
      </ThemeProvider>
    </>
  );
}

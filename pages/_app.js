import React, { useState } from "react";
import "../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import LeftPanel from "../components/leftpanel";
import { Tablet, Mobile, Desktop } from "../lib/responsive";
import Navbar from "../components/navbar/navbar";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`;

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="body">
      <Head>
        <title>Movie Reckons</title>
        <link rel="icon" href="/logo-head.png" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      {/* <Mobile>
        <Navbar navbarState={navbarOpen} handleNavbar={handleNavbar} />
        <GlobalStyle />
      </Mobile> */}
      {/* <Tablet>
        <Navbar navbarState={navbarOpen} handleNavbar={handleNavbar} />
        <GlobalStyle />
      </Tablet> */}
      <Desktop>
        {router.pathname == "/allblogs" ? null : <LeftPanel />}
        <Component {...pageProps} />
      </Desktop>
      <Tablet>
        <Component {...pageProps} />
      </Tablet>
      <Mobile>
        <Component {...pageProps} />
      </Mobile>
    </div>
  );
}

export default MyApp;

import "../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import LeftPanel from "../components/leftpanel";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className="body">
      <Head>
        <title>Movie Reckons</title>
        <link rel="icon" href="/logo-head.png" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      {router.pathname == "/allblogs" ? null : <LeftPanel />}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

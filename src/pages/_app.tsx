import { RoutesContextProvider } from "../contexts/RouteContext";
import { AuthProvider } from "../contexts/AuthContext";
import type { AppProps } from "next/app";
import Router from "next/router";

import "../styles/globals.css";
import { useState } from "react";
import { LoadingScreen } from "../components/LoadingScreen";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  return (
    <>
      <AuthProvider>
        <RoutesContextProvider>
          <Head>
            <link rel="shortcut icon" href="favicon.svg" type="image/svg" />
          </Head>
          {loading && <LoadingScreen />}
          {!loading && <Component {...pageProps} />}
        </RoutesContextProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;

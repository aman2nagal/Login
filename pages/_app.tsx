import App from "next/app";
import { useEffect, useState } from "react";
import * as gtag from "../lib/gtag";
import AuthProvider, { getUser } from "../contexts/AuthContext";

import "../styles/index.css";
import { Provider } from "react-redux";
import { store } from "../stores";

interface CrumbItem {
  href: string;
  label: string;
  isCurrent: boolean;
}

function MyApp({ Component, pageProps, router, auth }) {
  const { locale } = router;

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <AuthProvider auth={auth}>
      <Provider store={store}>
        {/* <Layout> */}
        <Component {...pageProps} />
        {/* </Layout> */}
      </Provider>
    </AuthProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const auth = await getUser(appContext.ctx);
  return { ...appProps, auth: auth };
};
export default MyApp;

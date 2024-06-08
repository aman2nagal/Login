import App from "next/app";
import { IntlProvider } from "react-intl";
import English from "../messages/en.json";
import Spanish from "../messages/es.json";
import { useEffect, useState } from "react";
import * as gtag from "../lib/gtag";
import AuthProvider, { getUser } from "../contexts/AuthContext";
import logger from "../lib/logger";
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
  const messages = locale === "en" ? English : Spanish;
  const [breadcrumbs, setBreadcrumbs] = useState();

  useEffect(() => {
    const pathWithoutQuery = router.asPath.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumbs = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
        isCurrent: index === pathArray.length - 1,
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [router.asPath]);

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
        <IntlProvider messages={messages} locale={locale}>
          {/* <Layout> */}
          <Component {...pageProps} />
          {/* </Layout> */}
        </IntlProvider>
      </Provider>
    </AuthProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const auth = await getUser(appContext.ctx);
  logger.debug("auth: %j", auth);
  return { ...appProps, auth: auth };
};
export default MyApp;

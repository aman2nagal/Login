import App from "next/app";

import "../styles/index.css";
import { Provider } from "react-redux";
import { store } from "../stores";

function MyApp({ Component, pageProps, router, auth }) {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};
export default MyApp;

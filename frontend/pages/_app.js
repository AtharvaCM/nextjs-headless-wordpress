// next & React
import Router from "next/router";

// nprogress
import NProgress from "nprogress";

// styles
import "../src/styles/styles.scss";

// apollo
import { ApolloProvider } from "@apollo/client";
import client from "../src/apollo/client";

// Progress Bar
NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;

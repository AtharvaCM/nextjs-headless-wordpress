import React from "react";

// next
import Head from "next/head";

// components
import Header from "./header";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href={props.data?.header?.favicon} />
      </Head>
      <Header
        header={props.data?.header}
        headerMenus={props.data?.menus?.headerMenus}
      />
      {props.children}
      <Footer
        footer={props.data?.footer}
        footerMenus={props.data?.menus?.footerMenus}
      />
    </div>
  );
};

export default Layout;

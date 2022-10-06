import React from "react";

// components
import Header from "./header";
import Footer from "./footer";

const Layout = (props) => {
  console.log("props.data: ", props.data);

  return (
    <div>
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

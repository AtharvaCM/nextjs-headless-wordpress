import React from "react";

// next
import Head from "next/head";

// lodash
import { isEmpty } from "lodash";

// components
import Header from "./header";
import Footer from "./footer";
import Seo from "../seo";

// utils
import { sanitize } from "../../utils/misc";

const Layout = (props) => {
  // if (isEmpty(props.data?.page)) {
  //   return null;
  // }

  return (
    <div>
      <Seo seo={props.page?.seo} uri={props.page?.uri} />

      <Head>
        <link rel="shortcut icon" href={props.data?.header?.favicon} />
        {props.page?.seo?.schemaDetails && (
          <script
            type="application/ld+json"
            className="yoast-schema-graph"
            key="yoastSchema"
            dangerouslySetInnerHTML={{
              __html: sanitize(props.page?.seo?.schemaDetails),
            }}
          />
        )}
      </Head>

      <Header
        header={props.data?.header}
        headerMenus={props.data?.menus?.headerMenus}
      />
      <div className="h-almost-screen">{props.children}</div>
      <Footer
        footer={props.data?.footer}
        footerMenus={props.data?.menus?.footerMenus}
      />
    </div>
  );
};

export default Layout;

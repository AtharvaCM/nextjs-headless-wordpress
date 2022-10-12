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
  if (isEmpty(props.data?.page)) {
    return null;
  }
  console.log("props: ", props);

  const { page, header, footer, headerMenus, footerMenus } = props.data || {};

  return (
    <div>
      <Seo seo={page?.seo} uri={page?.uri} />

      <Head>
        <link rel="shortcut icon" href={header?.favicon} />
        {page?.seo?.schemaDetails && (
          <script
            type="application/ld+json"
            className="yoast-schema-graph"
            key="yoastSchema"
            dangerouslySetInnerHTML={{
              __html: sanitize(page?.seo?.schemaDetails),
            }}
          />
        )}
      </Head>

      <Header header={header} headerMenus={headerMenus?.edges} />
      <div className="h-almost-screen">{props.children}</div>
      <Footer footer={footer} footerMenus={footerMenus?.edges} />
    </div>
  );
};

export default Layout;

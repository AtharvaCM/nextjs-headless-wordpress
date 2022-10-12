import React from "react";

// next
import { useRouter } from "next/router";

// lodash
import { isEmpty } from "lodash";

// apollo
import client from "../src/apollo/client";

// queries
import { GET_PAGES_URI } from "../src/queries/pages/get-pages";
import { GET_PAGE } from "../src/queries/pages/get-page";

// components
import Layout from "../src/components/layout/index";

// utils
import { isCustomPageUri } from "../src/utils/slugs";

const Page = ({ data }) => {
  console.log("data: ", data);
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <Layout data={data}>{router?.query?.slug.join("/")}</Layout>;
};

export default Page;

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: GET_PAGE,
    variables: {
      uri: params?.slug.join("/"),
    },
  });

  return {
    props: {
      data: {
        menus: {
          headerMenus: data?.headerMenus?.edges || [],
          footerMenus: data?.footerMenus?.edges || [],
        },
        header: data?.header,
        footer: data?.footer,
        page: data?.page ?? {},
        paths: params?.slug.join("/"),
      },
    },
    /**
     * Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_PAGES_URI,
  });

  const pathsData = [];

  data?.pages?.nodes &&
    data?.pages?.nodes.map((page) => {
      if (!isEmpty(page?.uri) && !isCustomPageUri(page?.uri)) {
        const slugs = page?.uri?.split("/").filter((pageSlug) => pageSlug);

        pathsData.push({
          params: { slug: slugs },
        });
      }
    });

  return {
    paths: pathsData,
    fallback: true,
  };
}

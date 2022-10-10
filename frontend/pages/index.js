// apollo
import client from "../src/apollo/client";

// queries
import { GET_MENUS } from "../src/queries/get-menus";

// components
import Layout from "../src/components/layout";

export default function Index({ data }) {
  console.log("data: ", data);

  return <Layout data={data}></Layout>;
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_MENUS,
  });

  return {
    // will be passed to page component as props
    props: {
      data: {
        header: data?.header || [],
        footer: data?.footer || [],
        menus: {
          headerMenus: data?.headerMenus?.edges || [],
          footerMenus: data?.footerMenus?.edges || [],
        },
      },
    },
    revalidate: 1,
  };
}

// apollo
import client from "../src/apollo/client";

// queries
import { GET_MENUS } from "../src/queries/get-menus";

// components
import Layout from "../src/components/layout";

const Index = ({ data }) => {
  console.log("data index: ", data);

  return <Layout data={data}>Home</Layout>;
};

export default Index;

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
        page: data?.page || {},
      },
    },
    revalidate: 1,
  };
}

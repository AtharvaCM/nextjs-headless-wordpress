// apollo
import client from "../src/apollo/client";

// queries
import { GET_PAGE } from "../src/queries/pages/get-page";

// components
import Layout from "../src/components/layout";

// utils
import { handleRedirectsAndReturnData } from "../src/utils/slugs";

const Index = ({ data }) => {
  console.log("data index: ", data);

  return <Layout data={data}>Home</Layout>;
};

export default Index;

export async function getStaticProps() {
  const { data, errors } = await client.query({
    query: GET_PAGE,
    variables: {
      uri: "/",
    },
  });

  const defaultProps = {
    // will be passed to page component as props
    props: {
      data: data || {},
    },
    revalidate: 1,
  };

  return handleRedirectsAndReturnData(defaultProps, data, errors, "page");
}

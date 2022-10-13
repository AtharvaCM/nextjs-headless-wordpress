// custom components
import Layout from "../../../src/components/layout";

// utils
import { handleRedirectsAndReturnData } from "../../../src/utils/slugs";
import { getAuthToken } from "../../../src/utils/cookies";
import { getPreviewRedirectUrl } from "../../../src/utils/redirects";
import { sanitize } from "../../../src/utils/misc";

// apollo & GraphQL
import client from "../../../src/apollo/client";
import { GET_POST_BY_ID } from "../../../src/queries/posts/get-post";
// import { GET_PAGE_BY_ID } from "../../../src/queries/pages/get-page";

const PostPreview = ({ data }) => {
  return (
    <Layout data={data} isPost>
      <div
        dangerouslySetInnerHTML={{
          __html: sanitize(data?.post?.content ?? {}),
        }}
      />
    </Layout>
  );
};

export default PostPreview;

export async function getServerSideProps(context) {
  const authToken = getAuthToken(context.req);

  const { params } = context || {};
  const { data, errors } = await client.query({
    query: GET_POST_BY_ID,
    variables: {
      id: Number(params?.id ?? ""),
    },
    context: {
      headers: {
        authorization: authToken ? `Bearer ${authToken}` : "",
      },
    },
  });

  const defaultProps = {
    props: {
      data: data || {},
    },
  };

  const loginRedirectURL = getPreviewRedirectUrl("post", params?.id ?? "");

  return handleRedirectsAndReturnData(
    defaultProps,
    data,
    errors,
    "post",
    true,
    loginRedirectURL
  );
}

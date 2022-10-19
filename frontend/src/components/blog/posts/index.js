import Proptypes from "prop-types";

// lodash
import { isEmpty, isArray } from "lodash";

// custom components
import Post from "../post";

const Posts = ({ posts }) => {
  if (isEmpty(posts) && isArray(posts)) {
    return null;
  }

  return (
    <div className="flex flex-wrap -mb-4">
      {posts.map((post) => (
        <div
          key={post?.node?.id ?? ""}
          className="w-full md:w-1/2 lg:w-1/3 mb-4 px-2"
        >
          <Post post={post?.node} />
        </div>
      ))}
    </div>
  );
};

Posts.propTypes = {
  posts: Proptypes.array,
};

Posts.defaultProps = {
  posts: [],
};

export default Posts;

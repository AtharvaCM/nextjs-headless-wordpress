import { isEmpty } from "lodash";

export const getPreviewRedirectUrl = (postType = "", previwPostId = "") => {
  if (isEmpty(postType) || isEmpty(previewPostId)) {
    return "";
  }

  switch (postType) {
    case "post":
      return `/blog/preview/${previwPostId}`;
    case "page":
      return `/page/preview/${previwPageId}`;
    default:
      return "/";
  }
};

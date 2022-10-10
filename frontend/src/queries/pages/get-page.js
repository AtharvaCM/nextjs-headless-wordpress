import { gql } from "@apollo/client";

// queries
import MenuFragment from "../fragments/menus";
import { HeaderFooter } from "../get-menus";

export const GET_PAGE = gql`
  query GetPageByUri($uri: String) {
    ${HeaderFooter}
    page: nodeByUri(uri: $uri) {
      ... on Page {
        id
        slug
        title
        uri
        content
      }
    }
    ${MenuFragment}
  }
`;

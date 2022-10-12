import { gql } from "@apollo/client";

// queries
import { HeaderFooter } from "../get-menus";
import MenuFragment from "../fragments/menus";
import SeoFragment from "../fragments/seo";

export const GET_PAGE = gql`
  query GetPageByUri($uri: ID!) {
    ${HeaderFooter}
    page: page(id: $uri, idType: URI) {
      id
      slug
      title
      uri
      content
      seo {
        ...SeoFragment
      }
    }
  }
  ${MenuFragment}
  ${SeoFragment}
`;

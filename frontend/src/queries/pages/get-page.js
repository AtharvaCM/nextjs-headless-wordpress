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

export const GET_PAGE_BY_ID = gql`
  query GET_PAGE_BY_ID($id: ID!) {
    ${HeaderFooter}
    page(idType: DATABASE_ID, id: $id) {
      id
      title
      content
      slug
      uri
      seo {
          ...SeoFragment
        }
    status
    }
  }
  ${MenuFragment}
  ${SeoFragment}
`;

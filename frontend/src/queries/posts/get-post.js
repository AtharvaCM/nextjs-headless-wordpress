// apollo & GraphQL
import { gql } from "@apollo/client";
import { HeaderFooter } from "../get-menus";
import MenuFragment from "../fragments/menus";
import SeoFragment from "../fragments/seo";

export const GET_POST = gql`
  query GET_POST($uri: ID!) {
    ${HeaderFooter}
    post: post(id: $uri, idType: URI) {
      id
      title
      content
      slug
      uri
      seo {
        ...SeoFragment
      }
    }
  }
  ${MenuFragment}
  ${SeoFragment}
`;

export const GET_POST_BY_ID = gql`
  query GET_POST_BY_ID($id: ID!) {
    ${HeaderFooter}
    post(idType: DATABASE_ID, id: $id) {
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

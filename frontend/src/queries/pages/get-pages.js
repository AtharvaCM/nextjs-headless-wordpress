import { gql } from "@apollo/client";

// utils
import { PAGES_COUNT } from "../../utils/slugs";

/**
 * Get pages.
 *
 */
export const GET_PAGES_URI = gql`
  query GET_PAGES_URI {
    pages: pages(first: ${PAGES_COUNT}) {
      nodes {
        id
        uri
      }
    }
  }
`;

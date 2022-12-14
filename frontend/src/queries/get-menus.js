import { gql } from "@apollo/client";

import MenuFragment from "./fragments/menus";

export const HeaderFooter = `
header: getHeader {
  favicon
  siteLogoUrl
  siteTagLine
  siteTitle
}
headerMenus: menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}) {
  edges {
    node {
      ...MenuFragment
      childItems {
        edges {
          node {
            ...MenuFragment
          }
        }
      }
    }
  }
}
footer: getFooter {
  copyrightText
  sidebarOne
  sidebarTwo
  socialLinks {
    iconName
    iconUrl
  }
}
footerMenus: menuItems(where: {location: HCMS_MENU_FOOTER, parentId: "0"}) {
  edges {
    node {
      ...MenuFragment
    }
  }
}
`;

export const GET_MENUS = gql`
  query GetMenus {
    ${HeaderFooter}
  }
  ${MenuFragment}
`;

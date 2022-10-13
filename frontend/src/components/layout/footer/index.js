import React from "react";

import { isEmpty, isArray } from "lodash";

// utils
import { sanitize } from "../../../utils/misc";
import { getIconComponentByName } from "../../../utils/icons-map";

// next
import Link from "next/link";

const index = (props) => {
  if (isEmpty(props.footerMenus) || !isArray(props.footerMenus)) {
    console.log("empty");
    return null;
  }

  return (
    <footer className="bg-violet-400 p-6">
      <div className="text-white flex flex-wrap -mx-1 overflow-hidden">
        {/* Widget One */}
        <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
          <div
            dangerouslySetInnerHTML={{
              __html: sanitize(props.footer?.sidebarOne),
            }}
          />
        </div>

        {/* Widget Two */}
        <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
          <div
            dangerouslySetInnerHTML={{
              __html: sanitize(props.footer?.sidebarTwo),
            }}
          />
        </div>

        {/* Footer Menus */}
        <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
          {!isEmpty(props.footerMenus) || isArray(props.footerMenus) ? (
            <ul>
              {props.footerMenus.map((footerMenu) => (
                <li key={footerMenu?.node?.id}>
                  <Link href={footerMenu?.node?.path}>
                    <a>{footerMenu?.node?.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      {/* Copyright Text */}
      <div className="mb-8 mt-8 w-full flex flex-wrap">
        <div className="text-white w-full md:w-1/2 lg:w-1/4">
          {props.footer?.copyrightText
            ? props.footer?.copyrightText
            : "© AtharvaCM 2022"}
        </div>
        <div className="flex justify-end w-full lg:w-3/4">
          {!isEmpty(props.footer?.socialLinks) &&
          isArray(props.footer?.socialLinks) ? (
            <ul className="flex items-center">
              {props.footer.socialLinks.map((socialLink) => (
                <li key={socialLink?.iconName} className="ml-4">
                  <a href={socialLink?.iconUrl}>
                    {getIconComponentByName(socialLink?.iconName)}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </footer>
  );
};

export default index;

import React, { useState } from "react";

// utils
import { isEmpty } from "lodash";

// next link
import Link from "next/link";

const Nav = (props) => {
  if (isEmpty(props.headerMenus)) {
    return null;
  }

  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-purple-500 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        {/* Brand */}
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <a className="flex items-center">
                <img
                  src={props.header?.favicon}
                  alt="NextJS Headless WordPress Logo"
                  width={50}
                />
                <h2 className="text-2xl font-bold text-white">
                  {props.header.siteTitle}
                </h2>
              </a>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Menu Items */}
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            {props.headerMenus?.length ? (
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {props.headerMenus.map((menu) => (
                  <li
                    key={menu?.node?.id}
                    className="text-white hover:text-indigo-200"
                  >
                    <Link href={menu?.node?.path}>
                      <a>{menu.node.label}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <Link href="#">
                <a className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* Actions */}
        <div className="hidden space-x-2 md:inline-block">
          <Link href="#">
            <a className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

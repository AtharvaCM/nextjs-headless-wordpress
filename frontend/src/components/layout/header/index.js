import React from "react";

// utils
import { isEmpty } from "lodash";

// components
import Nav from "./Nav";

const index = (props) => {
  if (isEmpty(props.headerMenus)) {
    return null;
  }

  return (
    <header className="sticky top-0 z-[1000]">
      <Nav header={props.header} headerMenus={props.headerMenus} />
    </header>
  );
};

export default index;

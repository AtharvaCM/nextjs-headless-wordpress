import { isEmpty } from "lodash";
import React from "react";

const index = (props) => {
  if (isEmpty(props.footerMenus)) {
    return null;
  }

  return <div>index</div>;
};

export default index;

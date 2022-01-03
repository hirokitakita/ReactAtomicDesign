import React from "react";
import { Header } from "../atoms/layaout/Header";

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};

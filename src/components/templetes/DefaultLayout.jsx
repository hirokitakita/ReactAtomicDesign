import React from "react";
import { Footer } from "../atoms/layaout/Footer";
import { Header } from "../atoms/layaout/Header";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

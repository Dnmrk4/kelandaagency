import IndexPage from "../components/title";
import React, { FC, ReactNode } from "react";
import Footer from "./Footer";
import Nav from "./Nav";


const Layout: FC<{ children: ReactNode }> = ({ children }) => {

  return (
    <>
      <IndexPage title="K" />
      <div className="scroll-smooth backpattern dark:backback" >
        <div className="fixed w-full ">
          <Nav />
        </div>
        {children}

        <Footer />
      </div>
    </>
  );
};
export default Layout;

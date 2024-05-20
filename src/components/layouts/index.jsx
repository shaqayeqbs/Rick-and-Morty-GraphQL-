import React from "react";
import NavBar from "../NavBar";

const Layout = ({ children, onSearch }) => {
  return (
    <div>
      <NavBar onSearch={onSearch} />
      <main className="mt-10 !md:mt-20 w-full text-center ">{children}</main>
    </div>
  );
};

export default Layout;

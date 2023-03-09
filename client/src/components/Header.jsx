import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div>
      <header className="fixed inset-x-0 top-0 z-10 h-20 flex justify-end items-center bg-green">
        <Navbar />
      </header>
    </div>
  );
}

export default Header;

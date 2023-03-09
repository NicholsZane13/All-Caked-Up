import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div>
      <header className="fixed inset-x-0 top-0 items-center bg-green grid-cols-2 p-4">


        <div className="justify-start flex pt-5 pl-4 z-10 h-20">


          <h1 className="text-lg font-bold text-white top-0 bg-green z-10 h-20 pr-4 flex font-Glook">
            All Caked Up
          </h1>
        </div>


        <div className="justify-end flex ">



          <Navbar />
        </div>
      </header>
    </div>
  );
}

export default Header;

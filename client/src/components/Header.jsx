import React, { useState } from "react";
import navbar from "./Navbar";

function Header() {
  function handleClick(path) {
    // Define function to handle button click
    window.location.href = path; // Use window.location.href property to navigate to corresponding page
  }

  return (
    <div className="sticky-top top-0 z-50 ">
      <header>
        <ul className="flex justify-end">
          <button
            className="text-right relative mx-4 bg-peri hover:bg-gray-400 text-white font-bold py-2 px-4 border border-gray-400 rounded"
            onClick={() => handleClick("/home")} // Add onClick event handler to navigate to "/home" page
            type="button"
          >
            Home
          </button>
          <button
            className="text-right relative mx-4 bg-peri hover:bg-gray-400 text-white font-bold py-2 px-4 border border-gray-400 rounded"
            onClick={() => handleClick("/menu")} // Add onClick event handler to navigate to "/menu" page
            type="button"
          >
            Menu
          </button>
          <button
            className="text-right relative mx-4 bg-peri hover:bg-gray-400 text-white font-bold py-2 px-4 border border-gray-400 rounded"
            onClick={() => handleClick("/order")} // Add onClick event handler to navigate to "/order" page
            type="button"
          >
            Online Order
          </button>
          <button
            className="text-right relative mx-4 bg-peri hover:bg-gray-400 text-white font-bold py-2 px-4 border border-gray-400 rounded"
            onClick={() => handleClick("/portfolio")} // Add onClick event handler to navigate to "/portfolio" page
            type="button"
          >
            Portfolio
          </button>
        </ul>
      </header>
    </div>
  );
}

export default Header;
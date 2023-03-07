import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky-top top-0 z-50">
      <nav>
        <ul className="flex justify-end">
          <li>
            <Link to="/">
              <button className="text-right relative mx-4 bg-peri hover:bg-gray-400 text-white font-bold py-2 px-4 border border-gray-400 rounded">
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link to="/menu">
              <button className="text-right relative mx-4 bg-peri hover:bg-gray-400 text-white font-bold py-2 px-4 border border-gray-400 rounded">
                Menu
              </button>
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              <button className="text-right relative mx-4 bg-peri hover:bg-gray-400 text-white font-bold py-2 px-4 border border-gray-400 rounded">
                Portfolio
              </button>
            </Link>
          </li>
          <li>
            <Link to="/services">
              <button className="text-right relative mx-4 bg-peri hover:bg-gray-400 text-white font-bold py-2 px-4 border border-gray-400 rounded">
                Services
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;


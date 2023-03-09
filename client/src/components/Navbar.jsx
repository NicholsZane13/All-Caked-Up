import React from "react";
import { Link } from "react-router-dom";
import Auth from '../utils/auth';

function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className="fixed top-0 bg-green z-10 h-20 flex items-center justify-center pr-4">
      <nav>
        <ul className="flex justify-end bg-green">
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
          <li>
            {Auth.loggedIn() ?(
              <button className="text-right relative mx-4 bg-peri hover:bg-gray-400 text-white font-bold py-2 px-4 border border-gray-400 rounded" onClick={logout}>
              Log Out
            </button>
            ) : (
            <Link to="/login">
              <button className="text-right relative mx-4 bg-peri hover:bg-gray-400 text-white font-bold py-2 px-4 border border-gray-400 rounded">
                Log In
              </button>
            </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

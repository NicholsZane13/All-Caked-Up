import React, { useState } from "react";
import navbar from "./Navbar";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div class="sticky top-0 z-50">
      <header>
        <ul class="content-evenly display:inline-block">
          <li>Home</li>
          <li>About</li>
          <li>
            <button onClick={toggleMenu}>Dropdown</button>
            {menuOpen && (
              <ul class="content-evenly sticky top-0 z">
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            )}
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;

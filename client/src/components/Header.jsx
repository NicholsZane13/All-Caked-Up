import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>
            <button onClick={toggleMenu}>Dropdown</button>
            {menuOpen && (
              <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div class="sticky top-0 z-50">
      <header>
        <nav class = "content-evenly display:inline-block">
          <ul>
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
        </nav>
      </header>
    </div>
  );
}

export default Header;

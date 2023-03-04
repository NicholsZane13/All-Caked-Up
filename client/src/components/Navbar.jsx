import React from "react";

function Navbar() {
  return (
    <nav class="sticky top-0 z-50 group">
      <ul class="hidden group-hover:block">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Online Order</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
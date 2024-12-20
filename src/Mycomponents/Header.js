import React from "react";
import "../cssOfComponents/header.css";

export default function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li><a>Home</a></li>
          <li><a>Work</a></li>
          <li><a>About</a></li>
          <li><a>contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

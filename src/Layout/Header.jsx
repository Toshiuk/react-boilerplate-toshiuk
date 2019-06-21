import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          Logo
        </Link>
        <Link to="/">
          Dashboard
        </Link>
      </div>
    </header>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

export default function Footer() {
  return (
    <footer id="main-footer">
      <div className="footer-content">
        <Link to="/">
          Logo
        </Link>
        <Link to="/">
          Dashboard
        </Link>
      </div>
    </footer>
  );
}

import { useState } from "react";
import {NavLink, Link} from 'react-router-dom';
import '../styles/nav.css';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <ul className={`main-nav ${menuOpen ? 'open' : ''}`}>
        <li><NavLink to="/home">Home</NavLink></li>
        <li className="dropdown-wrapper">
          <NavLink to="/careers">
            Careers <span className="chevron">▾</span>
          </NavLink>
          <div
            className='dropdown'
          >
            <span className="dropdown-label">Roles</span>
            <Link to="/careers/ta-cleaner">Trade assitant / Commercial cleaner</Link>
            <Link to="/careers/skilled-maintenance">Skilled maintenance</Link>
            <div className="dropdown-divider" />
            <span className="dropdown-label">Location</span>
            <Link to="/careers/life-in-karratha">Life in Karratha</Link>
          </div>
        </li>
        <li><NavLink to="/about">About us</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </>
  );
}

export default Nav
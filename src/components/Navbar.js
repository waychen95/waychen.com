import React, { useState } from 'react';
import { useEffect } from 'react';
import '../styles/Navbar.css';
import {FaBars} from 'react-icons/fa';

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <div className={`left-side ${toggle ? 'open' : ''}`}>
          <div className={`logo ${toggle ? 'open' : ''}`}>
            <h1>Wayne Chen</h1>
          </div>
          <div className={`hiddenLinks ${toggle ? 'open' : ''}`}>
            <div>
              <a href='#'>Home</a>
            </div>
            <div>
              <a href='#'>About</a>
            </div>
            <div>
              <a href='#'>Project</a>
            </div>
            <div>
              <a href='#'>Contact</a>
            </div>
          </div>
        </div>
        <div className='navbar-section' onClick={handleToggle}>
          <FaBars size="30" className={`hamburgerMenu ${toggle ? 'open' : ''}`}/>
          <ul className='navbar-option'>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Project</a></li>
              <li><a href='#'>Contact</a></li>
          </ul>
        </div>
      </nav> 
    </>
  );
}

export {Navbar};
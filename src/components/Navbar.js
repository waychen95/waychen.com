import React, { useState } from 'react';
import { useEffect } from 'react';
import '../styles/Navbar.css';
import {FaBars} from 'react-icons/fa';
import WebsiteLogo from '../assets/websitelogo.png';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <div className={`left-side ${toggle ? 'open' : ''}`}>
          <div className={`logo ${toggle ? 'open' : ''}`}>
            <a href='#'><img src={WebsiteLogo} alt='website-logo' className='website-logo'></img></a>
          </div>
        </div>
        <div className='navbar-section' onClick={handleToggle}>
          <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              className={`hamburgerMenu ${toggle ? 'open' : ''}`}
              onClick={handleClick}
            >
              <FaBars size="30" className={`hamburgerMenu ${toggle ? 'open' : ''}`}/>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose} href='#'>Home</MenuItem>
              <MenuItem onClick={handleClose}>About</MenuItem>
              <MenuItem onClick={handleClose}>Contact</MenuItem>
            </Menu>
          <ul className='navbar-option'>
              <li><a href='#'>Home</a></li>
              <li><a href='#empty-holder'>About</a></li>
              <li><a href='#contact-section'>Contact</a></li>
          </ul>
        </div>
      </nav> 
    </>
  );
}

export {Navbar};
import React, { useState } from 'react';
import { useEffect } from 'react';
import '../styles/Navbar.css';
import { FaBars } from 'react-icons/fa';
import WebsiteLogo from '../assets/websitelogo.png';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider, { ListItemIcon, ListItemText } from '@mui/material';
import { grey } from '@mui/material/colors';
import { ListItemButton } from '@mui/material';

const drawerWidth = 240;

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

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
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
            className={`hamburgerMenu ${toggle ? 'open' : ''}`}
            onClick={toggleDrawer(true)}
            style={{ color: grey[900] }}
          >
            <FaBars size="30" className={`hamburgerMenu ${toggle ? 'open' : ''}`} />
          </Button>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{
              '& .MuiDrawer-paper': {width: drawerWidth }
            }}
          >
            <List className='hamburger-buttons'>
              <ListItemButton button component="a" href="#">
                <ListItemIcon></ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItemButton>
              <ListItemButton button component="a" href="#empty-holder">
                About
              </ListItemButton>
              <ListItemButton button component="a" href="#contact-section">
                Contact
              </ListItemButton>
            </List>
          </Drawer>
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

export { Navbar };
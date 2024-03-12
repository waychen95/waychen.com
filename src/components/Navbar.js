import React, { useState } from 'react';
import { useEffect } from 'react';
import '../styles/Navbar.css';
import { FaBars } from 'react-icons/fa';
import WebsiteLogo from '../assets/websitelogo.png';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { grey } from '@mui/material/colors';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

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
            anchor="top"
            open={drawerOpen}
            className='customer-drawer'
            onClose={toggleDrawer(false)}
          >
            <List className='custom-list' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ListItem disablePadding>
                <ListItemButton button component="a" href="#">
                  <ListItemIcon><HomeIcon fontSize='medium'/></ListItemIcon>
                  <ListItemText>Home</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding style={{ width: '100%', textAlign: 'center' }}>
                <ListItemButton onClick={() => window.scrollTo(0, document.getElementById('empty-holder').offsetTop)}>
                  <ListItemIcon><InfoIcon fontSize='medium'/></ListItemIcon>
                  <ListItemText>About</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => window.scrollTo(0, document.getElementById('contact-section').offsetTop)}>
                  <ListItemIcon><ContactMailIcon fontSize='medium'/></ListItemIcon>
                  <ListItemText>Contact</ListItemText>
                </ListItemButton>
              </ListItem>
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
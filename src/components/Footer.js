import React from 'react';
import '../styles/Footer.css';
import LinkedIn from '../assets/linkedin.png';
import Github from '../assets/git.png';

const Footer = () => {

  return (
    <footer className="footer">
      <div>
        <p>&copy; {new Date().getFullYear()} Your Website Name</p>
      </div>
      <div className='social-link'>
        <img id='linkedin' src={LinkedIn}></img>
        <img src={Github}></img>
      </div>
    </footer>
  );
};

export default Footer;

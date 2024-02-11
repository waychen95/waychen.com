import React from 'react';
import '../styles/Footer.css';
import LinkedIn from '../assets/linkedin.png';
import Github from '../assets/git.png';

const Footer = () => {

  return (
    <footer className="footer">
      <div>
        <p>&copy; Wayne Chen</p>
      </div>
      <div className='social-link'>
        <img id='linkedin' src={LinkedIn} alt='linkedin logo'></img>
        <img src={Github} alt='github logo'></img>
      </div>
    </footer>
  );
};

export default Footer;

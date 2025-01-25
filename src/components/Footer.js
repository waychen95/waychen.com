import React from 'react';
import '../styles/Footer.css';
import LinkedIn from '../assets/linkedin.png';
import Github from '../assets/git.png';

function linkedin() {
  window.open('https://www.linkedin.com/in/wayne-chen-156518203/', '_blank');
}

function github() {
  window.open('https://github.com/waychen95', '_blank')
}

const Footer = () => {

  return (
    <footer className="footer">
      <div>
        <p>&copy;waychen.com</p>
      </div>
      <div className='social-link'>
        <img id='linkedin' src={LinkedIn} alt='linkedin logo' onClick={linkedin}></img>
        <img src={Github} alt='github logo' onClick={github}></img>
      </div>
    </footer>
  );
};

export default Footer;

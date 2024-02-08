import React from 'react';
import '../styles/Footer.css';

const Footer = () => {

  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Your Website Name</p>
    </footer>
  );
};

export default Footer;

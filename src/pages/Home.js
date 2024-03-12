import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import BannerImage from '../assets/backgroundImage.png';
import Button from '@mui/material/Button';
import ResumeIcon from '@mui/icons-material/Description';
import Resume from '/Users/wayanchen/Desktop/waychen.com/waychen.com/src/assets/resume.pdf';
import { lightBlue } from '@mui/material/colors';

const Home = () => {
  const [text, setText] = useState('');
  const phrases = [
    "Hi, my name is Wayne. I am a developer currently looking for co-op. Feel free to contact me!"
  ];

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';
    let interval;

    const type = () => {
      if (currentIndex < phrases[0].length) {
        currentText += phrases[0].charAt(currentIndex);
        setText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          currentText = '';
          currentIndex = 0;
          interval = setInterval(type, 50);
        }, 7000);
      }
    };

    interval = setInterval(type, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <div id="background-image" className='main' style={{ backgroundImage: `url(${BannerImage})` }}></div>
        <div className='banner-text'>
          <div className='typing-text'>
            <h1 className='text'>{text}<span className="cursor">|</span></h1>
          </div>
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <Button color='primary' variant="contained" style={{backgroundColor: lightBlue[700]}} endIcon={<ResumeIcon />}>
              Resume
            </Button>
          </a>
        </div>
      </div>
      <div id='empty-holder'></div>
    </>
  );
}

export default Home;
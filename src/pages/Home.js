import React from 'react';
import '../styles/Home.css';
import BannerImage from '../assets/banner.avif';
import Button from '@mui/material/Button';
import ResumeIcon from '@mui/icons-material/Description';
import Resume from '/Users/wayanchen/Desktop/waychen.com/waychen.com/src/assets/resume.pdf';

const Home = () => {
  return (
    <div id="background-image" className='main' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='banner-text'>
        <h1>Hi, I am a developer currently looking for co-op. Feel free to contact me!</h1>
        <a href={Resume} target="_blank" rel="noopener noreferrer">
          <Button color='primary' variant="contained" endIcon={<ResumeIcon />}>
            Resume
          </Button>
        </a>
      </div>
      <div id='empty-holder'></div>
    </div>
  )
}

export default Home
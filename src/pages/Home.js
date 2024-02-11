import React from 'react';
import '../styles/Home.css';
import BannerImage from '../assets/backgroundImage.png';
import Button from '@mui/material/Button';
import ResumeIcon from '@mui/icons-material/Description';
import Resume from '/Users/wayanchen/Desktop/waychen.com/waychen.com/src/assets/resume.pdf';
import { lightBlue } from '@mui/material/colors';

const Home = () => {
  return (
    <div>
      <div id="background-image" className='main' style={{ backgroundImage: `url(${BannerImage})` }}></div>
      <div className='banner-text'>
        <h1>Hi, my name is Wayne. I am a developer currently looking for co-op. Feel free to contact me!</h1>
        <a href={Resume} target="_blank" rel="noopener noreferrer">
          <Button color='primary' variant="contained" style={{backgroundColor: lightBlue[700]}} endIcon={<ResumeIcon />}>
            Resume
          </Button>
        </a>
        <div id='empty-holder'></div>
      </div>
    </div>
    
    
  )
}

export default Home
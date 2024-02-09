import React from 'react';
import '../styles/Home.css';
import BannerImage from '../assets/banner.avif';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const Home = () => {
  return (
    <div id="background-image" className='main' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className='banner-text'>
        <h1>Hi, I am a developer currently looking for co-op. Feel free to contact me!</h1>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
      <div id='empty-holder'></div>
    </div>
  )
}

export default Home
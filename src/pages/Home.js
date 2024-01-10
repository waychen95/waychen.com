import React from 'react';
import '../styles/Home.css';
import BannerImage from '../assets/banner.avif';

const Home = () => {
  return (
    <div className='main' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div>
        <h1>Hi</h1>
      </div>
    </div>
  )
}

export default Home
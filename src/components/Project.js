import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import City from '../assets/city.jpeg';
import NBAdle from '../assets/nbadle.png';
import '../styles/Project.css';
import WebsiteLogo from '../assets/websitelogo.png';
import { CardActionArea } from '@mui/material';

const style = {
  ':hover': {
    boxShadow: 20
  },
  width: '100%'
}

const mediaStyle = {
  backgroundPosition: 'center center',
}

const handleButtonClick = () => {
  // Redirect to GitHub page
  window.location.href = 'https://github.com/waychen95/waychen.com';
};

const handleButtonClick2 = () => {
  // Redirect to GitHub page
  window.location.href = 'https://github.com/waychen95/1800_202330_BBY19';
};

const handleButtonClick3 = () => {
  // Redirect to GitHub page
  window.location.href = 'https://nba-stats-ecru.vercel.app/';
};

const Project = () => {
  return (
    <div id='project-cards'>
            <Card sx={style} className='card'>
        <CardActionArea onClick={handleButtonClick3}>
          <CardMedia
            component="img"
            alt="city connect"
            height="300"
            image={NBAdle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              NBAdle
            </Typography>
            <Typography variant='body1'>
              | React, PostgreSQL, Flask, Python, JavaScript, HTML, CSS
            </Typography>
            <Typography variant="body2" color="text.secondary">
              NBAdle is a Wordle-inspired web application for NBA enthusiasts. The goal of the game is to guess an NBA player within a limited number of attempts based on various clues.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={style} className='card'>
        <CardActionArea onClick={handleButtonClick}>
          <CardMedia
            component="img"
            alt="waychen"
            height="300"
            image={WebsiteLogo}
            style={mediaStyle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              waychen.com 
            </Typography>
            <Typography variant='body1'>
              | React, Material UI, JavaScript, HTML, CSS
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A personal portfolio utilizes React and Material UI to showcase my work and experience.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={style} className='card'>
        <CardActionArea onClick={handleButtonClick2}>
          <CardMedia
            component="img"
            alt="city connect"
            height="300"
            image={City}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              CityConnect
            </Typography>
            <Typography variant='body1'>
              | Bootstrap, Firebase, JavaScript, HTML, CSS
            </Typography>
            <Typography variant="body2" color="text.secondary">
              CityConnect is an app to help citizens to quickly report problems and communicate with their local city halls, 
              by making it simple and fast with a user-friendly, real-time interface.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default Project
import React from 'react'
import {Grid, TextField} from '@mui/material';
import Button from '@mui/material/Button';
import '../styles/Contact.css';
import { lightBlue } from '@mui/material/colors';
import LinkedIn from '../assets/linkedin.png';
import Github from '../assets/git.png';


const color = lightBlue[900];

function Submit() {

}

function Contact() {

  return (
    <div id='contact-section'>
      <div className='contact-text'>
        <h1>CONTACT ME</h1>
        <p>
          Ready to connect? Shoot me a message via the contact form! 
          Whether you've got a cool project idea, want to team up, or simply want to chat, I'm here for it. 
          Let's make something awesome happen together!
        </p>
        <div className='social-link'>
          <img id='linkedin' src={LinkedIn} alt='linkedin logo'></img>
          <img src={Github} alt='github logo'></img>
        </div>
      </div>
      <div>
        <form className='contact-form'>
            <Grid container className='contact-grid'>
              <Grid xs={12} item>
                <TextField label="Name" placeholder='Enter first name' variant='outlined' fullWidth required inputProps={{backgroundColor: 'black'}}></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField label="Email" placeholder='Enter email' variant='outlined' fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField label="Phone" placeholder='Enter phone number' variant='outlined' fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField label="Message" multiline rows={4} placeholder='Type your message here' variant='outlined' fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                <Button type='submit' variant='contained' style={{backgroundColor: color}} onClick={Submit()} fullWidth>Submit</Button>
              </Grid>
            </Grid>
          </form>
      </div>
    </div>
  )
}

export default Contact
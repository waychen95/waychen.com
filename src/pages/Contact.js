import React, {useState, useEffect} from 'react'
import {Grid, TextField} from '@mui/material';
import Button from '@mui/material/Button';
import '../styles/Contact.css';
import { lightBlue } from '@mui/material/colors';
import LinkedIn from '../assets/linkedin.png';
import Github from '../assets/git.png';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';


const color = lightBlue[800];

function Contact() {

  const form = useRef();

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [showAlert]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ooxzywn', 'template_d9dyw97', form.current, {
        publicKey: 'ytMUpZEgMKOZUIS64',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setShowAlert(true);

          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div id='contact-section'>
      {showAlert && (
        <Alert
          sx={{
            position: 'fixed',
            top: '5%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            width: '30%',
            padding: '1rem',
            backgroundColor: 'white',
            fontFamily: 'Gill Sans, Gill Sans MT',
            fontSize: '18px'
          }}
          severity="success" // Change severity if needed
        >
          Your message has been sent successfully!
        </Alert>
      )}
      <div className='contact-text'>
        <h1>CONTACT ME</h1>
        <p>
          Ready to connect? Shoot me a message via the contact form! 
          Whether you've got a cool project idea, want to team up, or simply want to chat, I'm here for it. 
          Let's make something awesome happen together!
        </p>
        <div className='social-link-contact'>
          <img id='linkedinContact' src={LinkedIn} alt='linkedin logo'></img>
          <img src={Github} alt='github logo'></img>
        </div>
      </div>
      <div>
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
            <Grid container className='contact-grid'>
              <Grid xs={12} item>
                <TextField label="Name" name="user_name" placeholder='Enter first name' variant='outlined' fullWidth required inputProps={{backgroundColor: 'black'}}></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField label="Email" name="user_email" placeholder='Enter email' variant='outlined' fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField label="Phone" name="user_phone" placeholder='Enter phone number' variant='outlined' fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField label="Message" name="message" multiline rows={4} placeholder='Type your message here' variant='outlined' fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                <Button type='submit' variant='contained' style={{backgroundColor: color}} fullWidth>Submit</Button>
              </Grid>
            </Grid>
          </form>
      </div>
    </div>
  )
}

export default Contact
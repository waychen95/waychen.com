import React from 'react'
import { Card, CardContent, Grid, TextField, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import '../styles/Contact.css';

function Contact() {
  return (
    <div id='contact-section'>
      <div className='contact-text'>
        <h1>CONTACT US</h1>
      </div>
      <Card>
        <CardContent className='contact-card'>
          <Typography>Fill up the form</Typography>
          <form>
            <Grid container>
              <Grid xs={12} sm={6}>
                <TextField label="First Name" placeholder='Enter first name' variant='outlined' fullWidth required></TextField>
              </Grid>
              <Grid xs={12} sm={6}>
                <TextField label="Last Name" placeholder='Enter last name' variant='outlined' fullWidth required></TextField>
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
                <Button type='submit' variant='contained' color='primary' fullWidth>Submit</Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Contact
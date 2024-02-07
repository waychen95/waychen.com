import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProfileIcon from '@mui/icons-material/AssignmentInd';
import ExperienceIcon from '@mui/icons-material/HomeRepairService';
import SkillIcon from '@mui/icons-material/Construction';
import ProfileImage from '../assets/profile_picture.jpeg';
import '../styles/Content.css';
import Portfolio from './Portfolio';
import Skills from './Skills';
import '../styles/Skills.css';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Content = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 0, borderColor: 'black'}}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            id="about-section"
            aria-label="about-section"
            sx={{
              "& button:hover" : {
              }
            }}
            TabIndicatorProps={{
              style: {
                backgroundColor: "black"
              }
            }}
            textColor='black'>
            <Tab label="MY BACKGROUND" {...a11yProps(0)} icon={<ProfileIcon/>}/>
            <Tab label="SKILLS" {...a11yProps(1)} icon={<SkillIcon />}/>
            <Tab label="Projects" {...a11yProps(2)} icon={<ExperienceIcon />}/>
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0} className='text'>
          <div className='background-section'>
            <h1 className='background-title'>MY BACKGROUND</h1>
            <div className='background-content'>
              <div className='content-image'>
                <img src={ProfileImage}></img>
              </div>
              <div className='content-text'>
                <p>
                  Hey there! I'm Wayne Chen, currently cruising through Term 2 in BCIT's Computer System Technology program, on the lookout for a co-op position to level up my skills. I'm your go-to guy for JavaScript, Java, Python, and more. My stint as an Education Coordinator and Research Assistant showed off my knack for organizing and working smoothly with others.<br></br><br></br>

                  Backstory: Initially, I aimed to be a data analyst, minoring in statistics at UBC. But, turns out, I prefer creating stuff rather than digging through data. That's why I made the switch to computer science, and so far, I'm loving it.<br></br><br></br>

                  BCIT drew me in with its stellar rep for hands-on learning and career prep. The focus on real-world skills, industry projects, and co-op opportunities made it a no-brainer. A thumbs-up from a friend in the program sealed the deal.<br></br><br></br>

                  Now, gearing up for co-op, my goal is straightforward: get hands-on in tech. My past gigs weren't techie enough, so I want to fix that before graduation. I'm all about becoming a pro at what I do and figuring out exactly where I want my career to go.<br></br>

                  What roles am I eyeing? Software developer, especially in front-end or full-stack, and QA roles. Let's make tech happen!
                </p>
              </div>
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1} className='text'>
            <Skills />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2} className='text'>
          <Portfolio />
        </CustomTabPanel>
    </Box>
  )
}

export default Content;
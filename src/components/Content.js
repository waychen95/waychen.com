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
import Project from './Project';
import Skills from './Skills';



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

const Content = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // useEffect(() => {
  //   // Applying the CSS style dynamically
  //   document.querySelector('.css-heg063-MuiTabs-flexContainer').style.justifyContent = 'space-around';
  // }, []);

  return (
    <Box>
        <Box sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
        }}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            id="about-section"
            aria-label="about-section"
            variant="fullWidth"
            TabIndicatorProps={{ 
            style: {
              backgroundColor: "black",
            }}}
            textColor='inherit'
            sx={{
              '& .MuiTab-root': {
                color: 'black', // Sets text color to black
              },
              '& .Mui-selected': {
                color: 'black', // Sets text color of selected tab to black
              },
            }}>
            <Tab label="BACKGROUND" value={0} icon={<ProfileIcon/>}/>
            <Tab label="SKILLS" value={1} icon={<SkillIcon />}/>
            <Tab label="Projects" value={2} icon={<ExperienceIcon />}/>
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0} className='text'>
          <div className='background-section'>
            <div className='background-content'>
              <div className='content-image'>
                <img src={ProfileImage} alt='wayne'></img>
              </div>
              <div className='content-text'>
                <h1>BACKGROUND</h1>
                <p>
                  Hello! I'm Wayne Chen, a <strong>Term 4 Computer Systems Technology student at BCIT</strong> with a strong foundation in programming and web development.  
                  I am proficient in <strong>Python, Java, JavaScript</strong>, and more, and experienced in building full-stack applications with modern web technologies.<br /><br />
                  At IOTO, I developed the <em>Legislator Analysis</em> and <em>US Battleground</em> pages, handling <strong>data collection</strong> with BeautifulSoup and Selenium, <strong>database management</strong> using Neo4j and Cypher, and <strong>API development</strong> with Flask.  
                  I designed interactive web pages that presented complex data visually, improving usability and reporting efficiency.<br /><br />
                  I have also worked as a Research Assistant, strengthening my <strong>organizational and collaborative skills</strong>.  
                  I am eager to contribute my technical expertise and problem-solving abilities to a full-time software development role, delivering solutions that make an impact.<br /><br />
                </p>
                <p>Feel free to explore my projects and skills in the tabs above!</p>
              </div>
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1} className='text'>
            <Skills />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2} className='text'>
          <Project />
        </CustomTabPanel>
    </Box>
  )
}

export default Content;
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
                  Hello! I'm Wayne Chen, a Term 3 student in the Computer System Technology program at BCIT.  
                  Currently seeking a co-op opportunity.<br></br><br></br>  
                  Proficient in languages like Python, Java, JavaScript, and more, I bring a solid foundation in programming and web development.<br></br><br></br>  
                  During my co-op at IOTO, I focused on data collection using BeautifulSoup and Selenium, database management with Neo4j using Cypher queries, API endpoint development, and designing and building web pages to present data visually.  
                  Notably, I developed the Legislator Analysis and US Battleground pages, structuring US political data efficiently for user interaction and reporting.<br></br><br></br>  
                  My experience also includes roles as an Education Coordinator and Research Assistant, showcasing my organizational and collaborative skills.<br></br><br></br>  
                  I am eager to apply my skills in a real-world setting.  
                  With a focus on programming and web technologies, I am ready to contribute effectively to a dynamic team.<br></br><br></br>  
                </p>
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
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TechImage from '../assets/software.png';
import '../styles/Skills.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const StyledStack = styled(Stack)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

function Skills() {
  const [toggleSections, setToggleSections] = useState({});

  // Handler function to toggle the state of a section in skill-section-hidden
  const toggleHiddenSection = (sectionId) => {
    setToggleSections((prevState) => ({
      ...prevState,
      [sectionId]: !prevState[sectionId]
    }));
  };

  return (
    <div id='skill-page'>
      <div className='skill-section'>
        <div className='skills'>
          <h1>Language</h1>
          <div className='item'>
            <div>Python</div>
            <div>Java</div>
            <div>JavaScript</div>
            <div>C++</div>
            <div>C</div>
            <div>R</div>
          </div>
        </div>
        <div className='skills'>
          <h1>Web Development</h1>
          <div className='item'>
            <div>React</div>
            <div>Bootstrap</div>
            <div>HTML</div>
            <div>CSS</div>
            <div>Tailwind CSS</div>
            <div>Node</div>
            <div>Express</div>
            <div>AJAX</div>
          </div>
        </div>
        <div className='skills'>
          <h1>Database & Cloud</h1>
          <div className='item'>
            <div>PostgreSQL</div>
            <div>MySQL</div>
            <div>Firebase</div>
            <div>MongoDB</div>
            <div>Neo4j</div>
            <div>AWS (S3, RDS, EC2, CloudFront)</div>
          </div>
        </div>
        <div className='skills'>
          <h1>Tools</h1>
          <div className='item'>
            <div>Git/GitHub</div>
            <div>Docker</div>
          </div>
        </div>
        <div className='skills'>
          <h1>Methodology</h1>
          <div className='item'>
            <div>Agile</div>
            <div>Scrum</div>
          </div>
        </div>
      </div>
      <div className='skill-section-hidden'>
        <Box spacing={2}>
          <div className='skills-hidden' onClick={() => toggleHiddenSection('language')}>
            <div className='skills-head'>
              <h1>Language</h1>
              <ArrowDropDownIcon/>
            </div>
            <StyledStack spacing={2}>
              {toggleSections['language'] && (
                <>
                  <Paper>Python</Paper>
                  <Paper>JavaScript</Paper>
                  <Paper>Java</Paper>
                  <Paper>C++</Paper>
                  <Paper>C</Paper>
                  <Paper>R</Paper>
                </>
              )}
            </StyledStack>
          </div>
          <div className='skills-hidden' onClick={() => toggleHiddenSection('webDev')}>
            <div className='skills-head'>
              <h1>Web & Database</h1>
              <ArrowDropDownIcon/>
            </div>
            <StyledStack spacing={2}>
              {toggleSections['webDev'] && (
                <>
                  <Paper>React</Paper>
                  <Paper>Bootstrap</Paper>
                  <Paper>HTML</Paper>
                  <Paper>CSS</Paper>
                  <Paper>Tailwind CSS</Paper>
                  <Paper>Node</Paper>
                  <Paper>Express</Paper>
                  <Paper>AJAX</Paper>
                </>
              )}
            </StyledStack>
          </div>
                    <div className='skills-hidden' onClick={() => toggleHiddenSection('dbCloud')}>
            <div className='skills-head'>
              <h1>Database & Cloud</h1>
              <ArrowDropDownIcon/>
            </div>
            <StyledStack spacing={2}>
              {toggleSections['dbCloud'] && (
                <>
                  <Paper>PostgreSQL</Paper>
                  <Paper>MySQL</Paper>
                  <Paper>Firebase</Paper>
                  <Paper>MongoDB</Paper>
                  <Paper>Neo4j</Paper>
                  <Paper>AWS (S3, RDS, EC2, CloudFront)</Paper>
                </>
              )}
            </StyledStack>
          </div>
          <div className='skills-hidden' onClick={() => toggleHiddenSection('tool')}>
            <div className='skills-head'>
              <h1>Tool</h1>
              <ArrowDropDownIcon/>
            </div>
            <StyledStack spacing={2}>
              {toggleSections['tool'] && (
                <>
                  <Paper>Git/GitHub</Paper>
                  <Paper>Docker</Paper>
                </>
              )}
            </StyledStack>
          </div>
          <div className='skills-hidden' onClick={() => toggleHiddenSection('methodology')}>
            <div className='skills-head'>
              <h1>Methodology</h1>
              <ArrowDropDownIcon/>
            </div>
            <StyledStack spacing={2}>
              {toggleSections['methodology'] && (
                <>
                  <Paper>Agile</Paper>
                  <Paper>Scrum</Paper>
                </>
              )}
            </StyledStack>
          </div>
        </Box>
      </div>
      <div className='skill-image'>
        <img src={TechImage} alt='software'></img>
      </div>
    </div>
  );
}

export default Skills;
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
            <div>C</div>
            <div>R</div>
          </div>
        </div>
        <div className='skills'>
          <h1>Web & Database</h1>
          <div className='item'>
            <div>React</div>
            <div>Vite</div>
            <div>Node</div>
            <div>Express</div>
            <div>HTML</div>
            <div>CSS</div>
            <div>Bootstrap</div>
            <div>PostgreSQL</div>
            <div>MySQL</div>
            <div>Firebase</div>
            <div>MongoDB</div>
            <div>Neo4j</div>
          </div>
        </div>
        <div className='skills'>
          <h1>Tech</h1>
          <div className='item'>
            <div>Git</div>
            <div>Visual Studio</div>
            <div>PyCharm</div>
            <div>InteliJ</div>
            <div>Eclipse</div>
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
                  <Paper>Java</Paper>
                  <Paper>JavaScript</Paper>
                  <Paper>C</Paper>
                  <Paper>R</Paper>
                </>
              )}
            </StyledStack>
          </div>
          <div className='skills-hidden' onClick={() => toggleHiddenSection('webDatabase')}>
            <div className='skills-head'>
              <h1>Web & Database</h1>
              <ArrowDropDownIcon/>
            </div>
            <StyledStack spacing={2}>
              {toggleSections['webDatabase'] && (
                <>
                  <Paper>React</Paper>
                  <Paper>Vite</Paper>
                  <Paper>Node</Paper>
                  <Paper>Express</Paper>
                  <Paper>HTML</Paper>
                  <Paper>CSS</Paper>
                  <Paper>Bootstrap</Paper>
                  <Paper>PostgreSQL</Paper>
                  <Paper>MySQL</Paper>
                  <Paper>Firebase</Paper>
                  <Paper>MongoDB</Paper>
                  <Paper>Neo4j</Paper>
                </>
              )}
            </StyledStack>
          </div>
          <div className='skills-hidden' onClick={() => toggleHiddenSection('tech')}>
            <div className='skills-head'>
              <h1>Tech</h1>
              <ArrowDropDownIcon/>
            </div>
            <StyledStack spacing={2}>
              {toggleSections['tech'] && (
                <>
                  <Paper>Git</Paper>
                  <Paper>Visual Studio</Paper>
                  <Paper>PyCharm</Paper>
                  <Paper>InteliJ</Paper>
                  <Paper>Eclipse</Paper>
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
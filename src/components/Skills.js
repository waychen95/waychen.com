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
            <div>JavaScript</div>
            <div>Java</div>
            <div>Python</div>
            <div>C</div>
            <div>R</div>
          </div>
        </div>
        <div className='skills'>
          <h1>Web & Database</h1>
          <div className='item'>
            <div>Bootstrap</div>
            <div>React</div>
            <div>Node</div>
            <div>HTML</div>
            <div>CSS</div>
            <div>Firebase</div>
            <div>MySQL</div>
          </div>
        </div>
        <div className='skills'>
          <h1>Tech</h1>
          <div className='item'>
            <div>Git</div>
            <div>Visual Studio</div>
            <div>Eclipse</div>
            <div>PyCharm</div>
            <div>InteliJ</div>
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
                  <Paper>JavaScript</Paper>
                  <Paper>Java</Paper>
                  <Paper>Python</Paper>
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
                  <Paper>Bootstrap</Paper>
                  <Paper>React</Paper>
                  <Paper>Node</Paper>
                  <Paper>HTML</Paper>
                  <Paper>CSS</Paper>
                  <Paper>Firebase</Paper>
                  <Paper>MySQL</Paper>
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
                  <Paper>Eclipse</Paper>
                  <Paper>PyCharm</Paper>
                  <Paper>IntelliJ</Paper>
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
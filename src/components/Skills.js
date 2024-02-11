import React from 'react'
import TechImage from '../assets/skillImage.png'

function Skills() {
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
            <div>Visual Studi</div>
            <div>Eclipse</div>
            <div>PyCharm</div>
            <div>InteliJ</div>
          </div>
        </div>
      </div>
      <div className='skill-image'>
        <img src={TechImage} alt='software'></img>
      </div>
      
    </div>

  )
}

export default Skills
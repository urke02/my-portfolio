import React from 'react'
import '../App.css';
import Building from '../images/building.jpg';

const style = {
  backgroundImage: `url(${Building})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '92.8vh',
}

function Portfolio() {
  return (
    <div style={style}>
      <div className='portfolioCenter'>
        <h1>UNDER CONSTRUCTION</h1>
        <p>
          This page is currently under construction.
          I’m working on preparing and selecting projects that will soon be showcased here. The goal is to provide a clear overview of my previous work, skills, and areas of interest.
          Thank you for your patience and understanding.
          In the meantime, feel free to explore the other sections of the website or <a href='mailto:tomicuros006@gmail.com'>contact me</a> for more information.
        </p>
      </div>
    </div>
  )
}

export default Portfolio
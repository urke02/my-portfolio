import React from 'react'
import '../App.css';
import UrosHead from '../images/uros_head.jpg';
import bgImage from '../images/backgroundLinks2.jpg';

function Links() {
  return (
    <div>
        <div className='centered-container'>
            <img src={UrosHead} alt='Uros Logo' className='urosLogo'/>
        </div>
        
        <p className='centered-container par'>Check out my links</p><br/>

        <div className='centered-container'>
            <p className='par1'>My Social Networks:</p>
        </div>
        
        <div className='centeredLinks'>
            <div className=' centeredLinksView'><a href='https://www.facebook.com/tomicuros2002' target='_blank' rel='noopener noreferrer' className='linksView'>Facebook</a></div>
            <div className=' centeredLinksView'><a href='https://www.instagram.com/tomicuross/' target='_blank' rel='noopener noreferrer' className='linksView'>Instagram</a></div>
            <div className=' centeredLinksView'><a href='https://www.linkedin.com/in/uro%C5%A1-tomi%C4%87-184969373/' target='_blank' rel='noopener noreferrer' className='linksView'>LinkedIn</a></div>
            <div className=' centeredLinksView'><a href='https://github.com/urke02' target='_blank' rel='noopener noreferrer' className='linksView'>Github</a></div>
            <div className=' centeredLinksView'><a href='https://codepen.io/Uros-Tomic' target='_blank' rel='noopener noreferrer' className='linksView'>Codepen</a></div>
        </div>

        <p className='centered-container par1'>My CV:</p>

        {/* ne znam kako da uspesno downloadujem cv */}
        <div className='centeredLinks'>
            <div className='centeredLinksView'><a href='public\uros_tomic_cv.pdf' download className='linksView'>Download CV</a></div>
        </div>
    </div>
  )
}

export default Links
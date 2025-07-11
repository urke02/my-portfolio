import React, { useState } from 'react';
import '../App.css';
import Uros from '../images/uros.png';

function AboutMe() {
  const [showMore, setShowMore] = useState(false);

  const toggleShow = () => setShowMore(prev => !prev);

  return (
    <div className='bodyAboutMe'>
      <div className='AboutMeLeftSide'>
        <p className='AboutMeP'>
            <span className='AboutMe1'>Hi, I am</span><br/><br/><br/>
            <span className='AboutMe2'>Uroš Tomić</span><br/><br/>
            <span className='AboutMe3'> Professional Engineer of Information Technologies and Systems</span><br/><br/>
        </p>

        <div className='ButtonContainerCenter'>
          <button onClick={toggleShow} style={{ marginLeft: '10px', cursor: 'pointer' }} className='AboutMeButton'>
            {showMore ? 'Show less' : 'Show more'}
          </button>
        </div>

        {showMore && (
          <p className='AboutMeP'>
            My name is Uroš Tomić, and I am a professional engineer of information technologies and systems. I graduated from the College of Applied Technical Studies in Subotica, where I gained a solid foundation in the field of information technology. Currently, I work as a junior programmer, and my great passion is front-end development.
            I am dedicated to continuous learning and improvement because I believe that constant progress is the key to success in the IT industry. Every day, I strive to expand my knowledge and skills to become better at what I do. Front-end development gives me the opportunity to creatively express myself through design and code, while building functional and attractive web applications that make everyday life easier for users.
            I am motivated to continue my professional development and achieve significant results in the world of programming.
          </p>
        )}
      </div>

      <div className='right-side'>
        <img src={Uros} alt="Uroš Tomić" className='imagePng'/>
      </div>
    </div>
  );
}

export default AboutMe;

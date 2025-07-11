import React from 'react'
import '../App.css';

const backgroundSkills = {
  backgroundColor: '#aba8a8',
  width: '100%',
  height: '92.8vh'
}

function Skills() {
  return (
      <div style={backgroundSkills}>
        <h1 className='naslovh1'>MY SKILLS:</h1>
        <div className='divRow'>
        <div className='divBlock'>
          <h3>Web Development</h3>
          <p>I have solid knowledge in web development, with a focus on creating functional and visually appealing websites. I understand the fundamentals of both front-end and back-end structures, allowing me to build complete web solutions that are both user-friendly and technically optimized.</p>
        </div>

        <div className='divBlock'>
          <h3>Front-end Coding</h3>
          <p>I write clean and well-structured HTML, CSS, and JavaScript code. I'm experienced in building responsive and interactive user interfaces using modern front-end technologies and frameworks, ensuring both functionality and aesthetics.</p>
        </div>

        <div className='divBlock'>
          <h3>Problem Solving</h3>
          <p>I can efficiently analyze challenges and find optimal technical solutions. Whether it's debugging code, resolving logical issues, or tackling design-related problems, I approach each task with a structured and creative mindset.</p>
        </div>
        </div>

        <div className='divRow'>
          <div className='divBlock'>
            <h3>Computer Literacy</h3>
            <p>I am highly proficient in using various digital tools, operating systems, and software. I adapt quickly to new technologies, which allows me to work efficiently and stay up to date in fast-changing environments.</p>
          </div>
            
          <div className='divBlock'>
            <h3>Strong Communication Skills</h3>
            <p>I communicate clearly and professionally with colleagues, clients, and teams. I’m a good listener, able to articulate ideas, and provide constructive feedback—contributing to smoother collaboration and faster problem-solving.</p>
          </div>

          <div className='divBlock'>
            <h3>Soft Skills</h3>
            <p>In addition to technical expertise, I possess strong personal qualities such as teamwork, adaptability, responsibility, and organization. I remain calm under pressure and manage deadlines and changing conditions effectively.</p>
          </div>
        </div>
      </div>
  )
}

export default Skills
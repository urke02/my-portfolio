import React from 'react'
import '../App.css';
import bgImage2 from '../images/building2.jpg';
import Location from '../images/location.png';
import Phone from '../images/phone.png';
import Email from '../images/mail.png';

const wrapperStyle = {
  display: 'flex'
};

const leftStyle ={
  flex: 1,
  backgroundImage: `url(${bgImage2})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '92.8vh',
}

const rightStyle = {
  flex: 1,
  backgroundColor: '#f2f2f2',
  padding: '20px',
}

function ContactMe() {
  return (
    <>
      <div style={wrapperStyle}>
        <div style={leftStyle} className='rowDirection'>
          <div className='iconDirection'>
            <img src={Phone} alt='Phone' className='icon'/><br/><br/>
            <img src={Email} alt='Email' className='icon'/><br/><br/>
            <img src={Location} alt='Location' className='icon'/><br/><br/>
          </div>

          <div className='paraDirection'>
            <p>Currently not available</p><br/><br/>
            <p>tomicuros006@gmail.com</p><br/><br/>
            <p>Bajmok, 24210</p><br/><br/>
          </div>
        </div>

        <div style={rightStyle} className='alignForm'>
          <form className='form'>
            <h2>Send me a message</h2><br/><br/>
            <label>TELL ME YOUR NAME *</label><br/>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input type='text' name='fname' placeholder='First name' required className='specInput'/>
              <input type='text' name='lname' placeholder='Last name' required className='specInput'/>
            </div>
            <br/><br/>
            <label for='email'>ENTER YOUR EMAIL *</label><br/>
            <input type='email'id='email' name='email' placeholder='Eg. example@gmail.com' required/><br/><br/>
            <label for='phone'>ENTER PHONE NUMBER</label><br/>
            <input type='tel' id='phone' name='phone' placeholder='Eg. +1 800 000000'/><br/><br/>
            <label for='text'>MESSAGE *</label><br/>
            <textarea id='text' name='text' placeholder='Write your message' required></textarea><br/><br/>
            <input type='submit' value='SUBMIT' className='submitBtn'/>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactMe
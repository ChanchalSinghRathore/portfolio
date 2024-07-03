import React, { useRef } from 'react'
import './contact.css';
import walmart from '../../assets/walmart.png'
import adobe from '../../assets/adobe.png'
import microsoft from '../../assets/microsoft.png'
import facebook from '../../assets/facebook.png'
import facebookicon from '../../assets/facebook-icon.png'
import twittericon from '../../assets/twitter.png'
import youtubeicon from '../../assets/youtube.png'
import instagramicon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_y7b5myk', 'template_ohq0ccc', form.current, {
            publicKey: 'ew112LSUxvH53UB8I',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset()
              alert("email sent");
            
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section id='contactpage'>
        <div id='clients'>
            <h1 className='contactpagetitle'>My clients</h1>
            <p className='clientdesc'>
                I have worked with a variety of clients, from small businesses to large corporations.
            </p>
            <div className="clientimgs">
                <img src={walmart} alt="" className="clientimg" />
                <img src={adobe} alt="" className="clientimg" />
                <img src={microsoft} alt="" className="clientimg" />
                <img src={facebook} alt="" className="clientimg" />
            </div>
        </div>
        <div id='contact'>
            <h1 className="contactpagetitle">Contact Me</h1>
            <span className="contactdesc">Please fill out the form below to discuss my work</span>
            <form className='contactform' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                <input type="text" className="email" placeholder='Your Email' name='your_email' />
                <textarea className='msg' rows="5" name="message" id="" placeholder='Your message' ></textarea>
                <button type='submit' value="Send" className="submitbtn">Submit</button>
                <div className="links">
                    <img src={facebookicon} alt="" className="link"  />
                    <img src={twittericon} alt="" className="link" />
                    <img src={instagramicon} alt="" className="link" />
                    <img src={youtubeicon} alt="" className="link" />
                </div>
            </form>
        </div>



    </section>
  )
}

export default Contact

import React from 'react'
import './about.css';
import UIdesign from '../../assets/ui-design.png';
import Webdesign from '../../assets/website-design.png';
import Appdesign from '../../assets/app-design.png';
const about = () => {
  return (
   <section id='about'>
        <span className='title'>About Me & Skills</span>
        <span className='skilldes'>I am a passionate Software Engineer and have experience in many projects and contributed on many plateforms having various skills including Html, CSS, JS, ReactJS, NodeJs, Bootstrap...</span>
        <div className="skillcontainer">
            <div className="skillbox">
                <img src={UIdesign} alt="ui design" className="skillimg" />
                <div className="skilltext">
                  <h2>UI/UX Designer</h2>
                  <p>UI/UX designer with expertise in crafting intuitive and visually compelling interfaces, skilled in wireframing, prototyping, and user testing to enhance user experience. Proficient in design tools like Figma, Sketch, and Adobe XD.</p>
                </div>
            </div>
            <div className="skillbox">
                <img src={Webdesign} alt="ui design" className="skillimg" />
                <div className="skilltext">
                  <h2>Front-End Developer</h2>
                  <p>Front-end developer with a focus on modern, responsive web design using HTML, CSS, JavaScript, and Bootstrap. Skilled in creating dynamic, user-friendly interfaces and ensuring cross-browser compatibility.</p>
                </div>
                
            </div>
            <div className="skillbox">
                <img src={Appdesign} alt="ui design" className="skillimg" />
                <div className="skilltext">
                  <h2>React Developer</h2>
                  <p>Front-end developer specializing in React, adept at building dynamic, responsive web applications. Experienced in state management, component-based architecture, and integrating APIs for seamless user experiences.</p>
                </div>
            </div>
        </div>
   
   </section>

  )
}

export default about

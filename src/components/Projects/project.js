import React from 'react'
import './project.css'
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Project = () => {
  return (
   <section id="project">
     <h2 className='worktitle'> My portfolio</h2>
     <span className='worksdesc'>
     Developed and launched several interactive web applications using React, enhancing user experience with dynamic components and efficient state management. Implemented responsive designs and optimized performance for diverse devices and browsers. </span>
     <div className="workimgs">
        <img src={Portfolio1} alt=""  className='workimg'/>
        <img src={Portfolio2} alt=""  className='workimg'/>
        <img src={Portfolio3} alt=""  className='workimg'/>
        <img src={Portfolio4} alt=""  className='workimg'/>
        <img src={Portfolio5} alt=""  className='workimg'/>
        <img src={Portfolio6} alt=""  className='workimg'/>
     
     </div>
     <button className="worksbtn">See More</button>
   </section>
  )
}

export default Project

import React from 'react'
import './home.css'
import bgimg from '../../assets/image.png';
import {Link} from 'react-scroll';
import btn from '../../assets/hireme.png'
const Home = () => {
  return (

    <section id='home'>
        <div className="homeContent">
                <span className='hello'>Hello</span>
                <span className='hometext'>I'm <span className="homename">Chanchal Singh Rathore</span><br/> Front-end Developer</span>
                <p className='homepara'>I am a passionate Software Engineer</p>
                <Link><button className='btn'><img className='btnimg' src={btn} alt="" />Hire Me</button></Link>
        </div>

        <img src={bgimg} alt="ProfilePhoto" className='bgimg'/>
    </section>

  )
}

export default Home

import React , { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import menu from '../../assets/menu.png'
const Navbar = () => {
  const[showMenu, setShowMenu] = useState(false);
  return (
    <div className="navbar">
      <img src={logo} alt='logo' className='logo' />
      <div className="desktopMenu">
        <Link activeClass='active' to='home' and spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='about' and spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='project' and spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass='active' to='clients' and spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Client</Link>
      </div>
      <button className='deskptopMenuBtn' onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>
        <img src={contactImg} className='desktopMenuImg' alt="" />Contact Me</button>

      <img src={menu} alt='logo' className='mobmenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display : showMenu? 'flex': 'none'}}>
        <Link activeClass='active' to='home' and spy={true} smooth={true} offset={-100} duration={500} className="ListItem"   onClick={()=>setShowMenu(false)}   >Home</Link>
        <Link activeClass='active' to='about' and spy={true} smooth={true} offset={-50} duration={500} className="ListItem"   onClick={()=>setShowMenu(false)}   >About</Link>
        <Link activeClass='active' to='project' and spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}   >Portfolio</Link>
        <Link activeClass='active' to='clients' and spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}   >Client</Link>
        <Link activeClass='active' to='contact' and spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}   >Contact</Link>
      </div>

    </div>
  )
}

export default Navbar

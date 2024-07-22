/* eslint-disable react/jsx-no-undef */

import './Navbar.css';
import logo from '../../assets/logo.svg';
import { useState } from 'react';
import underline from '../../assets/nav_underline.svg';
// Import AnchorLink if it's not globally available
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState('home');

  return (
    <div className='navbar'>
      <img src={logo} alt='Logo' />
      <ul className='nav-menu'>
        <li>
          <AnchorLink className='anchor-link'  href='#home'>
            <p onClick={() => setMenu('home')}>Home</p>
          </AnchorLink>
          {menu === 'home' && <img src={underline} alt='Underline' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setMenu('about')}>About me</p>
          </AnchorLink>
          {menu === 'about' && <img src={underline} alt='Underline' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => setMenu('services')}>Services</p>
          </AnchorLink>
          {menu === 'services' && <img src={underline} alt='Underline' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => setMenu('work')}>Portfolio</p>
          </AnchorLink>
          {menu === 'work' && <img src={underline} alt='Underline' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setMenu('contact')}>Contact</p>
          </AnchorLink>
          {menu === 'contact' && <img src={underline} alt='Underline' />}
        </li>
      </ul>
      <div className='nav-connect'> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        
      </div>
    </div>
  );
}

export default Navbar;

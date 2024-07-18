
import './Navbar.css'
import logo from '../../assets/logo.svg'
import { useState } from 'react'



const Navbar = () => {
  const [menu,setMenu]  = useState("home")



  return (
    <div className= 'navbar'>
      <img src={logo}/>
      <ul className='nav-menu'>
      <li><p>Home</p></li>
      <li><p>About me</p></li>
      <li><p>Services</p></li>
      <li><p>Portofolio</p></li>
      <li><p>Contact</p></li>
      
     

      </ul>
      <div className='nav-connect'>
      Connect with me

      </div>

      
    </div>
  )
}

export default Navbar

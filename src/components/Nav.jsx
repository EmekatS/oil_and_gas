import React, { useState } from 'react'
import { LogoImg } from '../assets/images'
import { dropdownLinks, navLinks } from '../constants/Constant'
import Button from './Button'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
    <header className='flex justify-between items-center md:px-20 md:py-4 px-10 py-5'>
        <div className='max-w-30'><img src={LogoImg} alt="" /></div>
        <nav className='flex items-center gap-x-10 font-medium max-md:hidden'>
            <Link className='transition-all duration-300 hover:text-black' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Solutions</Link>
            {navLinks.map((link, index) => (
                <Link to={link.id} key={index} className='transition-all duration-300 hover:text-black'>{link.title}</Link>
            ))}
            <Button>Login</Button>
        </nav>
        <div className='md:hidden transition-all duration-300'>
            {isOpen ? <X onClick={() => setIsOpen(!isOpen)} /> : <Menu onClick={() => setIsOpen(!isOpen)} />}
        </div>
    </header>
   <div className={`${isOpen ? "h-fit py-8 px-10" : "h-0 py-0 px-0"} absolute md:hidden flex flex-col space-y-4 transition-all duration-300 text-white font-secondary w-full overflow-hidden bg-gray-200`}>
      {navLinks.map((link, index) => (
        <Link to={link.id} key={index} className={`${isOpen ? "block": "hidden"} text-black`}>{link.title}</Link>
      ))}
      <Button>Login</Button>
    </div>
    <div className={`${isDropdownOpen ? "h-fit py-8 px-10" : "h-0"} bg-gray-200 w-full absolute overflow-hidden flex justify-around transition-all duration-300`}>
        {dropdownLinks.map((link, index) => (
            <Link to={link.id} key={index} className="transition-all duration-300 hover:text-black">{link.title}</Link>
        ))}
    </div>
    </>
  )
}

export default Nav
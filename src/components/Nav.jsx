import React, { useState } from 'react'
import { LogoImg } from '../assets/images'
import { navLinks } from '../constants/Constant'
import Button from './Button'
import { Menu, X } from 'lucide-react'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <header className='flex justify-between items-center md:px-20 md:py-4 px-10 py-5'>
        <div className='max-w-30'><img src={LogoImg} alt="" /></div>
        <nav className='flex items-center gap-x-10 font-medium max-md:hidden'>
            {navLinks.map((link, index) => (
                <a href={link.id} key={index} className=''>{link.title}</a>
            ))}
            <Button>Login</Button>
        </nav>
        <div className='md:hidden transition-all duration-300'>
            {isOpen ? <X onClick={() => setIsOpen(!isOpen)} /> : <Menu onClick={() => setIsOpen(!isOpen)} />}
        </div>
    </header>
   <div className={`${isOpen ? "h-fit py-8 px-10" : "h-0 py-0 px-0"} absolute md:hidden flex flex-col space-y-4 transition-all duration-300 text-white font-secondary w-full overflow-hidden bg-gray-200`}>
      {navLinks.map((link, index) => (
        <a href={link.id} key={index} className={`${isOpen ? "block": "hidden"} text-black`}>{link.title}</a>
      ))}
      <Button>Login</Button>
    </div>
    </>
  )
}

export default Nav
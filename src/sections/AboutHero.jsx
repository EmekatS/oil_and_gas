import React from 'react'
import { heroContent } from '../constants/Constant'
import { HeroImg } from '../assets/images'

const AboutHero = () => {
  return (
    <>
    <section className='flex justify-between items-center max-md:flex-col max-md:items-start max-md:space-y-10'>
      <div className='w-1/2 space-y-5 max-md:w-full'>
        <h1 className='font-bold text-5xl primary-text max-sm:text-4xl'>{heroContent.title}</h1>
        <p className='text-black'>{heroContent.subtitle}</p>
        <p>{heroContent.para}</p>
      </div>
      <div >
        <img src={HeroImg} alt="" />
      </div>
    </section>
    </>
  )
}

export default AboutHero
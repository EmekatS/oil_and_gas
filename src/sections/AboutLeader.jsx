import React from 'react'
import { Boss } from '../assets/images'
import { leaderQuote } from '../constants/Constant'

const AboutLeader = () => {
  return (
    <>
    <section className='flex justify-center items-center'>
        <div className='flex justify-between border-1 border-dashed max-sm:flex-col max-sm:space-y-10'>
            <div className='w-1/3 flex justify-center items-center max-sm:w-full'>
                <div><img src={Boss} alt="Our Leader" /></div>
            </div>
            <div className='w-1/2 flex flex-col justify-center items-start space-y-5 px-10 max-sm:w-full max-sm:px-4 max-sm:py-4'>
                <div>
                    <h1 className='text-4xl font-bold primary-text'>{leaderQuote.title}</h1>
                    <p className='text-black'>{leaderQuote.subtitle}</p>
                </div>
                <p>{leaderQuote.para}</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutLeader
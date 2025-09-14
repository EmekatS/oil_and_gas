import React from 'react'
import { aboutContent } from '../constants/Constant'
import { About1, About2, About3 } from '../assets/images'

const AboutVision = () => {
  return (
    <>
    <section>
        <div className='space-y-10'>
            <div>
                <h1 className='text-4xl font-semibold primary-text'>{aboutContent.title}</h1>
                <span>{aboutContent.subtitle}</span>
            </div>
            <div className='space-y-5'>
                <p>{aboutContent.para}</p>
                <p>{aboutContent.para2}</p>
            </div>
            {/* <div className='flex justify-center gap-1 max-sm:hidden'>
                <img src={About1} className='max-w-60' />
                <img src={About3} className='max-w-60' />
                <img src={About2} className='max-w-60' />
                <img src={About3} className='max-w-60' />
                <img src={About1} className='max-w-60' />
            </div> */}
            <div className='flex justify-start gap-5 overflow-x-scroll w-full p-4'>
                <img src={About1} className='max-w-60 shrink-0' />
                <img src={About3} className='max-w-60 shrink-0' />
                <img src={About2} className='max-w-60 shrink-0' />
                <img src={About3} className='max-w-60 shrink-0' />
                <img src={About1} className='max-w-60 shrink-0' />
                <img src={About2} className='max-w-60 shrink-0' />
                <img src={About1} className='max-w-60 shrink-0' />
                <img src={About2} className='max-w-60 shrink-0' />
                <img src={About1} className='max-w-60 shrink-0' />
                <img src={About2} className='max-w-60 shrink-0' />
                <img src={About1} className='max-w-60 shrink-0' />
            </div>
        </div>
    </section>
    </>
  )
}

export default AboutVision
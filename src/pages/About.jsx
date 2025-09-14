import React from 'react'
import AboutHero from '../sections/AboutHero'
import AboutVision from '../sections/AboutVision'
import Accomplishments from '../sections/Accomplishments'
import AboutLeader from '../sections/AboutLeader'

const About = () => {
  return (
    <>
    <main className='space-y-20'>
        <AboutHero />
        <AboutVision />
        <Accomplishments />
        <AboutLeader />
    </main>
    </>
  )
}

export default About
import React from 'react'
import { accomplishments, accomplishmentsList } from '../constants/Constant'

const Accomplishments = () => {
  return (
    <>
    <section className='flex justify-center items-center flex-col space-y-10 text-center'>
        <div>
            <h1 className='text-4xl primary-text font-semibold max-sm:text-3xl'>{accomplishments.title}</h1>
            <p className='text-black'>{accomplishments.subtitle}</p>
        </div>
        <div className='flex justify-between gap-10 max-sm:flex-col'>
            {accomplishmentsList.map((item, index) => (
                <div key={index} className='flex flex-col justify-center items-center space-y-3 px-5 w-80'>
                    <img src={item.icon} className='w-15' />
                    <h1 className='text-lg'>{item.title}</h1>
                    <p>{item.para}</p>
                </div>
            ))}
        </div>
    </section>
    </>
  )
}

export default Accomplishments
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

function Hero() {
  return (
    <div className='h-screen pt-[30vh] pb-20'>
      <div>
        <Spotlight className=' -top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='red' />
        <Spotlight className='top-20 left-80 h-[80vh] w-[50vw]' fill='red' />
      </div>
      <div>
        <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.03] absolute flex items-center justify-center top-0 left-0">
        </div>
      </div>
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest text-red-100 text-xs text-center max-w-80'>
            Deepfake Detection
          </h2>
          <TextGenerateEffect
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words='The Only Website needed for Deepfake Detection.'
          />
          <a href='#about' >
            <MagicButton
              title='Detect Deepfake'
              icon={<FaLocationArrow />}
              position='right'
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
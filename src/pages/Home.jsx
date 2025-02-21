import React from 'react'
import { Link } from 'react-router-dom'

import homePageImage1 from '../assets/homePageImage1.jpg'
import homePageImage2 from '../assets/homePageImage2.jpg'
import homePageImage3 from '../assets/homePageImage3.jpg'
import homePageImage4 from '../assets/homePageImage4.jpg'

import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>

      <div className='fixed to-0 w-full z-10 text-white fill-white'>
        <Header />
      </div>

      <div className='snap-both snap-mandatory'>
        <Link to="/products" className='block relative snap-start'>
          <img src={ homePageImage1 } alt="Image of jackets" className='h-screen w-screen object-cover' />
          <span className='absolute bottom-15 md:bottom-20 left-5 md:left-10 text-white'>
            <p className='text-7xl md:text-6xl xl:text-9xl font-bold'>Feel the warmth</p>
            <span className='mt-5 flex items-end gap-5'><span className='text-2xl md:text-4xl font-medium'>Woolen Leather</span><svg className='w-6 md:w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='#ffffff' d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></span>
          </span>
        </Link>

        <Link to="/products" className='block relative snap-start'>
          <img src={ homePageImage2 } alt="Image of jackets" className='h-screen w-screen object-cover' />
          <span className='absolute bottom-15 md:bottom-20 left-5 md:left-10 text-white'>
            <p className='text-7xl md:text-6xl xl:text-9xl font-bold'>With the trend</p>
            <span className='mt-5 flex items-end gap-5'><span className='text-2xl md:text-4xl font-medium'>Jeans fashion</span><svg className='w-6 md:w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='#ffffff' d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></span>
          </span>
        </Link>

        <Link to="/products" className='block relative snap-start'>
          <img src={ homePageImage3 } alt="Image of jackets" className='h-screen w-screen object-cover' />
          <span className='absolute bottom-15 md:bottom-20 left-5 md:left-10 text-white'>
            <p className='text-7xl md:text-6xl xl:text-9xl font-bold'>Wanna be a sheep?</p>
            <span className='mt-5 flex items-end gap-5'><span className='text-2xl md:text-4xl font-medium'>Skin of Wool</span><svg className='w-6 md:w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='#ffffff' d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></span>
          </span>
        </Link>

        <Link to="/products" className='block relative snap-start'>
          <img src={ homePageImage4 } alt="Image of jackets" className='h-screen w-screen object-cover' />
          <span className='absolute bottom-15 md:bottom-20 left-5 md:left-10 text-white'>
            <p className='text-7xl md:text-6xl xl:text-9xl font-bold'>Shine like a star</p>
            <span className='mt-5 flex items-end gap-5'><span className='text-2xl md:text-4xl font-medium'>The Parachute</span><svg className='w-6 md:w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill='#ffffff' d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></span>
          </span>
        </Link>
      </div>

      <Footer />

    </div>
  )
}

export default Home

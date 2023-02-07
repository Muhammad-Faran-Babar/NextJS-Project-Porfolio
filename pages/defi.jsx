import Image from 'next/image'
import React from 'react'

import Defi from '../public/assets/projects/c1.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const defi = () => {
  return (
     <div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
      <Image
        className='absolute z-1'
        layout='fill'
        objectFit='cover'
        src={Defi}
        alt='/'
      />
      <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
        <h2 className='py-2'>E-Coin Community</h2>
        <h3>React JS / CSS3 / Framer Motion / CoinGecko API</h3>
      </div>
    </div>

    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
      <div className='col-span-4'>
        <p>Project</p>
        <h2>Overview</h2>
        <p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' /> I developed this mobile Responsive  web application in react JS.<br/>
          </p>

          <p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' />	I Implemented Smooth Scrolling in this project for smoothness.<br/>
          </p>

          <p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' />	I integrated axios in this project to get coinGecko API data and displayed accordingly.<br/>
          </p>

          < p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' />Components of this projects are styled with CSS3 and animation is done by integrating framer motion.<br/>
          </p>

          <p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' />React hooks are used to manage the states of this project.<br/>
          </p>

          <p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' />	For security and privacy purposes Authentication is provided by Firebase.<br/>
          </p>

          <p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' />	Flat-list is used for displaying data in the form of reports.<br/>

          </p>
       
        <a
          href='https://cheerful-creponne-7dd709.netlify.app/'
          target='_blank'
          rel='noreferrer'
        >
          <button className='px-8 cursor-pointer ease-in duration-100 hover:scale-105  py-2 mt-4 mr-8'>Demo</button>
        </a>
        <a
          href='https://github.com/Muhammad-Faran-Babar/E-Coin-Community'
          target='_blank'
          rel='noreferrer'
        >
          <button className='px-8 cursor-pointer ease-in duration-100 hover:scale-105  py-2 mt-4'>Code</button>
        </a>
      </div>
      <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
        <div className='p-2'>
          <p className='text-center font-bold pb-2'>Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1'>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> React
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> CSS
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Javascript
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Hooks
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> CoinGecko API
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Framer Motion
            </p>
          </div>
        </div>
      </div>
      <Link href='/#projects'>
        <p className='underline cursor-pointer'>Back</p>
      </Link>
    </div>
  </div>  )
}

export default defi
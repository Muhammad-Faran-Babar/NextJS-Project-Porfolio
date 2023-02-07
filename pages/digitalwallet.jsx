import Image from 'next/image'
import React from 'react'


import DigitalWallet from '../public/assets/projects/DigitalWallet.png'

import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link'


const digitalwallet = () => {
  return (
<div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
      <Image
        className='absolute z-1'
        layout='fill'
        objectFit='cover'
        src={DigitalWallet}
        alt='/'
      />
      <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
        <h2 className='py-2'>Digital wallet</h2>
        <h3>React Native / Stylesheet / React Hooks</h3>
      </div>
    </div>

    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
      <div className='col-span-4'>
        <p>Project</p>
        <h2>Overview</h2>
        <p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' /> this application developed for mobile and is Responsive in react native.<br/>
          </p>

          <p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' />	I Implemented stack navigation in this project.<br/>
          </p>

          <p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' />	Icons are used in this project to make to more eye catching.<br/>
          </p>

          < p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' />Components of this projects are styled with style sheet.<br/>
          </p>

          <p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' />React hooks are used to manage the states of this project.<br/>
          </p>
          <p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' /> Rest API is used for getting the dial codes of countries in this project.<br/>
          </p>
        <a
          href='https://github.com/Muhammad-Faran-Babar/DigitalWallet-RN-App'
          target='_blank'
          rel='noreferrer'
        >
          <button className='px-8 cursor-pointer ease-in duration-100 hover:scale-105  py-2 mt-4 mr-8'>Code</button>
        </a>
        <a
          href='https://github.com/Muhammad-Faran-Babar/DigitalWallet-RN-App'
          target='_blank'
          rel='noreferrer'
        >
          <button className='px-8 cursor-pointer ease-in duration-100 hover:scale-105  py-2 mt-4 mr-8'>Demo</button>
        </a>
      </div>
      <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
        <div className='p-2'>
          <p className='text-center font-bold pb-2'>Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1'>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> React Native
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> StyleSheet
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Javascript
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> RestCountry API
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Hooks
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Navigation
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

export default digitalwallet
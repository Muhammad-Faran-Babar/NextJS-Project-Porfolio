import Image from 'next/image'
import React from 'react'

import Crypto from '../public/assets/projects/Crypto.png'

import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link'
const cryptorn = () => {
  return (
<div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
      <Image
        className='absolute z-1'
        layout='fill'
        objectFit='cover'
        src={Crypto}
        alt='/'
      />
      <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
        <h2 className='py-2'>Crypto Price Tracker</h2>
        <h3>React Native / StyleSheet / CoinGecko API</h3>
      </div>
    </div>

    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
      <div className='col-span-4'>
        <p>Project</p>
        <h2>Overview</h2>
        <p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' /> I developed this mobile Responsive application in react Native.<br/>
          </p>

          <p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' />	I integrated Async/Await in this project to get coinGecko API data and displayed accordingly.<br/>
          </p>

          < p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' />Components of this projects are styled with StyleSheet.<br/>
          </p>

          <p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' />React hooks are used to manage the states of this project.<br/>
          </p>

          <p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' />Animated Charts is used to show the data of specific coin on click event.<br/>
          </p>

      
        <a
          href='https://github.com/Muhammad-Faran-Babar/CryptoPriceTracker'
          target='_blank'
          rel='noreferrer'
        >
          <button className='px-8 cursor-pointer ease-in duration-100 hover:scale-105 px-8 py-2 mt-4 mr-8'>Code</button>
        </a>
        <a
          href='https://github.com/Muhammad-Faran-Babar/CryptoPriceTracker'
          target='_blank'
          rel='noreferrer'
        >
          <button className='px-8 py-2 mt-4 px-8 cursor-pointer ease-in duration-100 hover:scale-105'>Demo</button>
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
              <RiRadioButtonFill className='pr-1' /> CoinGecko API
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Hooks
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />Charts
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

export default cryptorn
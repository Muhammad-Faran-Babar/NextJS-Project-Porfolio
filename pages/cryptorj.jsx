import Image from 'next/image'
import React from 'react'
import crypto from '../public/assets/projects/rjcypto.png'

import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link'
const cryptorj = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
      <Image
        className='absolute z-1'
        layout='fill'
        objectFit='cover'
        src={crypto}
        alt='/'
      />
      <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
        <h2 className='py-2'>Crypto Price Tracker</h2>
        <h3>React JS / CSS / CoinGecko API / React Router</h3>
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
          <RiRadioButtonFill className='pr-1' />	I integrated axios in this project to get coinGecko API data and displayed accordingly.<br/>
          </p>

          < p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' />Components of this projects are styled with CSS.<br/>
          </p>

          <p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' />React hooks are used to manage the states of this project.<br/>
          </p>

          <p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' />React Router is used to show the data of specific coin on click event.<br/>
          </p>

        <a
          href='https://github.com/Muhammad-Faran-Babar/CryptoCoin-PriceTracker-ReactJS'
          target='_blank'
          rel='noreferrer'
        >
          <button className='px-8 cursor-pointer ease-in duration-100 hover:scale-105  py-2 mt-4 mr-8'>Code</button>
        </a>
        <a
          href='https://cryptocoin-price-tracker.netlify.app/'
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
              <RiRadioButtonFill className='pr-1' /> React
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> CSS
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' /> Javascript
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />CoinGecko API
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />Router
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1' />Hooks
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

export default cryptorj
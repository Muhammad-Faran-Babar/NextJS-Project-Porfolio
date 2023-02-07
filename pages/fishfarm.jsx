import Image from 'next/image'
import React from 'react'
import crypto from '../public/assets/projects/rjcypto.png'
import fish from '../public/assets/projects/FishFarm.png'

import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link'


const fishfarm = () => {
    return (
        <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={fish}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Fish Farm Management System</h2>
          <h3>React Native / StyleSheet / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' /> I developed this React Native mobile application in agile methodology.<br/>
          </p>

          <p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' />	I Implemented Stack-Navigation in this project for smooth paths.<br/>
          </p>

          <p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' />	I created a Custom Bottom tab Navigation for this application.<br/>
          </p>

          < p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' />	for managing the states of this application I implemented React-Hook this project.<br/>
          </p>

          <p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' />	for backend, Firebase is implemented for Data Storage.<br/>
          </p>

          <p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' />	For security and privacy purposes Authentication is provided by Firebase.<br/>
          </p>

          <p className='capitalize flex items-center'>
          <RiRadioButtonFill className='pr-1' />	Flat-list is used for displaying data in the form of reports.<br/>

          </p>
          <a
            href='https://github.com/Muhammad-Faran-Babar/Fish-Farm-Management-System'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 cursor-pointer ease-in duration-100 hover:scale-105 shadow-xl'>Code</button>
          </a>
          <a
            href='https://github.com/Muhammad-Faran-Babar/Fish-Farm-Management-System'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 cursor-pointer ease-in duration-100 hover:scale-105'>Demo</button>
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
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firestore
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Hooks
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
    )
}

export default fishfarm
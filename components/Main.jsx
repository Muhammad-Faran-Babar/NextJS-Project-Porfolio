import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
const Main = () => {
  return (
    <div id='main' className='w-full h-screen text-center'>
      <div className='mx-width[1240px] items-center justify-center w-full h-full mx-auto p-2 flex '>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-500'>let&#39; Design and Construct something Uniquely great</p>
          <h1 className='py-4 text-gray-700'>
            {/* <div className='container'>
                  <section className='animation'>
                    <div className='first'><div>Faran Babar</div></div>
                    <div className='second'><div>Web Developer</div></div>
                    <div className='third'><div>React Native Developer</div></div>

                  </section>
                  </div> */}
            Hi, I&#39;m <span className='text-[#8b542a]'> Faran Babar</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Front-End Application Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto capitalize'>
            I&#39;m Frontend designer Accomplished in building( and every so often planning) exceptional digital experiences. At present,
            I’m centered on building responsive mobile and web applications
            incorporating back-end advancements.
          </p>

          {/* icons */}
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/muhammad-faran-babar-09a614199/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/Muhammad-Faran-Babar/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>

            <a
              href='mailto:faribabar1998@gmail.com'
              target='_blank'
              rel='noreferrer'
            >

              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </a>
            <a
              href='mailto:faribabar1998@gmail.com'
              target='_blank'
              rel='noreferrer'
            >              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Main
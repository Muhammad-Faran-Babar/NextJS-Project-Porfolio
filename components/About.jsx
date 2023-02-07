import React from 'react'
import Image from 'next/image'
import fari from '../public/assets/about.jpg'
import about from '../public/assets/fari.png'
const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#8b542a]'>
                        About
                    </p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600 text-justify'> I am a Software Engineer having experience in developing Responsive Applications both Mobile and Web based. Adapted in
                        all stages of a development phase. My passion as a developer started even before my graduation and took a a turn when I developed
                        Mobile Application and What I thought of it as project turned into a passion for development.Fascinated how intricate programming can be I was Quickly drawn to learn more.  </p>
                    <p className='py-2 text-gray-600 text-justify'> 
                        I have some expertise in building versatile responsive front-end UI applications
                        that associate with Programming interface&#39;s and other backend advances.
                        I&#39;m energetic about learning new innovations and comprehend there is more than one method for achieving an undertaking.
                        However I&#39;m most capable in building front-end applications utilizing HTML, CSS,
                         JavaScript, React, NextJS, Headless CMS and Database.
                        I&#39;m a quick learner and can get new tech stacks depending on the situation.
                         I accept that being an extraordinary engineer isn&#39;t utilizing one explicit language, yet picking the most ideal device to get everything done.

                    </p>
                    <p className='py-2 text-gray-600 underline cursor-pointer'> Check Out Some Of My Latest Projects</p>
                </div>
                <div className='w-full h-auto m-auto shadow-gray-600 shadow-xl rounded-full flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
<Image src={about} className='rounded-xl' alt='' />
                </div>
            </div>
        </div>
    )
}

export default About
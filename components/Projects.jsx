import React from "react";
import Link from 'next/link';
import Image from "next/image";
import fishfarm from '../public/assets/projects/FishFarm.png'
import crypto from '../public/assets/projects/rjcypto.png'
import defi from '../public/assets/projects/c1.png'
import GoSee from '../public/assets/projects/GooSee.png'
import rjmovie from '../public/assets/projects/rjmovie.png'
import DigitalWallet from '../public/assets/projects/DigitalWallet.png'
import Crypto from '../public/assets/projects/Crypto.png'
import ShazamWeather from '../public/assets/projects/ShazamWeather.png'
import shazamjs from '../public/assets/projects/shazamjs.png'
import myPortfolio from '../public/assets/projects/rjportfolio.png'
// import fishfarm from '../public/assets/projects/FishFarm.png'

import ProjectItem from "./ProjectItem";

const Projects = () => {
    return (
        <div id="projects" className="w-full ">
            <div className="mx-auto max-w-[1240px] px-2 py-16">
                <p className="uppercase tracking-widest text-[#8b542a] text-xl font-semibold"> projects</p>
                <h2 className='py-4'>What I&apos;ve Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem
                        title='Fish Farm Management System'
                        technology='React Native & FireBase'
                        backgroundImg={fishfarm}
                        projectUrl='/fishfarm'
                    />
                    <ProjectItem
                        title='Crypto Price Tracker'
                        technology='React JS & CoinGecko API  '
                        backgroundImg={crypto}
                        projectUrl='/cryptorj'
                    />


                    <ProjectItem
                        title='Defi Community'
                        technology='React JS & CoinGeckoApi '
                        backgroundImg={defi}
                        projectUrl='/defi'
                    />

                    <ProjectItem
                        title='Shazam Weather'
                        technology='React JS & Weather API '
                        backgroundImg={shazamjs}
                        projectUrl='/shazamrj'
                    />

                    <ProjectItem
                        title='DigitalWallet'
                        technology='React Native'
                        backgroundImg={DigitalWallet}
                        projectUrl='/digitalwallet'
                    />

                    <ProjectItem
                        title='Crpto Price Tracker'
                        technology='React Native & CoinGeckoApi'
                        backgroundImg={Crypto}
                        projectUrl='/cryptorn'
                    />

                    <ProjectItem
                        title='Shazam Weather'
                        technology='React Native & Weather API  '
                        backgroundImg={ShazamWeather}
                        projectUrl='/shazamrn'
                    />

                    <ProjectItem
                        title='Portfolio App'
                        technology='React JS & Framer Motion  '
                        backgroundImg={myPortfolio}
                        projectUrl='/portfolio'
                    />

                    <ProjectItem
                        title='GoSee'
                        technology='React Native'
                        backgroundImg={GoSee}
                        projectUrl='/gosee'
                    />
                    <ProjectItem
                        title='React JS'
                        technology='React JS & Movie API  '
                        backgroundImg={rjmovie}
                        projectUrl='/movie'
                    />
                </div>
            </div>

        </div>
    )
};
export default Projects;
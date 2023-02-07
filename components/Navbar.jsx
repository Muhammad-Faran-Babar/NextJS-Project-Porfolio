import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub, } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import logo from '../public/assets/faranlogo.png';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937')
    const router = useRouter()
    useEffect(() => {
        if (
            router.asPath === '/fishfarm' ||
            router.asPath === '/gosee' ||
            router.asPath === '/shazamrj' ||
            router.asPath === '/shazamrn' ||
            router.asPath === '/defi' ||
            router.asPath === '/movie' ||
            router.asPath === '/cryptorj' ||
            router.asPath === '/cryptorn' ||
            router.asPath === '/digitalwallet' ||
            router.asPath === '/portfolio'
        ) {
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
        } else {
            setNavBg('#ecf0f3')
            setLinkColor('#1f2937')
        }


    }, [router])



    const handleNev = () => {
        setNav(!nav);
    }
    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            }
            else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);

    }, [])



    return (
        <div
            style={{ backgroundColor: `${navBg}` }}
            className={shadow
                ? 'fixed w-full h-20 shadow-xl z-[100] '
                : 'fixed w-full h-20 z-[100]'
            }>
            <div className='flex items-center justify-between w-full h-full px-2 2xl:px-16'>
                <Link href='/' >

                    <Image src={logo} alt='/' height='35' width='60' />

                </Link>
                <div>
                    <ul
                        style={{ color: `${linkColor}` }}
                        className='hidden md:flex'>
                        <Link href='/#main'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>
                                home
                            </li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>
                                about
                            </li>
                        </Link>
                        <Link href='/#skills'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>
                                skills
                            </li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>
                                projects
                            </li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>
                                contact
                            </li>
                        </Link>

                    </ul>
                    <div
                        style={{ color: `${linkColor}` }}
                        onClick={handleNev} className=' md:hidden'>
                        <AiOutlineMenu size={26} />
                    </div>
                </div>

            </div>

            {/* side bar */}

            <div className={nav ? ' md:hidden fixed w-full h-screen left-0 top-0 bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[30%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                    : 'fixed left-[-300%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full justify-between items-center'>
                            <Link href='/'>
                                <Image src={logo} alt='/' height='80' width='80' />

                            </Link>
                            <div onClick={handleNev} className='rounded-full  shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-black/10  my-4'>
                            <p className='py-4 w-[85%] md:[90%] font-sans font-semibold text-justify text-gray-900'>Get In Touch! To Illuminate Thoughts And Carry Them To Real World</p>
                        </div>

                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/#main'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    home
                                </li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    about
                                </li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    skills
                                </li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    projects
                                </li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    contact
                                </li>
                            </Link>

                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-black/90'>Let&#39;s Associate</p>

                        </div>
                        <div className=' mt-4 flex justify-between items-center'>
                            <a
                                href='https://www.linkedin.com/in/muhammad-faran-babar-09a614199/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <div className='rounded-full  shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300 hover:scale-105'>
                                    <FaLinkedinIn />
                                </div>
                            </a>
                            <a
                                href='https://github.com/Muhammad-Faran-Babar/'
                                target='_blank'
                                rel='noreferrer'
                            >

                            <div className='rounded-full  shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300 hover:scale-105'>
                                <FaGithub />
                            </div>
                            </a>
                            <a
                                href='mailto:faribabar1998@gmail.com'
                                target='_blank'
                                rel='noreferrer'
                            >


                            <div className='rounded-full  shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300 hover:scale-105'>
                                <AiOutlineMail />
                            </div>
                            </a>
                            <a
                                href='mailto:faribabar1998@gmail.com'
                                target='_blank'
                                rel='noreferrer'
                            >

                            <div className='rounded-full  shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300 hover:scale-105'>
                                <BsFillPersonLinesFill />
                            </div>
                            </a>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Navbar
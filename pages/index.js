import About from '@/components/About'
import Contact from '@/components/Contact'
import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Faran | Application Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>     
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  )
}

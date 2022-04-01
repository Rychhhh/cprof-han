import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutMe from '../../components/Home/AboutMe'
import Footer from '../../components/Home/Footer'
import Hero from '../../components/Home/Hero'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>Home | Union</title>
      </Head>
      <Hero />
      <AboutMe />
      <Footer />
    </div>
  )
}

export default Home

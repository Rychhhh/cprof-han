import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Footer() {
  const todaysDate = new Date()
  const currentYear = todaysDate.getFullYear()
  
  return (
    <div className='w-full h-[600px] mt-20 bg-[#1a1c1e] text-[#e9ebde] font-poppins sm:h-[655px] lg:py-20 selection:bg-yellow-500 selection:text-slate-900'>
        <div className="word w-[100%] sm:w-[50%] sm:flex sm:items-center lg:container lg:mx-auto lg:justify-center ">
            <h1 className="text-2xl text-center py-10 font-semibold sm:text-5xl md:text-2xl">You Trust Is My Priority </h1>
            <div className="second-word sm:ml-20">
              <h3 className="text-sm py-1 text-center sm:text-xl md:text-sm lg:pb-10 duration-1000 hover:underline-offset-8 hover:underline">Build By <span className='text-yellow-300'>Rayhan</span> </h3>
              <h3 className='text-sm text-center sm:text-md'>With Next Js And Tailwind CSS</h3>
            </div>
        </div>
        <div className="font items-center text-center my-20">
          <Link href={''}>
            <a href="https://github.com/Ryhann" className='hover:text-red-600'>
              <FontAwesomeIcon icon={faGithub} style={{ width: '80px', height: "40px" }} />
              </a>
          </Link>
          <Link href={''}>
            <a href="https://www.instagram.com/clouds1____/" className='hover:text-red-600'>
            <FontAwesomeIcon icon={faInstagram} style={{ width: '80px', height: "40px" }} />
            </a>
          </Link>
          <Link href={''}>
            <a href="https://twitter.com/Rayhan26901596" className='hover:text-red-600'>
            <FontAwesomeIcon icon={faTwitter} style={{ width: '80px', height: "40px" }} />
            </a>
          </Link>
        </div>

        <div className="copri text-center space-y-3">
          <h3> Union AKA <span className='text-red-500'>Rayhan</span>  </h3>
          <h1 className='opacity-40'>
            © Union Inc. {currentYear}
          </h1>
          <div className="opacity-90">
            <h2>Legal</h2>
            <h2 >Privacy Police</h2>
            <h2 >Manage Cookie Preferences</h2>
          </div>
        </div>
    </div>
  )
}




import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
          <Image src="/Navlogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin" />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Dev Jerwyn
          </span>
        </a>
        <div className='w-auto h-full flex mx-10 flex-row item-center justify-between hidden md:flex'>
          <div className='flex items-center justify-between text-gray-200'>
            <a href="#about-me" className='inline-flex w-[120px] mx-2 text-transparent text-white 
              justify-center items-center gap-x-3 text-center
              from-blue-600 to-violet-600 shadow-lg shadow-transparent
              hover:shadow-blue-700/50 border border-transparent
              text-sm font-medium rounded-full focus:outline-none
              focus:ring-2 focus:ring-blue-600 focus:ring-offset-2
              focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800'>
                About me
            </a>
            <a href="#skills" className='inline-flex w-[120px] mx-2 text-transparent text-white 
              justify-center items-center gap-x-3 text-center
              from-blue-600 to-violet-600 shadow-lg shadow-transparent
              hover:shadow-blue-700/50 border border-transparent
              text-sm font-medium rounded-full focus:outline-none
              focus:ring-2 focus:ring-blue-600 focus:ring-offset-2
              focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800'>
               Skills
            </a>
            <a href="#projects" className='inline-flex w-[120px] mx-2 text-transparent text-white 
              justify-center items-center gap-x-3 text-center
              from-blue-600 to-violet-600 shadow-lg shadow-transparent
              hover:shadow-blue-700/50 border border-transparent
              text-sm font-medium rounded-full focus:outline-none
              focus:ring-2 focus:ring-blue-600 focus:ring-offset-2
              focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800'>
                Projects
            </a>
          </div>
        </div>
        <div className='w-auto h-full flex mx-10 flex-col item-center justify-between md:hidden'>
          <div className='flex items-center justify-between text-gray-200'>
            <a href="#about-me" className=''>
                About me
            </a>
            <a href="#skills" className=''>
               Skills
            </a>
            <a href="#projects" className=''>
                Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
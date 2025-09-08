import { assets } from '@/assets/assets' // make sure path matches your folder
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
        {/* Logo */}
        <Image
          src={assets.logo} 
          width={180} 
          alt="Site logo" 
          className='w-[130px] sm:w-auto' 
        />

        {/* Button */}
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>
          Get started
          <Image 
            src={assets.arrow} 
            alt="Arrow icon" 
            width={20} 
            height={20} 
          />
        </button>
      </div>

      {/* Section title */}
      <div className='text-center my-8'>
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        
      </div>
    </div>
  )
}

export default Header 

import React from 'react'
import Image  from 'next/image'

const Footer = () => {
  return (
    <footer className='footer border z-10 bordr-top-[#33353F] border-l-transparent border-r-transparent text-white'>
        <div className='container p-12 flex justify-between'>
        <span>
          {/* LOGO */}
        <Image  
        src="/images/logo-png.png"
        alt="logo"
        // className='rounded-full'
        width={60}
        height={60}
        />
        </span>
    <p className='text-slate-600'>All rights reserved.</p>
    </div>
    </footer>
  )
}

export default Footer
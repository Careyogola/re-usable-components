import React from 'react'
import { IoPersonCircleOutline } from "react-icons/io5"


const Navbar = () => {
  return (
    <nav className='bg-blue-800 w-full h-16 flex flex-row items-center justify-between px-4'>
        <a href='https://uefa.com' className='text-white text-3xl font-bold'>UEFA.com</a>
        <a href='#' className='text-white hover:text-blue-400'>About</a>
        <a href='#' className='text-white hover:text-blue-400'>National associations</a>
        <a href='#' className='text-white hover:text-blue-400'>Running competitions</a>
        <a href='#' className='text-white hover:text-blue-400'>Development</a>
        <a href='#' className='text-white hover:text-blue-400'>Sustainability</a>
        <a href='#' className='text-white hover:text-blue-400'>News & Media</a>
        <button className='w-24 items-center flex flex-row gap-2 bg-inherit text-white border border-white rounded-full py-2 px-2'>
          Log in
          <IoPersonCircleOutline size={20}/>
          </button>
    </nav>
  )
}

export default Navbar
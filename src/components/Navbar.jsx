import React from 'react'
import { IoPersonCircleOutline } from "react-icons/io5"


const Navbar = () => {
  return (
    <nav className='bg-blue-800 w-full h-16 flex flex-row items-center justify-between px-4'>
        <a><h3 className='text-white text-3xl font-bold'>UEFA.com</h3></a>
        <a><h3 className='text-white hover:text-blue-400'>About</h3></a>
        <a><h3 className='text-white hover:text-blue-400'>National associations</h3></a>
        <a><h3 className='text-white hover:text-blue-400'>Running competitions</h3></a>
        <a><h3 className='text-white hover:text-blue-400'>Development</h3></a>
        <a><h3 className='text-white hover:text-blue-400'>Sustainability</h3></a>
        <a><h3 className='text-white hover:text-blue-400'>News & Media</h3></a>
        <button className='w-24 items-center flex flex-row gap-2 bg-inherit text-white border border-white rounded-full py-2 px-2'>
          Log in
          <IoPersonCircleOutline size={20}/>
          </button>
    </nav>
  )
}

export default Navbar
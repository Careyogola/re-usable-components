import React from 'react'
import { IoCaretDownCircleOutline } from "react-icons/io5"
import { PiFacebookLogoFill } from "react-icons/pi"
import { BiLogoInstagramAlt } from "react-icons/bi"
import { RiTwitterXLine } from "react-icons/ri"
import { FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='w-full flex flex-col absolute bottom-0'>
      <div className='bg-blue-950 flex flex-row justify-between text-gray-300 p-8'>
        <div className='grid grid-cols-3'>
          <div className='bg-inherit flex flex-col gap-2'>
            <h3 className='text-2xl font-medium'>UEFA.COM</h3>
            <a className='hover:text-blue-400' href='#'>About</a>
            <a className='hover:text-blue-400' href='#'>National associations</a>
            <a className='hover:text-blue-400' href='#'>Running competitions</a>
            <a className='hover:text-blue-400' href='#'>Development</a>
            <a className='hover:text-blue-400' href='#'>Sustainability</a>
            <a className='hover:text-blue-400' href='#'>News & Media</a>
            
          </div>
        <div className='bg-inherit flex flex-col gap-2'>
            <h3 className='text-2xl font-medium '>EXPLORE </h3>
            <a className='hover:text-blue-400' href='#'>UEFA.tv</a>
            <a className='hover:text-blue-400' href='#'>Match Calendar</a>
            <a className='hover:text-blue-400' href='#'>Rankings</a>
            <a className='hover:text-blue-400' href='#'>Tickets/Hospitality</a>
            <a className='hover:text-blue-400' href='#'>UEFA club competitions store</a>
            <a className='hover:text-blue-400' href='#'>UEFA National football competitions store</a>
        </div>
        <div className='bg-inherit flex flex-col gap-2'>
            <h3 className='text-2xl font-medium'>MORE</h3>
            <a className='hover:text-blue-400' href='#'>MyUEFA</a>
            <a className='hover:text-blue-400' href='#'>UC3</a>
        </div>
      </div>
      <div className='bg-inherit flex flex-col'>
        <h3 className='uppercase'>Change Language</h3>
        <button className='py-4 w-52 rounded-full flex flex-row text-white items-center gap-3'>
          English
          <IoCaretDownCircleOutline />
        </button>
       <div className='flex flex-col'>
       <h2>FOLLOW US ON</h2>
       <div className='flex flex-row'>
       <a className='hover:text-blue-400' href='#'><PiFacebookLogoFill size={30}/></a>
       <a className='hover:text-blue-400' href='#'><BiLogoInstagramAlt size={30}/></a>
       <a className='hover:text-blue-400' href='#'><RiTwitterXLine size={30}/></a>
       <a className='hover:text-blue-400' href='#'><FaYoutube size={30}/></a>
       </div>
       </div>
      </div>
      </div>
      {/* the bottom-footer-section nested inside the main-footer */}
      <div className='bg-blue-900 flex flex-row items-center justify-center gap-5 py-12 text-gray-200'>
        <a className='hover:text-blue-400' href='#'><h3>Terms and conditions</h3></a>
        <a className='hover:text-blue-400' href='#'><h3>Privacy Policies</h3></a>
        <a className='hover:text-blue-400' href='#'><h3>Cookie Policy</h3></a>
      </div>
    </footer>
  )
}

export default Footer
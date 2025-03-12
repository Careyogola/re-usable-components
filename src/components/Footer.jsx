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
            <a><h3 className='text-2xl font-medium'>UEFA.COM</h3></a>
            <a><h3>About</h3></a>
            <a><h3>National associations</h3></a>
            <a><h3>Running competitions</h3></a>
            <a><h3>Development</h3></a>
            <a><h3>Sustainability</h3></a>
            <a><h3>News & Media</h3></a>
            <a><h3></h3></a>
          </div>
        <div className='bg-inherit flex flex-col gap-2'>
            <a><h3 className='text-2xl font-medium'>EXPLORE</h3></a>
            <a><h3>UEFA.tv</h3></a>
            <a><h3>Match Calendar</h3></a>
            <a><h3>Rankings</h3></a>
            <a><h3>Tickets/Hospitality</h3></a>
            <a><h3>UEFA club competitions store</h3></a>
            <a><h3>UEFA National football competitions store</h3></a>
        </div>
        <div className='bg-inherit flex flex-col gap-2'>
            <a><h3 className='text-2xl font-medium'>MORE</h3></a>
            <a><h3>MyUEFA</h3></a>
            <a><h3>UC3</h3></a>
        </div>
      </div>
      <div className='bg-inherit flex flex-col'>
        <a><h3 className='uppercase'>Change Language</h3></a>
        <button className='py-4 w-52 rounded-full flex flex-row text-white items-center gap-3'>
          English
          <IoCaretDownCircleOutline />
        </button>
       <div className='flex flex-col'>
       <h2>FOLLOW US ON</h2>
       <div className='flex flex-row'>
       <PiFacebookLogoFill size={30}/>
       <BiLogoInstagramAlt size={30}/>
       <RiTwitterXLine size={30}/>
       <FaYoutube size={30}/>
       </div>
       </div>
      </div>
      </div>
      {/* the bottom-footer-section nested inside the main-footer */}
      <div className='bg-blue-900 flex flex-row items-center justify-center gap-5 py-12 text-gray-200'>
        <a><h3>Terms and conditions</h3></a>
        <a><h3>Privacy Policies</h3></a>
        <a><h3>Cookie Policy</h3></a>
      </div>
    </footer>
  )
}

export default Footer
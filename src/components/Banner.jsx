import React from 'react'
import { IoFootball, IoArrowDownCircleSharp } from "react-icons/io5"

const Banner = () => {
  return (
    <div className='w-full bg-blue-950 h-16 flex flex-row items-center justify-between px-4'>
        <div className='flex flex-row items-center gap-4'>
            <IoFootball  size={28} color='white'/>
            <h4 className='text-white'>Uefa-competitions</h4>
            <div className='w-0.5 h-4 bg-white'></div>
            <h4 className='text-white'>Mens-football </h4>
        </div>
        <div className='flex flex-row items-center'>
        <h4 className='text-white'>All competitions</h4>
        
        <IoArrowDownCircleSharp  color='white' onClick={showDropdown}/>
        </div>
    </div>
  )
}

export default Banner
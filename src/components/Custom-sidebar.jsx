import React from 'react'
import { useState } from 'react';
import { FaCalendarAlt } from "react-icons/fa";


const SideBaar = () => {

// using react hooks
    const [selectedCompliance, setSelectedCompliance] = useState(null);
// creating an array of objects
    const Compliances = [
        {
            id: 1,
            title: "Business Loan",
            icon: <FaCalendarAlt />,
            status: "Pending"
        },
        {
            id: 2,
            title: "Business Loan1",
            status: "Pending"
        },
        {
            id: 3,
            title: "Business Loan2",
            status: "Approved"
        }
    ];
  return (
    <div className='w-64 bg-gray-100 min-h-screen border-r p-4'>
        <h2 className='text-xl font-bold mb-4'>Compliance</h2>
        <input type="search" placeholder="Search compliance" 
        className='w-full p-2 border rounded mb-2 '/>
        <div>
            {Compliances.map((compliance) =>(
                    <div
                    key={compliance.id}
                    className='p-4 cursor-pointer mb-2 shadow hover:bg-gray-400 rounded bg-white'
                    onClick={()=>setSelectedCompliance(compliance)}>
                        <h3 className='font-medium'>{compliance.title}</h3>
                        <span>{compliance.icon}</span>
                        <p className=''>{compliance.status}</p>
                        
                    </div>
                )
            )}
        </div>
    </div>
  )
}

export default SideBaar
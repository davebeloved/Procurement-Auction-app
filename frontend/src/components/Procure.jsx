import React from 'react'
import { Link } from 'react-router-dom'

const Procure = ({ procureTitle, deployBtn, gailBtn }) => {
  return (
    <div className='flex justify-center py-4'>
      <div className='space-y-10'>
        <h2 className='font-bold text-3xl text-center'>{procureTitle}</h2>
        <div className='flex flex-col space-y-4 items-center'>
            <Link to='/deploy'>
                <button className='bg-blue-600 w-[350px] py-3 text-white hover:opacity-80'>{deployBtn}</button>
            </Link>
            <Link to='/gail-manager'>
                <button className='bg-blue-600 w-[350px] py-3 text-white hover:opacity-80'>{gailBtn}</button>
            </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Procure

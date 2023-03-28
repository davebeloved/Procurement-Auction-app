import React from 'react'
import { 
    FaFacebookF,
    FaTwitter,
    FaInstagramSquare,
    FaLinkedinIn,
    FaYoutube
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className=''>
      <div className='bg-[#00008B] w-full absolute bottom-0'>
        {/* <div className='text-center text-white py-4'>
            <h2 className='font-bold text-2xl'>Procurement</h2>
            <h3>Highly Secure, efficient and user friendly platform</h3>
        </div> */}
        <div className='text-center space-y-3 py-3'>
            <h2 className='font-bold text-white text-xl '>Follow Us</h2>
            <div className='flex items-center justify-center space-x-6'>

                <FaFacebookF size={20} className='text-white cursor-pointer hover:text-[#ADD8E6]'/>
                <FaInstagramSquare size={20} className='text-white cursor-pointer hover:text-[#ADD8E6]'/>
                <FaTwitter size={20} className='text-white cursor-pointer hover:text-[#ADD8E6]'/>
                <FaLinkedinIn size={20} className='text-white cursor-pointer hover:text-[#ADD8E6]'/>
                <FaYoutube size={20} className='text-white cursor-pointer hover:text-[#ADD8E6]'/>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Footer

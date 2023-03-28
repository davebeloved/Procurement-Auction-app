import { AiOutlineBars } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MobileNav = ({ toggleMenu }) => {
  return (
    <div>
        <div className='lg:hidden bg-white shadow-lg w-[300px] z-[1000] h-[85vh] absolute top-1 right-0 px-5 duration-300'>
          <FaTimes onClick={toggleMenu} size={20} className='text-blue-600 cursor-pointer absolute right-2 top-4'/>
            <div className='flex flex-col items-center justify-center h-[400px] lg:hidden space-y-7'>
                <li className='w-full list-none h-[50px] '>
                    <Link to='/' className='hover:bg-blue-100 w-full grid place-items-center h-full text-black'>HOME</Link>
                </li>
                <li className='w-full list-none h-[50px]'>
                    <Link to='procurement' className='hover:bg-blue-100 w-full grid place-items-center h-full text-black'>PROCUREMENT TENDER</Link>
                </li>
                <li className='w-full list-none h-[50px]'>
                    <Link to='auction' className='hover:bg-blue-100 w-full grid place-items-center h-full text-black'>AUCTION</Link>
                </li>
            </div>
        </div>
    </div>
  )
}

export default MobileNav
import { FaTimes } from 'react-icons/fa';

const ConfirmBids = ({ bidsConfirm }) => {
  return (
    <div className='relative'>
        <div className='bg-black/80 fixed top-0 left-0 right-0 bottom-0 w-full h-[100vh] z-30'></div>
            <div className='absolute  left-[200px] md:left-[300px] lg:left-[400px] bg-[#fff] w-[400px] lg:w-[500px] h-[330px] z-50 p-4 rounded-md space-y-5'>
            <div className='flex items-center justify-between'>
                <h2 className='text-gray-400 font-bold'>INPUTS</h2>
                <FaTimes onClick={bidsConfirm} size={20} className='text-gray-400 cursor-pointer'/>
            </div>
            <div className='space-y-6'>
                <p>7890</p>
                <p>0xjfhgjfkgjfhjgkfffflgfiffk</p>
                <p>abcd123@gmail.com</p>
                <p>20</p>
            </div>
            <div className='absolute bottom-6 right-5 space-x-5'>
                <button onClick={bidsConfirm} className='bg-gray-800 text-white px-5 py-2 hover:opacity-80'>Close</button>
                <button className='bg-blue-600 text-white px-5 py-2 hover:opacity-80'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmBids
import { FaTimes } from 'react-icons/fa'

const ModalBid = ({ toggleModal, bid }) => {
  return (
    <div className='relative'>
        <div className='bg-black/80 absolute top-0 left-0 right-0 bottom-0 w-full h-[100vh] z-30'></div>
        <div className='absolute  left-[40px] md:left-[250px] lg:left-[400px] bg-[#fff] w-[400px] lg:w-[500px] h-[300px] z-50 p-4 rounded-md space-y-5'>
            <div className='flex items-center justify-between'>
                <h2 className='text-gray-400 font-bold'>{bid}</h2>
                <FaTimes onClick={toggleModal} size={20} className='text-gray-400 cursor-pointer'/>
            </div>
            <div className='space-y-12'>
                <input type="text" placeholder='Bid Amount' className='w-full outline-none p-3 border border-black'/>
                <input type="text" placeholder='description' className='w-full outline-none p-3 border border-black'/>
            </div>
            <div className='absolute bottom-6 right-5 space-x-5'>
                <button onClick={toggleModal} className='bg-gray-800 text-white px-5 py-2 hover:opacity-80'>Close</button>
                <button className='bg-blue-600 text-white px-5 py-2 hover:opacity-80'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default ModalBid
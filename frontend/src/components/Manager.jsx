import { Link } from "react-router-dom"
import { useState } from 'react'

import Modal from "./Modal"


const Manager = ({ tenderBtn }) => {
const [modal, setModal] = useState(false);

const toggleModal = () => {
  setModal(!modal);
}

  return (
    <div className='flex justify-center py-4'>
      {modal && (
        <Modal 
        toggleModal={toggleModal}
        tender="CREATE TENDER"
        />
      )}
       
      <div className='space-y-10'>
        <h2 className='font-bold text-3xl text-center'>Manager</h2>
        <div className='flex flex-col space-y-4'>
            
                <button onClick={toggleModal} className='bg-blue-600 w-[350px] py-3 text-white hover:opacity-80'>{tenderBtn}</button>
           
            <Link to='/bid-made'>
                <button className='bg-blue-600 w-[350px] py-3 text-white hover:opacity-80'>See Bids Made</button>
            </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Manager
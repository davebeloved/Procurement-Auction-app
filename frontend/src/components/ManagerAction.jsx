import { Link } from "react-router-dom"
import { useState } from 'react'
import Modal from "./Modal";

const ManagerAction = ({ tenderBtn }) => {
const [modal, setModal] = useState(false);

const toggleModal = () => {
  setModal(!modal);
}

  return (
    <div>
        {modal && (
            <div className="flex justify-center mr-[250px]">

                <Modal 
                toggleModal={toggleModal}
                tender="CREATE AUCTION"
                />
            </div>
      )}
       
      <div className='space-y-10'>
        <h2 className='font-bold text-3xl text-center'>Manager</h2>
        <div className='flex flex-col items-center space-y-4'>
            
                <button onClick={toggleModal} className='bg-blue-600 w-[350px] py-3 text-white hover:opacity-80'>{tenderBtn}</button>
           
            <Link to='/auction-bid-made'>
                <button className='bg-blue-600 w-[350px] py-3 text-white hover:opacity-80'>See Bids Made</button>
            </Link>
        </div>
        
      </div>
    </div>
  )
}

export default ManagerAction
import { useState, useEffect } from 'react'
import ConfirmBids from './ConfirmBids';
import Modal from './Modal'
import SeeBids from './SeeBids';

const BidMade = () => {
const [modal, setModal] = useState(false);
const [confirmBid, setConfirmBid] = useState(false);

const toggleModal = () => {
        setModal(!modal);
}
const bidsConfirm = () => {
        setConfirmBid(!confirmBid);
}
      
  return (
    <div>
        {modal && (
            
                <SeeBids 
                    toggleModal={toggleModal}
                    bids="ENTER TENDER ADDRESS"
                />
        )}
        {confirmBid && (
            
            <ConfirmBids bidsConfirm={bidsConfirm}/>

        )}
       
        <div className='flex items-center justify-between px-5'>
        <h2 className='text-2xl font-bold flex-1 text-center py-4 mb-4'>Bids</h2>
        <button onClick={toggleModal} className=' px-7 py-3 bg-blue-600 hover:opacity-80 text-white'>Check Bids</button>
        </div>

        <table className='w-full '>
            <tr className=''>
                <th className='py-3'>Bidder Addess</th>
                <th>Biding Amount</th>
                <th>Bid Description</th>
                
            </tr>
            <tr onClick={bidsConfirm} className='text-center cursor-pointer'>
                <td className='py-3'>0xfdghjhgfdfghjkikhkjiijhj</td>
                <td className=''>20</td>
                <td className=''>steel</td>
            </tr>


        </table>
    </div>
  )
}

export default BidMade
import { useState } from 'react'
import { ImCancelCircle } from 'react-icons/im'
import DeployedTender from './DeployedTender'
import ModalBid from './ModalBid';

const DeployAuction = ({ headingTitle, tender }) => {
const [modal, setModal] = useState(false);

const toggleModal = () => {
  setModal(!modal);
}


  return (
    <div>
        {modal && (
             <ModalBid 
             toggleModal={toggleModal}
             bid="BID AUCTION"
             />
        )}
       
        <h2 className='text-2xl font-bold text-center py-4 mb-4'>{headingTitle}</h2>
        <table className='w-full '>
            <tr className=''>
                <th className='p-3'>S/N</th>
                <th>{tender}</th>
                <th>Description</th>
                <th>Status</th>
            </tr>
            <tr className='text-center'>
                <td className='p-3'>1</td>
                <td 
                    onClick={toggleModal}
                    className='cursor-pointer'
                >
                    0xdebfgrgkjgkfjkjdkfkdfjksdfksjfksskjd
                </td>
                <td>steel</td>
                <td className='cursor-pointer flex justify-center p-4'><ImCancelCircle /></td>
            </tr>


        </table>
    </div>
  )
}

export default DeployAuction
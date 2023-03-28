import { useContext, useState } from 'react'
import { ImCancelCircle } from 'react-icons/im'
import ModalBid from './ModalBid';
import { ProcurementContext } from '../context/ProcurementContext';

const DeployedTender = ({ headingTitle, tender }) => {
const [modal, setModal] = useState(false);
const { createTenderData } = useContext(ProcurementContext)

const toggleModal = () => {
  setModal(!modal);
}

  return (
    <div>
        {modal && (
             <ModalBid 
             toggleModal={toggleModal}
             bid="BID TENDER"
             />
        )}
       
        <h2 className='text-2xl font-bold text-center py-4 mb-4'>{headingTitle}</h2>

        <div className='text-center '>
          <div className='grid grid-cols-4 font-bold'>
            <h2>S/N</h2>
            <h2>Tender</h2>
            <h2>Description</h2>
            <h2>Status</h2>
          </div>
          <div className='grid grid-cols-4'>
            <p className='p-3'>1</p>
            <p className='p-3'>0xsdfrfdesgyhujkihygtfrdrg</p>
            <p className='p-3'>{createTenderData}</p>
            <p className='cursor-pointer flex justify-center p-3'><ImCancelCircle /></p>
          </div>
        </div>
        {/* <table className='w-full '>
          <thead>

              <tr className=''>
                  <th className='p-3'>S/N</th>
                  <th>{tender}</th>
                  <th>Description</th>
                  <th>Status</th>
              </tr>
          </thead>
            <tr className='text-center'>
                <td className='p-3'>1</td>
                <td 
                    onClick={toggleModal}
                    className='cursor-pointer'
                >
                    0xdebfgrgkjgkfjkjdkfkdfjksdfksjfksskjd
                </td>
                <td>{createTenderData}</td>
                <td className='cursor-pointer flex justify-center p-4'></td>
            </tr>


        </table> */}
    </div>
  )
}

export default DeployedTender
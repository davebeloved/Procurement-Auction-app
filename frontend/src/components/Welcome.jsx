import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import { ProcurementContext } from '../context/ProcurementContext'

const Welcome = () => {

  const {connectWallet, currentAccount} = useContext(ProcurementContext);

  return (
    <div>
      <div className='space-y-4'>
        <h2 className='text-3xl font-bold md:text-4xl lg:text-5xl text-[#5D3FD3]'>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "Welcome to a Secure",
                "and Efficient Procurement Platform",
              ]
            }}
         
          />
        </h2>
        <h3 className='md:text-2xl lg:text-3xl'>Kindly make your bids in our Procurement Tender/Auction deals</h3>
        <p className='text-gray-500'>
            However only the Manager/Creator can accept, reject, shortlist and update the Procurement Tender and Auction application Status.
        </p>
         {currentAccount.length ? 
            <button onClick={connectWallet} className='hidden bg-[#5D3FD3] hover:opacity-80 text-white px-8 py-3'>
            Connect Wallet
          </button>
         
         : 
            <button onClick={connectWallet} className='bg-[#5D3FD3] hover:opacity-80 text-white px-8 py-3'>
            Connect Wallet
          </button>
         }

        
      </div>
    </div>
  )
}

export default Welcome

// Welcome to a Secure and Efficient Procurement
import React from 'react'
import AuctionPortal from '../components/AuctionPortal'
import NavBar from '../components/NavBar'
import Procure from '../components/Procure'

const Auction = () => {
  return (
    <div>
      {/* <Procure 
        procureTitle="Auction Portal"
        deployBtn="Get Deployed Auctions"
        gailBtn="Gail Manager"
      /> */}
      <AuctionPortal />
    </div>
  )
}

export default Auction

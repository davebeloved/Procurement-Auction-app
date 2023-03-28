import React from 'react'
import NavBar from '../components/NavBar'
import Procure from '../components/Procure'

const Procurement = () => {
  return (
    <div>
      <Procure
        procureTitle="Procurement Tender Portal"
        deployBtn="Get Deployed Tenders"
        gailBtn="Gail Manager"
      />
      
    </div>
  )
}

export default Procurement

import { Routes, Route } from 'react-router-dom'
import AuctionBidMade from './components/AuctionBidMade';
import BidMade from './components/BidMade';
import DeployAuction from './components/DeployAuction';
import DeployedTender from './components/DeployedTender';
import Footer from './components/Footer';
import Manager from './components/Manager';
import ManagerAction from './components/ManagerAction';
import MobileNav from './components/MobileNav';
import NavBar from './components/NavBar';
// import { ProcurementContextProvider } from './context/ProcurementContext';
import Auction from './pages/Auction';
import GailManager from './pages/GailManager';
import Home from './pages/Home';
import Procurement from './pages/Procurement';

function App() {
  return (
    <div>
      {/* <ProcurementContextProvider> */}

          <NavBar />
          {/* <MobileNav /> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='procurement' element={<Procurement />} />
            <Route path='auction' element={<Auction />} />
            <Route path='gail-manager' element={<Manager 
              tenderBtn="Create Tenders"
            />} />
            <Route path='auction-manager' element={<ManagerAction 
              tenderBtn="Create Auctions"
            />} />
            <Route path='deploy' element={<DeployedTender 
              headingTitle="Deployed Tenders"
              tender="Tender"
            />} />
            <Route path='auction-deploy' element={<DeployAuction 
                headingTitle="Deployed Auctions"
                tender="Auction"
            />} />
            <Route path='bid-made' element={<BidMade />} />
            <Route path='auction-bid-made' element={<AuctionBidMade />} />
            
          </Routes>
          <Footer />
      {/* </ProcurementContextProvider> */}
    </div>
  );
}

export default App;

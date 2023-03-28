import { Link } from 'react-router-dom'

const AuctionPortal = () => {
  return (
    <div className='flex justify-center py-4'>
        <div className='space-y-10'>
            <h2 className='font-bold text-3xl text-center'>Auction Portal</h2>
            <div className='flex flex-col space-y-4'>
                <Link to='/auction-deploy'>
                    <button className='bg-blue-600 w-[350px] py-3 text-white hover:opacity-80'>Get Deployed Tenders</button>
                </Link>
                <Link to='/auction-manager'>
                    <button className='bg-blue-600 w-[350px] py-3 text-white hover:opacity-80'>Gail Manager</button>
                </Link>
            </div>
        
        </div>
    </div>
  )
}

export default AuctionPortal
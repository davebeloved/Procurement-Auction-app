
import HomeGif from '../images/home.gif'
import Welcome from './Welcome'


const HomeBody = () => {


  return (
    <>

      <div className='px-16 lg:flex items-center gap-x-14 lg:px-32 py-14'>
        <div className='hidden lg:block border border-gray-500 shadow-sm lg:w-[100px rounded-md'>
          <img src={HomeGif} alt="home gif" className='' />
        </div>
        <Welcome />
      </div>
    </>
  )
}

export default HomeBody

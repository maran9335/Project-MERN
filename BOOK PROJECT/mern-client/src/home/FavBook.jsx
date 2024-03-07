import React from 'react'
import FavBookimg from "../assets/banner-books/favbook.jpg"
import { Link } from 'react-router-dom'
const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
    <img src={FavBookimg} alt=""  className='rounded md:w-10/12'/>
      </div>
      <div className='md:w-1/2'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4'>Find your Favorite <span className='text-blue-700'>Book Here!
        </span></h2>
        <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reiciendis a blanditiis earum illo vel laborum deleniti, qui architecto dolores?</p>
       
                            {/* states */}
        <div className=' flex flex-col sm:flex-row justify-between gap-6 md:w-3/4'>
            <div >
                <h3 className=' text-3xl font-bold'>500+</h3>
                <p className='text-base'>Book listing</p>
            </div>
            <div>
                <h3 className=' text-3xl font-bold'>400+</h3>
                <p className='text-base'>Register Users</p>
            </div>
            <div>
                <h3 className=' text-3xl font-bold'>1500+</h3>
                <p className='text-base'>PDF Downloads</p>
            </div>
        </div>
        <Link to="/shop" className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded
         hover:bg-black hover:rounded-2xl transition-all duration-300'>Explore More</button></Link>
      </div>
      
    </div>
  )
}

export default FavBook

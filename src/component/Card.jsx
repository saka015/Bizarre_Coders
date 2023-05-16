import React from 'react'
import vk from '../dukan/VK HQ Wall.jpg'

const Card = (props) => {
  return (
    <div className='bg-slate-600 h-72 w-72 mx-24 my-16 py-2 '>
    <img src={vk} alt="" className='h-48 w-48 mx-10 rounded-full ' />
   <div className='flex my-14 '>
    <div className='border cursor-pointer hover:text-white w-1/2 px-8 hover:bg-slate-600 bg-white text-center'> <i className='text-4xl fa fa-github'></i> </div>
    <div className='border cursor-pointer hover:text-white w-1/2 text-center px-8 hover:bg-slate-600 bg-white'> <i className='text-4xl fa fa-linkedin'></i></div>
   </div> 
   
    </div>
  )
}

export default Card
import React from 'react'

// import logo from '../dukan/logo.png'

const Navbar = () => {
  return (
    <div className='flex h-14 bg-white border border-solid space-x-[700px]'>
    <h1 className='text-sm  md:text-2xl mx-2 my-2 md:mx-4 my-3 font-bold font-serif'>Bizarre <span className='bg-slate-700 text-white p-1'>Coders</span></h1>

    <ul className='flex float-right mx-[100px] my-2 md:my-3 float-right   '>
        <li className='px-4 cursor-pointer hover:translate-y-1 transition-all duration-1000 hover:bg-slate-700 hover:text-white '>About</li>
        <li className='px-4 cursor-pointer hover:translate-y-1 transition-all duration-1000 hover:bg-slate-700 hover:text-white'>Team</li>
        <li className='px-4 cursor-pointer hover:translate-y-1 transition-all duration-1000 hover:bg-slate-700 hover:text-white'>Testimonials</li>
        <li className='px-4 cursor-pointer hover:translate-y-1 transition-all duration-1000 hover:bg-slate-700 hover:text-white'>Join Us!</li>
    </ul>

    {/* Switch */}

        {/* <button className='text-md p-1 rounded-full my-2 md:my-3 bg-gray-400'>DARK</button> */}



    </div>
  )
}

export default Navbar
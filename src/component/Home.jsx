import React from 'react'
import homelogo from '../dukan/main.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex mb-12'>

    <div className="main my-40 mx-12">
        <h1 className='text-6xl text-slate-800 font-bold my-0'>Eat.Sleep.Code</h1>
        <div className="button  my-8">
        <p className='text-lg  font-semibold break-words w-[600px]'>A developer team that is passionate about coding and technology. We are a group of experienced developers who are always looking for new challenges </p>
            <Link to="/joinus"><button className='animate-pulse my-4 bg-slate-700 text-white px-4 py-2'>Join Us!</button></Link>
        </div>
    </div>
    <img src={homelogo} className='mx-[230px] my-20 transition-all  animate-bgounce ease-in-out duration-[2000ms]' alt="" height="400px"  width="400px"/>

    </div>
  )
}

export default Home

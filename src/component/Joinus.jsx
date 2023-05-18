import React from 'react'
import bizLink from '../dukan/bizLink.png'
import bizYou from '../dukan/bizYou.png'

const Joinus = () => {
  return (
    <div className='mb-12 '>
      <div className=''>
      <h1 className='text-3xl text-center font-semibold font-serif bg-slate-700 text-white p-4'>Join Us!</h1>
      <h1 className='text-3xl text-center font-semibold font-serif bg-slate-700 text-white p-3 '>Join Us!</h1>

<div className="main flex my-8">

  
<div className="jooin py-2">
      <a href="https://www.linkedin.com/company/bizarre-coders/?viewAsMember=true&original_referer=" target='_blank'><h2 className='my-8 bg-slate-400 roun
       w-48 p-2 m-2 font-semibold text-center cursor-pointer' > <i className='fa fa-linkedin text-2xl hover:animate-spin font-semibold text-blue-800'></i> LinkedIN </h2></a>
      <a href="https://chat.whatsapp.com/Gsvo89niVhKCJnfKzsG13F" target='_blank'><h2 className='my-8 bg-slate-400 roun
       w-48 p-2 m-2 font-semibold text-center cursor-pointer' > <i className='fa fa-whatsapp  text-2xl hover:animate-spin font-semibold text-green-700'></i> Whatsapp  </h2></a>
        <a href="https://www.youtube.com/@BizarreCoders" target='_blank'><h2 className='my-8 bg-slate-400 roun
       w-48 p-2 m-2 font-semibold text-center cursor-pointer' > <i className='hover:animate-spin fa fa-youtube text-2xl  font-semibold text-red-800'></i> Youtube </h2></a>
       </div>
       
<div className="why w-[650px] p-4 mx-12">
        <h2 className='bg-slate-300 p-4 text-xl font-serif'>Why to Join Us ? </h2>
        <p className='bg-slate-50 text-xl font-mono m-3'>We are largest coding community our Campus with 250+ active members!</p>
        <p className='bg-slate-50 text-xl font-mono m-3'>We have best outreach team!</p>
        <p className='bg-slate-50 text-xl font-mono m-3'>We have member , who are doing really great in their fields!</p>
        <p className='bg-slate-50 text-xl font-mono m-3'>We had conducted Biggest Seminar (by number of attendees) ever hosted by a private community in the campus!</p>
        <p className='bg-slate-50 text-xl font-mono m-3'>We are sharing our experiences through Youtube Videos , Whatsapp Doubt sessions & many more...</p>
       </div>
      
</div>
      </div>
{/* 
       <div className="img flex p-4 my-[8px]">
       <img className='justify-center  mx-2' width="500px" src={bizLink} alt="" />   
<img className='justify-center mx-2' width="700px" src={bizYou} alt="" />

       </div> */}

    
    </div>
  )
}

export default Joinus
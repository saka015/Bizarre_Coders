import React from 'react'
import testi1 from '../dukan/testi1.jpeg'
import seminar from '../dukan/seminar.png'

const Testimonials = () => {
  return (
    <div>
      <h1 className='text-3xl text-center font-semibold font-serif bg-slate-700 text-white p-4'><br /></h1>

         <h1 className='text-3xl text-center font-semibold font-serif bg-slate-700 text-white p-4 '>Testimonials</h1>

         
         <h2 className='text-2xl font-medium font-mono bg-slate-500 w-80 my-4 mx-2 rounded-md text-center   text-white px-4'>Mega Beginner Session</h2>

        <div className="mega flex mx-20 my-8">
        <img src={seminar} width="700px" alt="" />
        <p className='w-80 p-6 mx-8 bg-slate-300'> <strong>Bizarre Coders Club</strong> conducted a session on how to start in web development, blockchain, cybersecurity, and artificial intelligence/machine learning. The session was attended by over 200 people and was divided into four parts, each of which focused on one of the four fields. The speakers were knowledgeable and engaging, and the information they presented was clear and concise. The session provided a great overview of the four fields and gave attendees a good starting point for further learning.</p>
        </div>


         





         {/* seminar section */}

         <h2 className='text-2xl font-medium font-mono bg-slate-500 w-48 my-4 mx-2 rounded-md text-center text-white'>Sessions</h2>

            <div className='flex my-4 mx-8'>
         <img src={testi1} className='border mx-8' alt="" />
        <p className='bg-slate-300 p-4 w-72'>We , <strong>Bizarre Coders</strong> club conducted a seminar on coding fields. The seminar provided an overview of the different coding fields and discussed the skills and knowledge that are required to succeed in each field. The seminar was attended by a group of people who were interested in learning more about coding fields. The seminar was well-received and the attendees were able to learn a lot about the different coding fields.
        The seminar was led by a panel of experienced coders who shared their insights into the different coding fields.
The panelists discussed the different career paths that are available to coders, as well as the skills and knowledge that are needed to succeed in each field.


</p>
            </div>

    
    
    
    </div>
  )
}

export default Testimonials
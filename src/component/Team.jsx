import React from 'react'
import Card from './Card'
import kamal from '../dukan/Kamal.jpg'
import agrim from '../dukan/Agrim.jpg'
import mehak from '../dukan/mehak.png'
import diksha from '../dukan/Diksha.jpg'
import simar from '../dukan/Simar.jpg'
import aryan from '../dukan/Aryan.jpg'
import suraj from '../dukan/Suraj.png'



const Team = (props) => {
  return (
    <div>
      <h1 className='text-3xl text-center font-semibold font-serif bg-slate-700 text-white p-4 '>Our Team</h1>
      <h1 className='text-3xl text-center font-semibold font-serif bg-slate-700 text-white p-4 '>Our Team</h1>
      
      <div className="flex box-content">
      <Card name="Kamal Nayan" img={kamal} github={`https://github.com/saka015`} linkedin={'https://www.linkedin.com/in/saka015/'} />
      <Card name="Agrim Sharma" img={agrim} github={`https://github.com/saka015`} linkedin={'https://www.linkedin.com/in/saka015/'} />
      <Card name="Mehak" img={mehak} github={`https://github.com/saka015`} linkedin={'https://www.linkedin.com/in/saka015/'} />
      </div>
      <div className="flex box-content">
      <Card name="Suraj Pandey" img={suraj} github={`https://github.com/saka015`} linkedin={'https://www.linkedin.com/in/saka015/'} />
      <Card name="Simar Sidhu" img={simar} github={`https://github.com/saka015`} linkedin={'https://www.linkedin.com/in/saka015/'} />
      <Card name="Aryan Sharma" img={aryan} github={`https://github.com/saka015`} linkedin={'https://www.linkedin.com/in/saka015/'} />
      </div>
      <Card name="Diksha" img={diksha} github={`https://github.com/saka015`} linkedin={'https://www.linkedin.com/in/saka015/'} />



    </div>
  )
}

export default Team
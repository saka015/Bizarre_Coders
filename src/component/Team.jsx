import React from 'react'
import Card from './Card'
import kamal from '../dukan/Kamal.jpg'
import agrim from '../dukan/Agrim.jpg'
import mehak from '../dukan/mehak.png'
import diksha from '../dukan/Diksha.jpg'
import simar from '../dukan/Simar.jpg'
import aryan from '../dukan/Aryan.jpg'
import suraj from '../dukan/Suraj.png'
import vasu from '../dukan/Vasu.png'



const Team = (props) => {
  return (
    <div>
      <h1 className='text-3xl text-center font-semibold font-serif bg-slate-700 text-white p-4'><br /></h1>

      <h1 className='text-3xl text-center font-semibold font-serif bg-slate-700 text-white p-4 '>Our Team</h1>
      
      <div className="flex box-content">
      <Card name="Kamal Nayan" img={kamal} github={`https://github.com/saka015`} linkedin={'https://www.linkedin.com/in/saka015/'} />
      <Card name="Agrim Sharma" img={agrim} github={`https://github.com/Agrim-Sharma174`} linkedin={'https://www.linkedin.com/in/agrim-sharma174/'} />
      <Card name="Mehak" img={mehak} github={`https://github.com/mehak-2`} linkedin={'https://www.linkedin.com/in/mehak-45a190245'} />
      </div>
      <div className="flex box-content">
      <Card name="Suraj Pandey" img={suraj} github={`https://github.com/SurajjBhardwaj`} linkedin={'https://www.linkedin.com/in/surajjbhardwaj'} />
      <Card name="Simar Sidhu" img={simar} github={`https://github.com/simsid124`} linkedin={'https://www.linkedin.com/in/simar-sidhu-828333246/'} />
      <Card name="Aryan Sharma" img={aryan} github={`https://github.com/aryan-codes-star`} linkedin={'https://www.linkedin.com/in/aryan-sharma17/'} />
      </div>
      <div className="flex box-content">
      <Card name="Vasu Beri"  img={vasu} github={`#`} linkedin={'https://www.linkedin.com/in/vasu-beri-984740233/'} />
      <Card name="Diksha" img={diksha} github={`https://github.com/diksha-34`} linkedin={'https://www.linkedin.com/in/diksha-sharma-824548244'} />
      </div>



    </div>
  )
}

export default Team
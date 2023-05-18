import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Navbar extends Component {
  render() {
    return (

<div className='flex h-14 w-[2024px] fixed bg-white border border-solid space-x-[700px] '>
    
        <Link to="/" > <h1 className='text-sm  md:text-2xl mx-2 my-2 md:mx-4 my-3 font-bold font-serif'>Bizarre <span className='bg-slate-700 text-white p-1'>Coders</span></h1></Link>
    <ul className='flex float-right mx-[100px] my-2 md:my-3 float-right   '>
        {/* <li className='px-4 cursor-pointer hover:translate-y-1 transition-all duration-1000 hover:bg-slate-700 hover:text-white '>
        <Link className="nav-link active" aria-current="page" to="/home">About</Link>
        </li> */}
        <li className='px-4 cursor-pointer hover:translate-y-1 transition-all duration-1000 hover:bg-slate-700 hover:text-white '>
        <Link className="nav-link active" aria-current="page" to="/team">Team</Link>
        </li>
        <li className='px-4 cursor-pointer hover:translate-y-1 transition-all duration-1000 hover:bg-slate-700 hover:text-white '>
        <Link className="nav-link active" aria-current="page" to="/testimonials">Testimonials</Link>
        </li>
        <li className='px-4 cursor-pointer hover:translate-y-1 transition-all duration-1000 hover:bg-slate-700 hover:text-white '>
        <Link className="nav-link active" aria-current="page" to="/joinus">Join Us!</Link>
        </li>

    </ul>

      
      </div>
    )
  }
}

export default Navbar
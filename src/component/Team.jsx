import React from 'react'
import Card from './Card'

const Team = () => {
  return (
    <div>
      <h1 className='text-3xl font-semibold font-serif bg-slate-700 text-white p-4'>Our Team</h1>
      
      <div className="flex box-content">
      <Card />
      <Card />
      <Card />
      </div>

    </div>
  )
}

export default Team
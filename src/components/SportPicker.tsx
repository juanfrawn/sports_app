import React from 'react'
import { Link } from "react-router-dom";

const SportPicker = () => {
  return (
    <div className='h-screen'>
      <div className='flex flex-col items-center justify-center h-full'>
        <h1 className='text-8xl font-bold text-zinc-300 mb-6'>Pick a sport</h1>
        <div className='w-full flex justify-center gap-x-4'>
          <Link to="/MLB" className='border-red-500 border-2 hover:bg-red-500 hover:shadow-[0_10px_80px_-15px_rgba(0,0,0,0.3)] hover:shadow-red-900 transition-colors duration-300 text-white font-bold text-2xl py-3 px-16 rounded-xl'>
            MLB
          </Link>
          <Link to="/NFL" className='border-red-500 border-2 hover:bg-red-500 hover:shadow-[0_10px_80px_-15px_rgba(0,0,0,0.3)] hover:shadow-red-900 transition-colors duration-300 text-white font-bold text-2xl py-3 px-16 rounded-xl'>
            NFL
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SportPicker
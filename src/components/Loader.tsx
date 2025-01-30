import React from 'react'
import {PropagateLoader} from 'react-spinners'
export default function Loader({info=''}) {
  return (
    <div className='h-screen w-screen fixed top-0 left-0 bg-black z-[99999] opacity-[0.95] items-center justify-center flex gap-6 flex-col'>
        <PropagateLoader color='#007aff'/>
        {info?<div className='text-[#007aff] font-poppins font-semibold italic'>{info}</div>:''}
    </div>
  )
}

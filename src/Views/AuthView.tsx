import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthView = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center fixed top-0 left-0 z-[9999] bg-slate-100'>
      <Outlet/>
    </div>
  )
}

export default AuthView
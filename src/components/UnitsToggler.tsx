import React from 'react'
import { useAppDispatch } from '../app/hooks'
import { setUnits } from '../app/features/scheduleSlice'

const UnitsToggler = () => {
  const dispatch=useAppDispatch()
  function handleChange(e){
    const units=e.target.checked?'SI':'imperial'
    dispatch(setUnits(units))
  }
  return (
    <div className="form-control w-52 ">
      <div className='flex items-center justify-around px-6 text-xl font-bold'>
      <div className="label-text text-white">Imperial</div>
      <input type="checkbox" className="toggle toggle-accentborder-blue-500 bg-blue-500 [--tglbg:white] hover:bg-blue-700" onChange={handleChange} />
      <div className="label-text text-white">Metric</div>
      </div>
  </div>
  )
}

export default UnitsToggler
import React from 'react'
import { getAllEstimates } from '../app/services/axios'
import logo_est from '../assets/icons8-estimate-64.png'
import { useNavigate } from 'react-router-dom'
const Estimates = () => {
  const [estimates,setEstimates] = React.useState([])
  const navigate=useNavigate()
  React.useEffect(() => {
    const token = localStorage.getItem("token")
    const User = JSON.parse(localStorage.getItem("user"))._id
    getAllEstimates(User,token).then((res) => {
      setEstimates(res.data.estimates??[])
    })
  },[])
function handleEstimateRestore(e,id){
  console.log('restoring estimate::',id)
  e.preventDefault()
  navigate('/schedule?estimate='+id)
}

  return (
  <div className='container'>
 {estimates.map((estimate) => {
  return (
    <div className="card bg-base-100 w-[120px] shadow-xl p-2 cursor-pointer hover:scale-105 duration-500 ease-in-out" key={estimate._id} onClick={(e,id)=>handleEstimateRestore(e,estimate._id)}>
    <figure>
      <img
        src={logo_est}
        alt="estimate_pic" />
    </figure>
    <div className="card-title flex items-center justify-center">
        <div className="badge badge-secondary">{estimate.Name}</div>
    </div>
  </div>
  )
 })}
  </div>
  )
}

export default Estimates
import React, { useState } from 'react'
import { useAppDispatch } from '../app/hooks'
import { NavLink, useNavigate } from 'react-router-dom'
import { setAuthentication } from '../app/features/authSlice'
import toast from 'react-hot-toast'
import logo from '../assets/logo-white.svg'
import { loginUser } from '../app/services/axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faKey, faUser } from '@fortawesome/free-solid-svg-icons'
import Loader from './Loader'
const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading,setIsLoading]=useState(false)
  const [credentials, setCredentials] = useState({email: '',password: '',})
  const dispatch=useAppDispatch()
  const navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function toggleShowPassword() {
    setShowPassword(prev => !prev)
  }

  async function handleKeyDown(e){
    if(e.key=='Enter'){
      await handleSubmit(e)
    }
  }
  
  async function handleSubmit  (e) {
    e.preventDefault();
    try {
      setIsLoading(true)
        loginUser({Email:credentials.email,Password:credentials.password}).then(response=>{
        const {userInfo,token}=response.data
        window.localStorage.setItem('token',token)
        window.localStorage.setItem('user',JSON.stringify(userInfo))
        dispatch(setAuthentication({isAuthenticated:true,userInfo}))
        setIsLoading(false)
        toast.success(`Logged in as ${credentials.email}` )
        if(window.localStorage.getItem('id')&& window.localStorage.getItem('token')){
          window.location.replace(window.location.origin+'/?drawing='+window.localStorage.getItem('id')+'&token='+window.localStorage.getItem('token'))
        }else{
          navigate('/')
        }
      }).catch((err)=>{
        setIsLoading(false)
        toast.error(err.response.data.error)
        if(err.response.data.error=='email not verified'){
          navigate('/auth/verify-email?email='+credentials.email+'&codesent=true')
        }
      })
      
      
    } catch (error) {
      toast.error(error.data.error)
      if(error.status==403) navigate(`verify-email?email=${credentials.email}&codesent=true`)
  }
}
  return (
    <div className='bg-white w-[350px] h-[500px] p-4 rounded-md shadow-xl text-slate-800 ' onKeyDown={handleKeyDown} >
    <div className='w-full flex items-center justify-center my-4 bg-slate-700 rounded-box'>
      <NavLink className='w-28 h-28 bg-primaryBlue rounded-full flex items-center justify-center opacity-90' to='/'>
        <img src={logo} />
      </NavLink>
    </div>
    <div className='w-full flex items-center justify-center text-xl font-semibold text-primaryBlue'>Login</div>

    <div className='w-full flex items-center justify-center my-8'>
      <div className='w-[90%] h-[36px] px-2 border-b-[1px] border-primaryBlue flex items-center justify-center'>
        <FontAwesomeIcon icon={faUser} className=' ' />
        <input type='email' className='w-full h-full bg-transparent outline-none px-3 ' placeholder='Email address' name='email' onChange={handleChange}/>
      </div>
    </div>

    <div className='w-full flex items-center justify-center mt-8'>
      <div className='w-[90%] h-[36px] px-2 border-b-[1px] border-primaryBlue flex items-center justify-center'>
        
        <FontAwesomeIcon icon={faKey} />
        <input type={showPassword ? 'text' : 'password'} className='w-full h-full bg-transparent outline-none px-3 ' placeholder='Password' name='password' onChange={handleChange}/>
        {!showPassword ? <FontAwesomeIcon icon={faEye}  className=' cursor-pointer' onClick={toggleShowPassword} /> :
          <FontAwesomeIcon icon={faEyeSlash}  className=' cursor-pointer' onClick={toggleShowPassword} />}
      </div>
    </div>
    <div className='my-3 text-xs px-4 font-light cursor-pointer italic text-primaryBlue' onClick={()=>navigate('forgot-password')}>Forgot password?</div>
    <div className='flex w-full h-[48px] items-center justify-center'>
      <button className='btn btn-primary w-[120px] p-2  rounded-md shadow-xl hover:scale-105 duration-300 ease-in-out' onClick={handleSubmit}>Submit</button>
    </div>

    <div className='w-full flex items-center justify-start px-4 my-3 text-xs text-slate-800 font-light ' >
      Don&apos;t have an account?&nbsp;<NavLink to='signup' className='font-semibold text-primaryBlue' >Sign up</NavLink>
    </div>
    {isLoading?<Loader/>:''}
  </div>
  )
}

export default Login
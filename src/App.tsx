import NavbarComponent from './components/NavbarComponent'
import { Route, Routes, useSearchParams } from 'react-router-dom'
import { routes } from './routes'
import { loadDrawingData } from './helpers/loadDrawingData'
import { useEffect, useState } from 'react'
import { useAppDispatch } from './app/hooks'
import { updateAllResources } from './app/features/scheduleSlice'

const App = () => {
  const [params,setParams]=useSearchParams()


  const dispatch = useAppDispatch();
  useEffect(() => {
    let id='',  token=''
    if(params.get("drawing")){
      id=params.get("drawing")
      localStorage.setItem('id',params.get("drawing"))
    }else{
      if(localStorage.getItem('id')){
        id=localStorage.getItem('id')
        console.log('id::::',id)
      }
    }
    if(params.get("token")){
      token=params.get("token")
      localStorage.setItem('token',params.get("token"))
    }else{
      if(localStorage.getItem('token')){
        token=localStorage.getItem('token')
      }
    }
    console.log('id',id)
    // const id="6753d9fe85ceb8e0120beb56"
    // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OWI2M2U0ZWE1ZDNhZmQyY2M0Y2M0OSIsInR5cGUiOjAsImlhdCI6MTczMzU0ODQ3OCwiZXhwIjoxNzM0MTUzMjc4fQ.PS6nAxPL5vNRONurtEnmWOjqZmwBhSlF0RTSQzEeynM"
    if(id&&token){
      loadDrawingData(token,id)
      dispatch(updateAllResources())
    }
  }, [])
  return (<div className='h-screen min-w-screen overflow-hidden'>
    <div className='sticky top-0 left-0 z-50 h-[64px]'>
      <NavbarComponent />
    </div>
    <div>
      <Routes>
        {routes.map(({ path, component, name }) => (<Route path={path} Component={component} key={name} />))}
      </Routes>
    </div>
  </div>
  )
}

export default App
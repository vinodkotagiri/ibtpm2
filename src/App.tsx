import NavbarComponent from './components/NavbarComponent'
import { Route, Routes, useSearchParams } from 'react-router-dom'
import { routes } from './routes'
import { loadDrawingData } from './helpers/loadDrawingData'
import { Suspense, useEffect, useState } from 'react'
import { useAppDispatch } from './app/hooks'
import { updateAllResources } from './app/features/scheduleSlice'
import { getUserDetails } from './app/services/axios'
import Loader from './components/Loader'

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

    if(token){
      getUserDetails(token).then(res=>{
        if(res?.data?.userDetails?.userInfo){
          localStorage.setItem('user',JSON.stringify(res?.data?.userDetails?.userInfo))
        }
      })
    }

    if(id&&token&&!params.get("estimate")){
      loadDrawingData(token,id)
      dispatch(updateAllResources())
    }
  }, [])

  return (
    <Suspense fallback={<Loader/>}>
  <div className='h-screen min-w-screen overflow-hidden'>
    <div className='sticky top-0 left-0 z-50 h-[64px]'>
      <NavbarComponent />
    </div>
    <div className='h-[calc(100vh-64px)]'>
    <Routes>
          {routes.map(({ path, component, children, name }) => (
            <Route key={name} path={path} Component={component}>
              {/* Render child routes if they exist */}
              {children &&
                children.map(({ path, component, name,index }) => {
                  {
                    return index?
                     (<Route index Component={component} />)
                   : (<Route key={name} path={path} Component={component} />)
                  }
                })}
            </Route>
          ))}
        </Routes>
    </div>
  </div>
  </Suspense>
  )
}

export default App
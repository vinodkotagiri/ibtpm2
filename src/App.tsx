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
      
      sessionStorage.setItem('id',params.get("drawing"))
    }else{
      if(sessionStorage.getItem('id')){
        id=sessionStorage.getItem('id')
      }
    }
    if(params.get("token")){
      token=params.get("token")
      sessionStorage.setItem('token',params.get("token"))
    }else{
      if(sessionStorage.getItem('token')){
        token=sessionStorage.getItem('token')
      }
    }
   
    if(id&&token){
      loadDrawingData(token,id)
      dispatch(updateAllResources())
    }
  }, [])
  return (<div className='h-screen min-w-screen overflow-hidden'>
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
  )
}

export default App
import NavbarComponent from './components/NavbarComponent'
import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import { loadDrawingData } from './helpers/loadDrawingData'
import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    loadDrawingData()
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
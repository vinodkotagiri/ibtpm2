import React from 'react'
import NavbarComponent from './components/NavbarComponent'
import ScheduleComponent from './components/ScheduleComponent'
import GanttChartComponent from './components/GanttChartComponent'

const App = () => {
  return (<div className='h-screen min-w-screen overflow-hidden'>
    <div className='sticky top-0 left-0 z-50'>
      <NavbarComponent />
    </div>
    <ScheduleComponent/>
    <GanttChartComponent/>
  </div>
  )
}

export default App
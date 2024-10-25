import React from 'react'
import NavbarComponent from './components/NavbarComponent'
import ScheduleComponent from './components/ScheduleComponent'
import GanttChartComponent from './components/GanttChartComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faChartGantt } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return (<div className='h-screen min-w-screen overflow-hidden'>
    <div className='sticky top-0 left-0 z-50'>
      <NavbarComponent />
    </div>

    <ul className="menu bg-base-200 lg:menu-horizontal rounded-box w-full">
      <li className='flex items-center justify-center'>
        <button className='flex items-center justify-center'>
        <FontAwesomeIcon icon={faCalendarDays} />
          Inbox
        </button>
      </li>
      <li>
        <a>
    <FontAwesomeIcon icon={faChartGantt}/>
          Updates
        </a>
      </li>
      <li>
        <a>
          Stats

        </a>
      </li>
    </ul>



  </div>
  )
}

export default App
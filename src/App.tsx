import  { useState } from 'react'
import NavbarComponent from './components/NavbarComponent'
import ScheduleComponent from './components/ScheduleComponent'
import GanttChartComponent from './components/GanttChartComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faChartGantt, faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [currentView, setCurrentView] = useState<number>(0);
  function handleViewChange(view: number) {
    setCurrentView(view)
  }
  return (<div className='h-screen min-w-screen overflow-hidden'>
    <div className='sticky top-0 left-0 z-50'>
      <NavbarComponent />
    </div>

    <ul className="menu bg-base-200 lg:menu-horizontal rounded-box w-full">
      <div className='flex items-center justify-between'>
      <li className='flex items-center justify-center'>
        <button className='flex items-center justify-center' onClick={() => handleViewChange(0)}>
          <FontAwesomeIcon icon={faCalendarDays} />
          Schedule
        </button>
      </li>
      <div className="divider divider-horizontal"></div>
      <li>
        <button className='flex items-center justify-center' onClick={() => handleViewChange(1)}>
          <FontAwesomeIcon icon={faChartGantt} />
          Gantt Chart
        </button>
      </li>
      <div className="divider divider-horizontal"></div>
      <li>
        <button className='flex items-center justify-center' onClick={() => handleViewChange(2)}>
          <FontAwesomeIcon icon={faMoneyBillTrendUp} />
          Estimation
        </button>
      </li>
      </div>

    </ul>

    {currentView === 0 && <ScheduleComponent />}
    {currentView === 1 && <GanttChartComponent />}

  </div>
  )
}

export default App
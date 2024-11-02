import { useEffect, useState } from 'react'
import NavbarComponent from './components/NavbarComponent'
import ScheduleComponent from './components/ScheduleComponent'
import GanttChartComponent from './components/GanttChartComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faChartGantt, faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons'
import EstimationComponent from './components/EstimationComponent'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons/faFileCirclePlus'
import AddTaskComponent from './components/AddTaskComponent'
import { useAppSelector } from './app/hooks'
import toast from 'react-hot-toast'
import CurrencyChangerComponent from './components/CurrencyChangerComponent'

const App = () => {
  const [currentView, setCurrentView] = useState<number>(0);
  const { tasks } = useAppSelector(state => state.schedule)
  const [hasStartDate,setHasStartDate]=useState(false)
  function handleViewChange(view: number) {
    if(!hasStartDate && view!=0) return toast.error('Please add start date')
    setCurrentView(view)
  }
  useEffect(()=>{
    setHasStartDate(tasks[0].start!=='')
  },[tasks])
  return (<div className='h-screen min-w-screen overflow-hidden'>
    <div className='sticky top-0 left-0 z-50'>
      <NavbarComponent />
    </div>
    <AddTaskComponent />
    <ul className="menu bg-base-200 lg:menu-horizontal rounded-box w-full">
      <div className='flex items-center justify-between'>
        <li className='flex items-center justify-center'>
          <button className=' btn flex items-center justify-center ' style={{ color: currentView === 0 ? 'green' : 'inherit' }} onClick={() => handleViewChange(0)}>
            <FontAwesomeIcon icon={faCalendarDays} />
            Schedule
          </button>
        </li>
        <div className="divider divider-horizontal"></div>
        <li>
          <button className=' btn flex items-center justify-center ' style={{ color: currentView === 1 ? 'green' : 'inherit' }}  onClick={() => handleViewChange(1)}>
            <FontAwesomeIcon icon={faChartGantt} />
            Gantt Chart
          </button>
        </li>
        <div className="divider divider-horizontal"></div>
        <li>
          <button className=' btn flex items-center justify-center ' style={{ color: currentView === 2 ? 'green' : 'inherit' }}  onClick={() => handleViewChange(2)}>
            <FontAwesomeIcon icon={faMoneyBillTrendUp} />
            Estimation
          </button>
        </li>
        <li className='ml-60'>
          <button disabled={tasks[0].start.length === 0} className='disabled:bg-slate-400 disabled:text-slate-500 disabled:cursor-none flex items-center justify-center bg-accent  text-slate-800 btn hover:text-green-500 hover:bg-slate-800' onClick={() => document.getElementById('my_modal_1').showModal()}>
            <FontAwesomeIcon icon={faFileCirclePlus} />
            Add Task
          </button>
        </li>
      </div>
    </ul>
      {currentView === 0&& <ScheduleComponent />}
      {currentView === 1 && <GanttChartComponent />}
      {currentView === 2 && <EstimationComponent />}
      {currentView != 1?<div className='z-50 fixed top-[75px] right-16'>
      <CurrencyChangerComponent/>
      </div>:''}
  </div>
  )
}

export default App
import { Gantt, Task, ViewMode } from 'gantt-task-react'
import { useState } from 'react'
import { useAppSelector } from '../app/hooks';


const GanttChartComponent = ({}) => {
  const { tasks } = useAppSelector(state => state.schedule);
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.Day);
  const [showTaskList, setShowTaskList] = useState<boolean>(true);
  // Map tasks to Gantt chart format
  const formatTasks = (): Task[] => {
    return tasks.map(task => {
      // if( `${new Date(task.end || Date.now() + task.duration * 86400000)}`=='Invalid Date'){        
      //   console.log(task.id,'==>', new Date(task.end || Date.now() + task.duration * 86400000),)
      // }
      return ({
      id: task.id,
      name: task.name,
      start: new Date(task.start || Date.now()), // Default to now if no start date
      end: new Date(task.end || Date.now() + task.duration * 86400000), // Duration in days
      type: task.type === 'project' ? 'project' : 'task',
      progress: 45,
      isDisabled: false,
      dependencies: task.dependencies,
    })}
  );
  };

  const ganttTasks = formatTasks();
  let columnWidth = 64;
  if (viewMode === ViewMode.Month) {
    columnWidth = 300;
  } else if (viewMode === ViewMode.Week) {
    columnWidth = 250;
  }else if (viewMode === ViewMode.Year) {
    columnWidth = 90;
  }
  return (
    <div className='h-full w-full'>
    {/* View mode selection buttons */}
    <div className="flex gap-2 mb-4 fixed right-0 top-20 px-3 items-center justify-center">
      <button className="btn btn-sm bg-red-400" onClick={() => setViewMode(ViewMode.Day)}>Day</button>
      <button className="btn btn-sm bg-yellow-400" onClick={() => setViewMode(ViewMode.Week)}>Week</button>
      <button className="btn btn-sm bg-purple-400" onClick={() => setViewMode(ViewMode.Month)}>Month</button>
      <button className="btn btn-sm bg-indigo-400" onClick={() => setViewMode(ViewMode.Year)}>Year</button>
      <label className="btn cursor-pointer h-full flex justify-around btn-sm bg-green-400">
      <span className="label-text font-semibold">Show Task List</span>
      <input type="checkbox" className="toggle toggle-primary" checked={showTaskList} onChange={() => setShowTaskList(!showTaskList)} />
    </label>
    </div>
    {/* Gantt chart */}
    <div className='h-full w-full overflow-auto px-4'>
    <Gantt tasks={ganttTasks} 
    viewMode={viewMode} 
    listCellWidth={showTaskList ? "155px" : ""} 
    columnWidth={columnWidth}
    barBackgroundColor="purple"
    rowHeight={64}
    fontSize='12'
    />
    </div>
  </div>
  )
}

export default GanttChartComponent
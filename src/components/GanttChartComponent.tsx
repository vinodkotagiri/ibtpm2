import { Gantt, Task, ViewMode } from 'gantt-task-react'
import { useState } from 'react'
import { useAppSelector } from '../app/hooks';


const GanttChartComponent = () => {
  const { tasks } = useAppSelector(state => state.schedule);
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.Month);

  // Map tasks to Gantt chart format
  const formatTasks = (): Task[] => {
    return tasks.map(task => ({
      id: task.id,
      name: task.name,
      start: new Date(task.start || Date.now()), // Default to now if no start date
      end: new Date(task.end || Date.now() + task.duration * 86400000), // Duration in days
      type: task.type === 'project' ? 'project' : 'task',
      progress: task.progress,
      isDisabled: false,
      dependencies: task.dependencies,
    }));
  };

  const ganttTasks = formatTasks();
  return (
    <div className='h-screen overflow-auto'>
    {/* View mode selection buttons */}
    <div className="flex gap-2 mb-4 fixed right-0 top-20 px-3">
      <button className="btn btn-sm bg-red-400" onClick={() => setViewMode(ViewMode.Day)}>Day</button>
      <button className="btn btn-sm bg-yellow-400" onClick={() => setViewMode(ViewMode.Week)}>Week</button>
      <button className="btn btn-sm bg-purple-400" onClick={() => setViewMode(ViewMode.Month)}>Month</button>
    </div>

    {/* Gantt chart */}
    <Gantt tasks={ganttTasks} viewMode={viewMode} />
  </div>
  )
}

export default GanttChartComponent
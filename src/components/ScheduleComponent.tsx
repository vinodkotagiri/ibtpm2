import React, { useEffect, useState } from 'react';
import { Task } from '../constants/types';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { updateTaskFromDrawing, updateTasksDuration, updateTaskStartDate } from '../app/features/scheduleSlice';

const ScheduleComponent: React.FC = () => {
  const [collapsed, setCollapsed] = useState<{ [key: string]: boolean }>({});
  const { tasks, currencyCode, drawingData } = useAppSelector(state => state.schedule);
  const dispatch = useAppDispatch()
  const colorPalette = ['#f0ad4e50', '#5bc0de', '#d9534f', '#5cb85c', '#337ab7'];
  useEffect(() => {
    // updateResources(drawingData)
    if (drawingData.plotLength && drawingData.plotWidth && drawingData.plotArea) {
      console.log('updatinf tasks from drawings')
      dispatch(updateTaskFromDrawing())
    }
  }, [drawingData])

  const buildTaskTree = (tasks: Task[]) => {
    const taskMap: { [id: string]: Task & { children: Task[] } } = {};
    const rootTasks: (Task & { children: Task[] })[] = [];

    tasks.forEach(task => {
      taskMap[task.id] = { ...task, children: [] };
    });

    tasks.forEach(task => {
      if (task.parent && taskMap[task.parent]) {
        taskMap[task.parent].children.push(taskMap[task.id]);
      } else {
        rootTasks.push(taskMap[task.id]);
      }
    });

    return rootTasks;
  };

  const nestedTasks = buildTaskTree(tasks);

  const toggleCollapse = (taskId: string) => {
    setCollapsed(prev => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  const getShade = (baseColor: string, level: number) => {
    const shadeFactor = 0.1 * level;
    return `rgba(${parseInt(baseColor.slice(1, 3), 16)}, ${parseInt(
      baseColor.slice(3, 5),
      16
    )}, ${parseInt(baseColor.slice(5, 7), 16)}, ${1 - shadeFactor})`;
  };


  function handleDurationChange(e, id) {
    const duration = e.target.valueAsNumber
    dispatch(updateTasksDuration({ id, duration }))
  }

  const renderTasks = (tasks: (Task & { children: Task[] })[], level = 0, baseColorIndex = 0) => {
    return tasks.map((task) => {
      const color = getShade(colorPalette[baseColorIndex], level);
      const nextBaseColorIndex = task.children.length > 0 ? (baseColorIndex + 1) % colorPalette.length : baseColorIndex;

      return (
        <React.Fragment key={task.id}>
          <tr style={{ backgroundColor: task.type == 'project' ? color : '#fff' }}>
            <td style={{ paddingLeft: `${level * 20}px`, width: '10%' }}>
              <span className="ml-2">{task.id}</span>
              {task.children.length > 0 && (
                <FontAwesomeIcon icon={collapsed[task.id] ? faChevronCircleDown : faChevronCircleUp} className='ml-2 cursor-pointer' size='lg' color='#00000095' onClick={() => toggleCollapse(task.id)} />
              )}
            </td>
            {/* <td className='font-semibold italic capitalize' style={{color:task.type==='project'?"blue":"green"}}>{task.type}</td> */}
            <td className='w-[100px]'>{task.name}</td>
            {task.cost ? <td className='font-semibold w-[90px]'>{currencyCode + ' ' + task.cost.toFixed(2)}</td> : <td></td>}
            <td className='w-[90px]'>
              <input className='input input-ghost cursor-pointer disabled:border-none disabled:bg-transparent w-[90px]' type='number' value={task.duration} onChange={(e) => handleDurationChange(e, task.id)} disabled={task.type == 'project' || !task.start} />
            </td>
            <td className='w-[80px]'>
              <div className="tooltip  tooltip-right z-50" data-tip="Please select start date">
                <input type='date' className='input input-ghost cursor-pointer' onChange={e => handleStartDateChange(task.id, e.target.value)} value={task.start} />
              </div>
            </td>
            <td className='w-[80px]'><input disabled type='date' className='input input-ghost disabled:border-none disabled:bg-transparent disabled:cursor-auto disabled:text-black' value={task.end} /></td>

            <td className='w-[48px]'>{task.strategy}</td>
            <td className='w-[48px]'>{task.progress}</td>

          </tr>
          {!collapsed[task.id] &&
            task.children.length > 0 &&
            renderTasks(task.children, level + 1, nextBaseColorIndex)}
        </React.Fragment>
      );
    });
  };

  function handleStartDateChange(id, date) {
    dispatch(updateTaskStartDate({ id: id, newDate: date }))
  }
  return (
    <div className="table-container w-screen" style={{ overflow: 'auto', maxHeight: '100vh' }}>
      <table className="table table-lg w-full overflow-auto">
        <thead>
          <tr className="sticky-header">
            <th>ID</th>
            {/* <th>Type</th> */}
            <th>Task Name</th>
            <th>Cost</th>
            <th>Duration</th>
            <th>Start</th>
            <th>End</th>
            <th>Strategy</th>
            <th>Progress</th>

          </tr>
        </thead>
        <tbody>{renderTasks(nestedTasks)}</tbody>
      </table>
    </div>
  );
};

export default ScheduleComponent;

import React, { useState } from 'react';
import schedule from '../constants/schedule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

// Function to generate lighter shades of a color
const getShade = (color: string, level: number) => {
  const opacity = 1 - level * 0.5;
  return `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, ${opacity})`;
};

const ScheduleComponent = () => {
  const [openRows, setOpenRows] = useState<{ [key: number]: boolean }>({});
  let mainColor = '#f2e3c6'; // Base color for the main task

  // Toggle row collapse/expand state
  const toggleRow = (id: number) => {
    setOpenRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderTask = (task: any, level: number = 0) => {
    if (task.color) mainColor = task.color;
    return (
      <React.Fragment key={task.id}>
        <tr className={`level-${level}`} style={{ backgroundColor: getShade(mainColor, level) }}>
          <th style={{width: 15}}>{task.id}</th>
          <td className=''>
            <button className='btn btn-active btn-ghost hover:scale-110'>
          {task.name}
            <span>
            {task.subTasks && task.subTasks.length > 0 && (
              <button className="btn btn-xs btn-ghost" onClick={() => toggleRow(task.id)}>
                <FontAwesomeIcon icon={openRows[task.id] ? faChevronUp : faChevronDown} />
              </button>
            )}
            </span>
            </button>
          
          </td>
          <td  style={{width: 30}}>{task.start}</td>
          <td style={{width: 30}}>{task.end}</td>
          <td style={{width: 15}}>{task.duration}</td>
          <td style={{width: 30}}>{task.cost}</td>
          <td></td>
          
        </tr>
        {/* Recursively render sub-tasks if the row is open */}
        {openRows[task.id] &&
          task.subTasks &&
          task.subTasks.map((subTask: any) => renderTask(subTask, level + 1))}
      </React.Fragment>
    );
  };

  return (
    <div className="table-container w-screen" style={{ overflow: 'auto', maxHeight: '100vh' }}>
      <table className="table table-sm w-full">
        <thead>
          <tr className="sticky-header">
            <th>ID</th>
            <th>Task Name</th>
            <th>Start</th>
            <th>End</th>
            <th>Duration</th>
            <th>Cost</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>{schedule.map((task) => renderTask(task))}</tbody>
      </table>
    </div>
  );
};

export default ScheduleComponent;

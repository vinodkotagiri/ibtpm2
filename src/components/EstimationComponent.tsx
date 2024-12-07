import React, { useState, useEffect } from 'react';
import { Task, Resource } from '../constants/types';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { updateTaskField } from '../app/features/scheduleSlice';
import '../constants/resourcesNew'
const EstimationComponent: React.FC = () => {
  const [collapsed, setCollapsed] = useState<{ [key: string]: boolean }>({});
  const { tasks, currencyCode } = useAppSelector(state => state.schedule);
  const [currentTasks,setCurrentTasks]=useState([])
  
  const [nestedTasks,setNestedTasks]=useState([])
  const dispatch = useAppDispatch();
  const colorPalette = ['#f0ad4e', '#5bc0de', '#d9534f', '#5cb85c', '#337ab7'];
  
  useEffect(()=>{
    setCurrentTasks(tasks)
  },[tasks])

  function handleChange(e,id,field:string,type:string='task'){ 
    dispatch(updateTaskField({ id: id, field: field, value: e.target.valueAsNumber,type }))
  }

  // Build task tree function
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

  useEffect(()=>{
    setNestedTasks(buildTaskTree(tasks))
  },[currentTasks,])

  // Initialize collapsed state only once, when tasks data changes
  useEffect(() => {
    const initialCollapsedState: { [key: string]: boolean } = {};

    // Set initial state to collapsed for tasks with children
    nestedTasks.forEach(task => {
      if (task.children.length > 0) {
        initialCollapsedState[task.id] = true; // Collapsed by default if it has children
      }
    });

    // Set collapsed state only if it's different from the previous state
    setCollapsed(prev => {
      if (JSON.stringify(prev) !== JSON.stringify(initialCollapsedState)) {
        return { ...prev, ...initialCollapsedState };
      }
      return prev;
    });
  }, []); // Only runs once when nestedTasks changes

  const toggleCollapse = (taskId: string) => {
    setCollapsed(prev => ({
      ...prev,
      [taskId]: !prev[taskId], // Toggle collapse for the task
    }));
  };

  const getShade = (baseColor: string, level: number) => {
    const shadeFactor = 0.1 * level;
    return `rgba(${parseInt(baseColor.slice(1, 3), 16)}, ${parseInt(
      baseColor.slice(3, 5),
      16
    )}, ${parseInt(baseColor.slice(5, 7), 16)}, ${1 - shadeFactor})`;
  };

  const renderResources = (resources: Resource[], level: number, color: string) => {
    // const resourceColor = getShade(color, level + 1); // Slightly lighter shade for resources

    return resources.map(resource => (
      <tr key={resource.id} style={{backgroundColor:'#fff'}}>
        <td>{resource.id}</td>
        <td></td> {/* Empty cell for alignment */}
        <td>{resource.resource}</td>
        <td>{resource.description}</td>
        <td ><input className='w-[100px] input input-ghost input-bordered cursor-pointer disabled:bg-transparent disabled:border-none' type='number' value={resource?.length} disabled={!resource?.length} onChange={e => handleChange(e,resource.id,'length')}/></td>
        <td ><input className='w-[100px] input input-ghost input-bordered cursor-pointer disabled:bg-transparent disabled:border-none' type='number' value={resource?.breadth} disabled={!resource?.length} onChange={e => handleChange(e,resource.id,'breadth')}/></td>
        <td ><input className='w-[100px] input input-ghost input-bordered cursor-pointer disabled:bg-transparent disabled:border-none' type='number' value={resource?.thickness} disabled={!resource?.thickness} onChange={e => handleChange(e,resource.id,'thickness')}/></td>
        <td ><input className='w-[100px] input input-ghost input-bordered cursor-pointer disabled:bg-transparent disabled:border-none' type='number' value={resource?.diameter} disabled={!resource?.diameter} onChange={e => handleChange(e,resource.id,'diameter')}/></td>
        <td ><input className='w-[100px] input input-ghost input-bordered cursor-pointer disabled:bg-transparent disabled:border-none' type='number' value={resource?.noOfBars} disabled={!resource?.noOfBars} onChange={e => handleChange(e,resource.id,'noOfBars')}/></td>
        <td>{resource.area}</td>
        <td>{resource.perimeter}</td>
        <td ><input className='w-[100px] input input-ghost input-bordered cursor-pointer disabled:bg-transparent disabled:border-none' type='number' value={resource?.numbersRequired} disabled={!resource?.numbersRequired} onChange={e => handleChange(e,resource.id,'numbersRequired')}/></td>
        <td>{resource.quantity}</td>
        <td>{resource.rate}</td>
        <td>{resource.units}</td>
        {resource.totalCost ? (
          <td>{currencyCode + ' ' + resource.totalCost.toFixed(2)}</td>
        ) : (
          <td></td>
        )}
      </tr>
    ));
  };

  // Recursive function to render tasks and their children
  const renderTasks = (tasks: (Task & { children: Task[] })[], level = 0, baseColorIndex = 0) => {
    return tasks.map(task => {
      const color = getShade(colorPalette[baseColorIndex], level);
      const nextBaseColorIndex =
        task.children.length > 0 ? (baseColorIndex + 1) % colorPalette.length : baseColorIndex;

      return (
        <React.Fragment key={task.id}>
          <tr style={{ backgroundColor: task.type === 'project' ? color : '#fff' }}>
            <td>
              <span>{task.id}</span>
              {task.children.length > 0 && (
                <FontAwesomeIcon
                  icon={collapsed[task.id] ? faChevronCircleDown : faChevronCircleUp}
                  className="ml-2 cursor-pointer"
                  size="lg"
                  color="#00000095"
                  onClick={() => toggleCollapse(task.id)}
                />
              )}
            </td>
            <td>{task.name}</td>
            <td></td> {/* Empty cell for alignment */}
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td ><input className='w-[100px] input input-ghost input-bordered cursor-pointer disabled:bg-transparent disabled:border-none' type='number' value={task?.numbersRequired} disabled={!task?.numbersRequired} onChange={e => handleChange(e,task.id,'numbersRequired','project')}/></td>
            <td></td>
            <td></td>
            <td></td>
            {task.cost ? (
              <td className="font-semibold">{currencyCode + ' ' + task.cost.toFixed(2)}</td>
            ) : (
              <td></td>
            )}
          </tr>
          {/* Render resources for the task */}
          {!collapsed[task.id] && task.resources && renderResources(task.resources, level, color)}
          {/* Render children tasks recursively */}
          {!collapsed[task.id] &&
            task.children.length > 0 &&
            renderTasks(task.children, level + 1, nextBaseColorIndex)}
        </React.Fragment>
      );
    });
  };

  return (
    <div className="overflow-scroll table-container w-screen min-h-screen pb-24 relative" style={{ overflow: 'auto', maxHeight: '100vh' }}>
      <table className="table table-lg w-full overflow-auto table-zebra">
        <thead>
          <tr className="sticky-header" >
            <th>Resource ID</th>
            <th>Task Name</th>
            <th>Resource</th>
            <th>Description</th>
            <th>Length</th>
            <th>Breadth</th>  
            <th>Thickness</th>
            <th>Diameter</th>
            <th>NoOfBars</th>
            <th>Area</th>
            <th>Perimeter</th>
            <th>Numbers Required</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Units</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>{renderTasks(nestedTasks)}</tbody>
      </table>
    </div>
  );
};

export default EstimationComponent;

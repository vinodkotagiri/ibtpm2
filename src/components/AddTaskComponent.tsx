import  { useEffect, useState } from 'react'
import { Task } from '../constants/types'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { calculateStartDateAndEndDates } from '../helpers/calculations'
import toast from 'react-hot-toast'
import { addNewTask } from '../app/features/scheduleSlice'

const AddTaskComponent = () => {
  const [ data, setData ] = useState<Task>({cost:0,duration:0,end:'',id:'',name:'',parent:'',progress:0,start:'',strategy:'FS',type:'task'})
  const { tasks } = useAppSelector( state => state.schedule )
  const dispatch=useAppDispatch()
  // const [dependencies,setDependencies]=useState([])
  function handleAddTask (e) { 
    if(!data.name) {e.preventDefault(); return toast.error('Please enter name')}
    if(!data.type) { e.preventDefault();return toast.error('Please select type')}
    if(!data.parent){ e.preventDefault(); return toast.error('Please select a Parent')}
    if(!data.strategy){ e.preventDefault(); return toast.error('Please select a Strategy')}
    if(!(data.type=='task'&& data.duration)) { e.preventDefault();return toast.error('Please enter  duration')}
    const parentIndex=tasks.findIndex(task=>task.id===data.parent)
    if(parentIndex<0) { e.preventDefault();return toast.error('Parent not found')}
    const previousTaskId=parseInt(data.id.split('T')[1])
    const previousTaskIndex=tasks.findIndex(task=>task.id===`${data.parent}T${previousTaskId}`)
    let taskIndex=1
    if(previousTaskIndex>=0){
      taskIndex=parseInt(previousTaskIndex)+1
    }
    dispatch(addNewTask({newTask:data,index:taskIndex}))
    toast.success(`TasK ${data.id} added successfully to Project ${data.parent}`)
  }
  function handleSelectParentTask (id:string) {
    const childrenTasksCount = tasks.filter(task=>task.parent===id&&task.type!=='project').length
    const taskId=`${id}T${childrenTasksCount+1}`
    setData({...data,id:taskId,parent:id})
  }

  useEffect(() => {
    if (data?.id && data?.duration && data?.strategy) {
      const previousTaskId = parseInt(data.id.split('T')[1]) - 1;
      let previousTask = tasks.find(task => task.id === `${data.parent}T${previousTaskId}`);
      
      if (!previousTask) {
        previousTask = tasks.find(task => task.id === data.parent);
      }
  
      const [start, end] = calculateStartDateAndEndDates(
        previousTask?.start,
        previousTask?.end,
        data.duration,
        data.strategy
      );
  
      setData(d => ({ ...d, start, end })); // Functional update to avoid including `data` in dependencies
    }
  }, [data?.id, data?.parent, data?.duration, data?.strategy, tasks]);

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <div className='flex flex-col gap-2 items-center justify-center'>
        <h1 className='text-2xl my-4'>Add New Task</h1>
        
        <input type="text" placeholder="Task ID" className="input input-bordered w-full max-w-xs" disabled value={data?.id}/>
       
        <input type="text" placeholder="Task Name" className="input input-bordered w-full max-w-xs" onChange={e=>setData({...data,name:e.target.value})}/>
        <select className='select w-full max-w-xs input-bordered' onChange={e=>handleSelectParentTask(e.target.value)}>
          <option disabled selected>Pick Parent Task</option>
          {tasks.filter(task=>task.type==='project').map(task=>
            <option key={task.id} value={task.id}>{task.name}</option>)}
        </select>
        <div className='flex items-center justify-center w-full gap-3'>
        <label className='text-md font-semibold text-slate-600'>Start Date</label> 
        <input disabled type='date' placeholder='Start Date'value={data?.start}  className='input input-bordered w-1/2'/>
        </div>
        <div className='flex items-center justify-center w-full gap-3'>
        <label className='text-md font-semibold text-slate-600'>Finish Date</label> 
        <input disabled type='date' placeholder='Finish Date'value={data?.end}  className='input input-bordered w-1/2'/>
        </div>
        <input type="number" placeholder="Duration (Days)" className="input input-bordered w-full max-w-xs" onChange={e=>setData({...data,duration:parseInt(e.target.value)})}/>
        <select className='select w-full max-w-xs input-bordered' defaultValue={data?.strategy} onChange={e=>setData({...data,strategy:e.target.value})}>
          <option disabled selected>Select Strategy</option>
            <option  value='FS'>FF</option>
            <option  value='FS'>FS</option>
            <option  value='FS'>SF</option>
            <option  value='FS'>SS</option>
        </select>
        
        </div>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */ }

            <button className="btn" onClick={ handleAddTask }>Add</button>
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default AddTaskComponent
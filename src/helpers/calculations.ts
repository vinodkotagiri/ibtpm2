import { currencies } from '../constants/currency';
import { Strategy, Task } from '../constants/types';

export function updateTaskDates(tasks: Task[]): Task[] {
  let previousStartDate = tasks[0].start;
  let previousEndDate = calculateEndDate(tasks[0].start, tasks[0].duration);

  for (let i = 1; i < tasks.length; i++) {
    const task = tasks[i];
    const strategy = task.strategy as Strategy;

    // Update start and end dates based on the strategy
    const [start, end] = calculateStartDateAndEndDates(previousStartDate, previousEndDate, task.duration, strategy);
    task.start = start;
    task.end = end;

    // Update previous dates for the next iteration
    previousStartDate = task.start;
    previousEndDate = task.end;
  }
  // Calculate project end dates
  tasks=calculateProjectDatesAndDurations(tasks)
  return tasks;
}

function calculateEndDate(startDate: string, durationDays: number): string {
  const start = new Date(startDate);
  start.setDate(start.getDate() + durationDays);
  return start.toISOString();
}

export function calculateStartDateAndEndDates(
  previousStart: string,
  previousEnd: string,
  duration: number,
  strategy: Strategy
): [string, string] {
  const start = new Date(previousStart);
  const end = new Date(previousEnd);

  let startDate: Date;
  let endDate: Date;

  switch (strategy) {
    case 'FF':
      // Finish-to-Finish: End date of current task matches the end date of the previous task
      endDate = end;
      startDate = new Date(end);
      startDate.setDate(end.getDate() - duration);
      break;

    case 'FS':
      // Finish-to-Start: Start date of current task matches the end date of the previous task
      startDate = end;
      endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + duration);
      break;

    case 'SS':
      // Start-to-Start: Start date of current task matches the start date of the previous task
      startDate = start;
      endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + duration);
      break;

    case 'SF':
      // Start-to-Finish: End date of current task matches the start date of the previous task
      endDate = start;
      startDate = new Date(endDate);
      startDate.setDate(endDate.getDate() - duration);
      break;

    default:
      throw new Error(`Invalid strategy: ${strategy}`);
  }
  return [formatDate(startDate), formatDate(endDate)];
}

export function formatDate(date:Date):string {
  if (!date) return ''; // Handle null or undefined
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

function calculateProjectDatesAndDurations(tasks:Task[]):Task[]{
  for(let i=tasks.length-1;i>=0;i--){
    if(tasks[i].type === 'project'){
      const childTasks=tasks.filter(t=>t.parent===tasks[i].id)
      if(childTasks.length){
        let endDate=new Date(childTasks[0].end)
        for(const childTask of childTasks){
          const currentEndDate=new Date(childTask.end)
          if((currentEndDate)>endDate){
            endDate=currentEndDate
          }
      }
      tasks[i].end=formatDate(endDate)
      tasks[i].duration=(endDate.getTime()-new Date(tasks[i].start).getTime())/(1000*60*60*24)
    }
  }
  }

  return tasks
}

export function calculateTotalResourceCost(tasks: Task[]): Task[]{
  for(const task of tasks){
    if(task.type=='task' && task?.resources?.length){
      task.resources.forEach(resource=>resource.totalCost=resource.rate*resource.quantity)
      task.cost=task.resources.reduce((acc,curr)=>acc+curr.totalCost,0)      
    }
  }
  for(let i=tasks.length-1;i>=0;i--){
    if(tasks[i].type === 'project'){
      const childTasks=tasks.filter(t=>t.parent===tasks[i].id)
      if(childTasks.length){
        let totalCost=0
        for(const childTask of childTasks){
          totalCost+=childTask.cost
        }
        if(tasks[i].numbersRequired!=undefined){
          if(tasks[i].numbersRequired>0){
            totalCost=totalCost*tasks[i].numbersRequired
          }
        }
        tasks[i].cost=totalCost
      }
    }
  }
  return tasks
}


export const getCurrencySymbol = (currencyCode: string): string => {
  return currencies[currencyCode] || currencyCode;
};

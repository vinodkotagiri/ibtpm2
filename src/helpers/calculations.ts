// Helper function to calculate end date based on start date and duration
function calculateEndDate ( startDate, durationDays ) {
  const start = new Date( startDate );
  start.setDate( start.getDate() + durationDays );
  console.log('start',start)
  return start;
}
export function formatDate(date) {
  if (!date) return ''; // Handle null or undefined
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}
// Update task dates based on strategy
export function updateTaskDates ( tasks, parentStartDate = null ) {
  if ( !tasks || tasks.length === 0 ) return;

  // Create a mapping of tasks by ID for easier access
  const taskMap = Object.fromEntries( tasks.map( task => [ task.id, task ] ) );

  // Initialize the end date for parent tasks
  let previousEndDate = parentStartDate ? new Date( parentStartDate ) : null;

  tasks.forEach( task => {
    // If a task is a parent, ensure it starts with the correct date
    if ( task.parent ) {
      const parentTask = taskMap[ task.parent ];
      if ( parentTask && !task.start ) {
        task.start = previousEndDate ? new Date( previousEndDate ) : new Date();
      }
    } else if ( !task.start ) {
      // If no start date and it's a root task, set to the current date
      task.start = new Date();
    } else {
      // Ensure start is a valid date
      if ( typeof task.start === 'string' && task.start ) {
        task.start = new Date( task.start );
      }
    }

    // Check if start date is valid
    if ( isNaN( task.start.getTime() ) ) {
      console.error( `Invalid start date for Task ID: ${ task.id }` );
      return; // Skip this task if start date is invalid
    }

    // Calculate end date based on strategy
    switch ( task.strategy ) {
      case 'FF':
        // Finish-to-Finish: start date of current task is the end date of the previous task
        if ( previousEndDate ) {
          task.start = new Date( previousEndDate );
        }
        break;
      case 'FS':
        // Finish-to-Start: start date of current task is the end date of the previous task
        if ( previousEndDate ) {
          task.start = new Date( previousEndDate );
        }
        break;
      case 'SS':
        // Start-to-Start: the start date is equal to the start date of the previous task
        if ( previousEndDate ) {
          task.start = new Date( previousEndDate );
        }
        break;
      case 'SF':
        // Start-to-Finish: the end date of the current task is the start date of the previous task
        if ( previousEndDate ) {
          task.end = new Date( previousEndDate );
          task.start = calculateEndDate( task.end, -task.duration );
        }
        break;
      default:
        break;
    }

    // Calculate end date based on start date and duration
    task.end = calculateEndDate( task.start, task.duration );

    // Log task details for debugging
    console.log( `Task ID: ${ task.id }, Start: ${ task.start.toLocaleDateString() }, End: ${ task.end.toLocaleDateString() }, Duration: ${ task.duration }` );

    // Update previous end date for the next task
    previousEndDate = task.end;

    // Handle nested subtasks with strategies
    if ( task.subTasks && task.subTasks.length > 0 ) {
      updateTaskDates( task.subTasks, task.start ); // Recursive call for nested subtasks
    }
    task.start=formatDate(task.start)
    task.end=formatDate(task.end)
  } );

  // Update the end dates and durations of the projects
  tasks = updateProjectsStats( tasks )

  return tasks;
}

function updateProjectsStats ( tasks ) {
  for(let i=tasks.length-1;i>=0;i--) {
    
    if(tasks[i].type === 'project') {
      const childTasks=tasks.filter(t=>t.parent===tasks[i].id)
      const childTaskIds=childTasks.map(t=>t.id)
      let duration=0;
      
      for(let i=childTasks.length-1;i>=0;i--) {
        duration+=childTasks[i].duration
      }

      tasks[i].duration=duration
      tasks[i].start=formatDate(calculateEndDate(tasks[i].start,duration))
      console.log('Parent: ',tasks[i].id,'Children:',childTaskIds,'duration:',duration)
    }
  }

  return tasks
}
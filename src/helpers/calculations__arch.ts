
// Helper function to calculate end date based on start date and duration
function calculateEndDate(startDate, durationDays) {
    const start = new Date(startDate);
    start.setDate(start.getDate() + durationDays);
    return start;
  }
  
  // Update task dates based on the first task's start date
  function updateTaskDates(tasks) {
    // Base case: if there are no tasks, return
    if (!tasks || tasks.length === 0) return;
  
    // Create a mapping of tasks by ID for easier access
    const taskMap = Object.fromEntries(tasks.map(task => [task.id, task]));
  
    // Initialize the start date of the first task
    const firstTask = tasks.find(task => !task.parent);
    if (!firstTask) return; // Ensure there's at least one root task
  
    // Set the start date for the first task
    const startDate = new Date(firstTask.start);
    firstTask.start = startDate;
    firstTask.end = calculateEndDate(startDate, firstTask.duration);
  
    // Track the end date of the previous task to determine the start date for subsequent tasks
    let previousEndDate = firstTask.end;
  
    tasks=tasks.map(task => {
      // Skip the first task since it's already initialized
      if (task.id === firstTask.id) return;
  
      // If the task has a parent, find its end date to determine the start date
      if (task.parent) {
        const parentTask = taskMap[task.parent];
        if (parentTask) {
          task.start = previousEndDate; // Start after the previous task's end
          task.end = calculateEndDate(task.start, task.duration);
          previousEndDate = task.end; // Update previous end date for the next task
        }
      } else {
        // If no parent and it's not the first task, set the start date to the previous end date
        task.start = previousEndDate;
        task.end = calculateEndDate(task.start, task.duration);
        previousEndDate = task.end; // Update previous end date for the next task
      }
  
      // Log task details for debugging
      console.log(`Task ID: ${task.id}, Start: ${task.start.toLocaleDateString()}, End: ${task.end.toLocaleDateString()}, Duration: ${task.duration}`);
    return task
    });
return tasks
  }
export {updateTaskDates}    
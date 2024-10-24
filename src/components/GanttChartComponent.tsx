import React from 'react'
import { Chart } from 'react-google-charts';
import schedule from '../constants/schedule';
const GanttChartComponent = () => {
    // Transform schedule data for the Gantt chart
    const transformScheduleData = (schedule) => {
      const data = [['Task ID', 'Task Name', 'Start Date', 'End Date', 'Duration', 'Percent Complete', 'Dependencies']];
  
      schedule.forEach(task => {
        // Parse dates
        const startDate = new Date(task.start);
        const endDate = new Date(task.end);
  
        // Push main task
        data.push([
          (task.id).toString(),
          task.name,
          startDate,
          endDate,
          null,
          100,
          task?.dependencies?.join(',')??null // Join dependencies
        ]);
  
        // Process subtasks
        if (task.subTasks && task.subTasks.length) {
          task.subTasks.forEach(subTask => {
            const subTaskStartDate = new Date(subTask.start);
            const subTaskEndDate = new Date(subTask.end);
            
            data.push([
              subTask.id,
              subTask.name,
              subTaskStartDate,
              subTaskEndDate,
              null,
              100,
              subTask?.dependencies?.join(',')??null // Join dependencies
            ]);
  
            // Process nested subTasks
            if (subTask.subTasks && subTask.subTasks.length) {
              subTask.subTasks.forEach(nestedTask => {
                const nestedStartDate = new Date(nestedTask.start);
                const nestedEndDate = new Date(nestedTask.end);
                data.push([
                  nestedTask.id,
                  nestedTask.name,
                  nestedStartDate,
                  nestedEndDate,
                  null,
                  100,
                  nestedTask?.dependencies?.join(',')??null // Join dependencies
                ]);
              });
            }
          });
        }
      });
  
      return data;
    };
  
    const data = transformScheduleData(schedule);
  
    const options = {
      height: 400,
      gantt: {
        trackHeight: 30,
        defaultStartDate: new Date(2022, 11, 12), // Example default start date
      },
    };
  
    return (
      <div>
        <h2>Project Gantt Chart</h2>
        <Chart
          chartType="Gantt"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    );
  };
  
  export default GanttChartComponent;
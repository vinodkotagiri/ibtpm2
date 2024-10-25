import React from 'react'
import { Chart } from 'react-google-charts';
import schedule from '../constants/schedule';
import { Gantt, ViewMode } from 'gantt-task-react';
const GanttChartComponent = () => {
  // Function to transform schedule data to match gantt-task-react format
  const transformScheduleToTasks = (schedule) => {
    const tasks = [];

    const addTask = (task) => {
      const transformedTask = {
        id: `${task.id}`,
        name: task.name,
        start: new Date(task.start),
        end: new Date(task.end),
        type: "task",
        progress: 100,
        dependencies: task.dependencies ? task.dependencies.map(dep => `${dep}`) : [],
        styles: { backgroundColor: task.color || "#c06c84" }
      };
      tasks.push(transformedTask);

      // Process subTasks
      if (task.subTasks && task.subTasks.length) {
        task.subTasks.forEach(addTask);
      }
    };

    schedule.forEach(addTask);

    return tasks;
  };
  const tasks = transformScheduleToTasks(schedule);
  return (
    <div>
      <h2>Project Gantt Chart</h2>
      <Gantt
        tasks={tasks}
        viewMode={ViewMode.Month}
        onDateChange={(task) => console.log("Date changed for task:", task)}
        onProgressChange={(task) => console.log("Progress changed for task:", task)}
        onDoubleClick={(task) => console.log("Double-clicked on task:", task)}
      />
    </div>
  )
};

export default GanttChartComponent;
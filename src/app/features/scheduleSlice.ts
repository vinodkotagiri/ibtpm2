import { createSlice } from "@reduxjs/toolkit";
import schedule from "../../constants/schedule";
import { calculateTotalResourceCost, getCurrencySymbol, updateProjectProgress, updateTaskDates } from "../../helpers/calculations";
import { CurrencyUnits, DrawingData, Task } from "../../constants/types";
import getResources from "../../constants/resources";
import { updateTasksFromDrawingData } from "../../helpers/updateTasksFromDrawingData";

interface ScheduleState {
  tasks:Task[],
  totalTasks:number
  totalBudget:number
  currency:CurrencyUnits
  currencyCode:string
  drawingData:DrawingData
  units:'imperial'|'SI',
  chartsData:Object
}
const initialState: ScheduleState = {
  tasks:[...schedule],
  totalTasks:0,
  totalBudget:0,
  currency:'INR',
  currencyCode:getCurrencySymbol('INR'),
  drawingData:
    {
      innerWallThickness: 0,
      floorHeight: 0,
      plotLength: 0,
      plotWidth: 0,
      plotArea: 0,
      excavationDepth:0,
      builtupLength: 0,
      builtupWidth: 0,
      builtupArea: 0,
      groundFloor: {
        length: 0,
        width: 0,
        area:0,
        rooms:[]
      },
      firstFloor: {
        length: 0,
        width: 0,
        area:0,
        rooms:[]
      },
      secondFloor: {
        length: 0,
        width: 0,
        area:0,
        rooms:[]
      },
      thirdFloor: {
        length: 0,
        width: 0,
        area:0,
        rooms:[]
      },
      fourthFloor: {
        length: 0,
        width: 0,
        area:0,
        rooms:[]
      },
      fifthFloor: {
        length: 0,
        width: 0,
        area:0,
        rooms:[]
      }
  },
  units:'imperial',
  chartsData:{
    totalTasks:0,
    completed:0,
    totalBudget:0,
    totalEstimate:0,
  },
}
const scheduleSlice = createSlice( {
  initialState,
  name: "schedule",
  reducers: {
    updateTaskStartDate ( state, action ) {
      const { id, newDate } = action.payload
      state.tasks=state.tasks.map((task)=>{
        if(task.id===id){
          task.start=newDate
        }
        return task
      })
     // Recalculate the entire task schedule based on updated start date)
     state.tasks = updateTaskDates(state.tasks);
     state.tasks=calculateTotalResourceCost(state.tasks)
    },
    addNewTask(state, action) {
      const {newTask,index} = action.payload
      state.tasks.splice(index,0,newTask)
    },
    setCurrency(state,action){
      state.currency=action.payload
      state.currencyCode=getCurrencySymbol(action.payload)
    },
    updateAllResources(state){
      state.tasks=state.tasks.map(task=>{
        if(task.resources?.length){
          task.resources=getResources(task.id,state.drawingData,task.resources)
        }else{
          task.resources=getResources(task.id,state.drawingData)
        }
        return task
      })
      const drawingData=state.drawingData
      state.tasks=updateTasksFromDrawingData(state.tasks,drawingData)
      state.tasks=calculateTotalResourceCost(state.tasks)
      state.totalTasks=state.tasks.filter(task=>task.type=='task').length
    },
    updateDrawingData(state,action){ 
      const {drawingData}=action.payload
      state.drawingData=drawingData
       state.tasks=state.tasks.map(task=>{
        if(task.resources?.length){
          task.resources=getResources(task.id,state.drawingData,task.resources)
        }else{
          task.resources=getResources(task.id,state.drawingData)
        }
        return task
      })
      state.tasks=calculateTotalResourceCost(state.tasks)
      
    },
    setUnits(state,action){
      state.units=action.payload
      updateDrawingData({drawingData:state.drawingData})
    },


updateTaskField(state, action) {
  const { id, field, value, type } = action.payload;
  
  if (field === 'batchUpdate') {
    // Handle batch updates for structural elements
    const { selectedElementId, dimensions, elementType, rate } = value;
    
    // Find the task to update
    const findTaskById = (tasks, taskId) => {
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === taskId) {
          return tasks[i];
        }
        if (tasks[i].children) {
          const childTask = findTaskById(tasks[i].children, taskId);
          if (childTask) return childTask;
        }
      }
      return null;
    };
    
    const task = findTaskById(state.tasks, id);
    
    if (task) {
      // Update task properties
      task.selectedElementId = selectedElementId;
      task.dimensions = dimensions;
      task.elementType = elementType;
      task.rate = rate;
      
      // Special case for plinth beams - update length from drawing data
      if (task.id.startsWith('PT1')) {
        const isLengthPlinth = task.id.includes('L');
        const isWidthPlinth = task.id.includes('B');
        
        if (isLengthPlinth) {
          dimensions.length = state.drawingData.builtupLength / 2;
        } else if (isWidthPlinth) {
          dimensions.length = state.drawingData.builtupWidth / 2;
        }
      }
      
      // Calculate volume
      const volume = dimensions.length * dimensions.breadth * dimensions.thickness;
      task.volume = volume;
      
      // Calculate element cost
      const elementCost = volume * rate;
      task.elementCost = elementCost;
      
      // Set task name if specified (for foundations)
      if (value.selectedName) {
        task.selectedName = value.selectedName;
      }
      
      // Update resources based on element type
      if (task.resources) {
        task.resources = task.resources.map(resource => {
          // Deep copy the resource
          const updatedResource = { ...resource };
          
          // Set dimensions based on resource type
          if (resource.resource?.toLowerCase().includes('concrete') || 
              resource.resource?.toLowerCase().includes('pcc')) {
            // For concrete resources, use the element dimensions
            updatedResource.length = dimensions.length;
            updatedResource.breadth = dimensions.breadth;
            updatedResource.thickness = dimensions.thickness;
            
            // Calculate concrete volume
            const volume = dimensions.length * dimensions.breadth * dimensions.thickness;
            updatedResource.quantity = volume;
            updatedResource.totalCost = volume * resource.rate;
          }
          else if (resource.resource?.toLowerCase().includes('steel')) {
            // For steel resources
            if (resource.resource?.toLowerCase().includes('dia8')) {
              // Stirrups calculation
              const perimeter = 2 * (dimensions.length + dimensions.breadth);
              updatedResource.perimeter = perimeter;
              
              // Calculate weight per meter (formula: π * d² / 4 * 7850)
              const diameter = resource.diameter || 8; // Default to 8mm if not specified
              const weightPerMeter = (Math.PI * Math.pow(diameter/1000, 2) / 4) * 7850;
              
              // Calculate total weight and cost
              const totalWeight = weightPerMeter * perimeter * (resource.noOfBars || 1);
              updatedResource.totalCost = totalWeight * resource.rate;
            } else {
              // Main bars calculation
              updatedResource.length = dimensions.length;
              
              // Calculate weight per meter
              const diameter = resource.diameter || 12; // Default to 12mm if not specified
              const weightPerMeter = (Math.PI * Math.pow(diameter/1000, 2) / 4) * 7850;
              
              // Calculate total weight and cost
              const totalWeight = weightPerMeter * dimensions.length * (resource.noOfBars || 1);
              updatedResource.totalCost = totalWeight * resource.rate;
            }
          }
          else if (resource.resource?.toLowerCase().includes('formwork')) {
            // Formwork calculation
            updatedResource.length = dimensions.length;
            updatedResource.breadth = dimensions.breadth;
            updatedResource.thickness = dimensions.thickness;
            
            // Calculate formwork area (perimeter * height)
            const perimeter = 2 * (dimensions.length + dimensions.breadth);
            updatedResource.perimeter = perimeter;
            
            // For foundations, formwork area is perimeter * thickness
            const formworkArea = perimeter * dimensions.thickness;
            updatedResource.area = formworkArea;
            updatedResource.totalCost = formworkArea * resource.rate;
          }
          else if (resource.resource?.toLowerCase().includes('mason') || 
                  resource.resource?.toLowerCase().includes('helper') ||
                  resource.resource?.toLowerCase().includes('labor')) {
            // For labor resources, keep the cost as is
            updatedResource.totalCost = resource.rate * (resource.quantity || 1);
          }
          
          return updatedResource;
        });
        
        // Calculate the total resource cost
        const resourcesCost = task.resources.reduce((sum, resource) => {
          return sum + (resource.totalCost || 0);
        }, 0);
        
        // Apply numbers required multiplier
        task.totalCost = resourcesCost * (task.numbersRequired || 1);
      }
      
      // Update child tasks if needed (e.g., for foundations)
      if (task.children) {
        task.children = task.children.map(child => {
          // Update child task properties based on parent
          child.selectedElementId = selectedElementId;
          child.dimensions = { ...dimensions };
          child.elementType = elementType;
          child.rate = rate;
          
          // Update child resources if any
          if (child.resources) {
            child.resources = child.resources.map(resource => {
              // Deep copy the resource
              const updatedResource = { ...resource };
              
              // Set dimensions based on resource type, just like for parent
              if (resource.resource?.toLowerCase().includes('concrete') || 
                  resource.resource?.toLowerCase().includes('pcc')) {
                // For concrete resources, use the element dimensions
                updatedResource.length = dimensions.length;
                updatedResource.breadth = dimensions.breadth;
                updatedResource.thickness = dimensions.thickness;
                
                // Calculate concrete volume
                const volume = dimensions.length * dimensions.breadth * dimensions.thickness;
                updatedResource.quantity = volume;
                updatedResource.totalCost = volume * resource.rate;
              }
              else if (resource.resource?.toLowerCase().includes('steel')) {
                // For steel resources
                if (resource.resource?.toLowerCase().includes('dia8') || resource.resource?.toLowerCase().includes('stirrup')) {
                  // Stirrups calculation
                  const perimeter = 2 * (dimensions.length + dimensions.breadth);
                  updatedResource.perimeter = perimeter;
                  
                  // Calculate weight per meter (formula: π * d² / 4 * 7850)
                  const diameter = resource.diameter || 8; // Default to 8mm if not specified
                  const weightPerMeter = (Math.PI * Math.pow(diameter/1000, 2) / 4) * 7850;
                  
                  // Calculate total weight and cost
                  const totalWeight = weightPerMeter * perimeter * (resource.noOfBars || 1);
                  updatedResource.totalCost = totalWeight * resource.rate;
                } else {
                  // Main bars calculation
                  updatedResource.length = dimensions.length;
                  
                  // Calculate weight per meter
                  const diameter = resource.diameter || 12; // Default to 12mm if not specified
                  const weightPerMeter = (Math.PI * Math.pow(diameter/1000, 2) / 4) * 7850;
                  
                  // Calculate total weight and cost
                  const totalWeight = weightPerMeter * dimensions.length * (resource.noOfBars || 1);
                  updatedResource.totalCost = totalWeight * resource.rate;
                }
              }
              else if (resource.resource?.toLowerCase().includes('formwork')) {
                // Formwork calculation
                updatedResource.length = dimensions.length;
                updatedResource.breadth = dimensions.breadth;
                updatedResource.thickness = dimensions.thickness;
                
                // Calculate formwork area (perimeter * height)
                const perimeter = 2 * (dimensions.length + dimensions.breadth);
                updatedResource.perimeter = perimeter;
                
                // For foundations, formwork area is perimeter * thickness
                const formworkArea = perimeter * dimensions.thickness;
                updatedResource.area = formworkArea;
                updatedResource.totalCost = formworkArea * resource.rate;
              }
              else if (resource.resource?.toLowerCase().includes('mason') || 
                      resource.resource?.toLowerCase().includes('helper') ||
                      resource.resource?.toLowerCase().includes('labor')) {
                // For labor resources, keep the cost as is
                updatedResource.totalCost = resource.rate * (resource.quantity || 1);
              }
              
              return updatedResource;
            });
            
            // Calculate the total resource cost for child
            const childResourcesCost = child.resources.reduce((sum, resource) => {
              return sum + (resource.totalCost || 0);
            }, 0);
            
            // Apply numbers required multiplier for child
            child.totalCost = childResourcesCost * (child.numbersRequired || 1);
          }
          
          return child;
        });
      }
    }
    
    // Recalculate all costs after the update
    state.tasks = calculateTotalResourceCost(state.tasks);
  } else {
    // Handle individual field updates
    state.tasks = state.tasks.map((task:any) => {
      if (task.id === id && type === 'project') {
        task[field] = value;
      }
      
      // Update resource fields and recalculate costs
      if (task.resources?.length) {
        task.resources = task.resources.map(resource => {
          if (resource.id === id) {
            // Create updated resource with the new field value
            const updatedResource = { ...resource, [field]: value };
            
            // Recalculate resource cost if we have dimensions
            if (task.dimensions) {
              // Determine calculation based on resource type
              if (resource.resource?.toLowerCase().includes('concrete') || 
                  resource.resource?.toLowerCase().includes('pcc')) {
                // Concrete volume calculation
                const volume = task.dimensions.length * task.dimensions.breadth * task.dimensions.thickness;
                updatedResource.totalCost = volume * updatedResource.rate;
              }
              else if (resource.resource?.toLowerCase().includes('steel')) {
                // Steel calculation
                if (resource.resource?.toLowerCase().includes('dia8') || resource.resource?.toLowerCase().includes('stirrup')) {
                  // Stirrups calculation
                  const perimeter = 2 * (task.dimensions.length + task.dimensions.breadth);
                  const diameter = updatedResource.diameter || 8;
                  const weightPerMeter = (Math.PI * Math.pow(diameter/1000, 2) / 4) * 7850;
                  const totalWeight = weightPerMeter * perimeter * (updatedResource.noOfBars || 1);
                  updatedResource.totalCost = totalWeight * updatedResource.rate;
                } else {
                  // Main bars calculation
                  const diameter = updatedResource.diameter || 12;
                  const weightPerMeter = (Math.PI * Math.pow(diameter/1000, 2) / 4) * 7850;
                  const totalWeight = weightPerMeter * task.dimensions.length * (updatedResource.noOfBars || 1);
                  updatedResource.totalCost = totalWeight * updatedResource.rate;
                }
              }
              else if (resource.resource?.toLowerCase().includes('formwork')) {
                // Formwork calculation
                const perimeter = 2 * (task.dimensions.length + task.dimensions.breadth);
                const formworkArea = perimeter * task.dimensions.thickness;
                updatedResource.totalCost = formworkArea * updatedResource.rate;
              }
              else {
                // Generic calculation for other resources
                updatedResource.totalCost = updatedResource.rate * (updatedResource.quantity || 1);
              }
            }
            
            return updatedResource;
          }
          return resource;
        });
        
        // Recalculate task total cost from resources
        const resourceTotal = task.resources.reduce((sum, r) => sum + (r.totalCost || 0), 0);
        task.totalCost = resourceTotal * (task.numbersRequired || 1);
      }
      
      // Process child tasks recursively
      if (task.children?.length) {
        task.children = task.children.map(childTask => {
          // Apply the same resource update logic to child tasks if they have the target resource
          if (childTask.resources?.length) {
            childTask.resources = childTask.resources.map(resource => {
              if (resource.id === id) {
                // Create updated resource with the new field value
                const updatedResource = { ...resource, [field]: value };
                
                // Recalculate resource cost if we have dimensions
                if (childTask.dimensions) {
                  // Determine calculation based on resource type
                  if (resource.resource?.toLowerCase().includes('concrete') || 
                      resource.resource?.toLowerCase().includes('pcc')) {
                    // Concrete volume calculation
                    const volume = childTask.dimensions.length * childTask.dimensions.breadth * childTask.dimensions.thickness;
                    updatedResource.totalCost = volume * updatedResource.rate;
                  }
                  else if (resource.resource?.toLowerCase().includes('steel')) {
                    // Steel calculation
                    if (resource.resource?.toLowerCase().includes('dia8') || resource.resource?.toLowerCase().includes('stirrup')) {
                      // Stirrups calculation
                      const perimeter = 2 * (childTask.dimensions.length + childTask.dimensions.breadth);
                      const diameter = updatedResource.diameter || 8;
                      const weightPerMeter = (Math.PI * Math.pow(diameter/1000, 2) / 4) * 7850;
                      const totalWeight = weightPerMeter * perimeter * (updatedResource.noOfBars || 1);
                      updatedResource.totalCost = totalWeight * updatedResource.rate;
                    } else {
                      // Main bars calculation
                      const diameter = updatedResource.diameter || 12;
                      const weightPerMeter = (Math.PI * Math.pow(diameter/1000, 2) / 4) * 7850;
                      const totalWeight = weightPerMeter * childTask.dimensions.length * (updatedResource.noOfBars || 1);
                      updatedResource.totalCost = totalWeight * updatedResource.rate;
                    }
                  }
                  else if (resource.resource?.toLowerCase().includes('formwork')) {
                    // Formwork calculation
                    const perimeter = 2 * (childTask.dimensions.length + childTask.dimensions.breadth);
                    const formworkArea = perimeter * childTask.dimensions.thickness;
                    updatedResource.totalCost = formworkArea * updatedResource.rate;
                  }
                  else {
                    // Generic calculation for other resources
                    updatedResource.totalCost = updatedResource.rate * (updatedResource.quantity || 1);
                  }
                }
                
                return updatedResource;
              }
              return resource;
            });
            
            // Recalculate child task total cost from resources
            const childResourceTotal = childTask.resources.reduce((sum, r) => sum + (r.totalCost || 0), 0);
            childTask.totalCost = childResourceTotal * (childTask.numbersRequired || 1);
          }
          
          return childTask;
        });
      }
      
      return task;
    });
    
    // Update resources with drawing data
    state.tasks = state.tasks.map(task => {
      if (task.resources?.length) {
        task.resources = getResources(task.id, state.drawingData, task.resources);
      } else {
        task.resources = getResources(task.id, state.drawingData);
      }
      return task;
    });
    
    // Recalculate all costs
    state.tasks = calculateTotalResourceCost(state.tasks);
  }
},
    updateTasksDuration(state,action){
      const {id,duration}=action.payload
      state.tasks=state.tasks.map(task=>{
        if(task.id===id){
          task.duration=duration
        }
        return task
      })
      state.tasks=updateTaskDates(state.tasks,true)
      state.tasks=calculateTotalResourceCost(state.tasks)
    },
    updateTaskFromDrawing(state){
      const drawingData=state.drawingData
      state.tasks=updateTasksFromDrawingData(state.tasks,drawingData)
    },
    updateTotalTasksCount(state){
      state.totalTasks=state.tasks.filter(task=>task.type=='task').length
    },
    updateTaskProgress(state,action){
      const {id,progress}=action.payload
      state.tasks=state.tasks.map(task=>{
        if(task.id===id){
          task.progress=progress
        }
        return task
      })
      state.tasks=updateProjectProgress(state.tasks)
    },
    updateEstimateRestore(state,action){
      const {Data}=action.payload
      return Data
    }
  }
} )

export const {updateTaskProgress,updateEstimateRestore,updateTasksDuration,updateTaskFromDrawing,updateTaskStartDate,addNewTask,setCurrency,updateAllResources,updateDrawingData,setUnits,updateTaskField} = scheduleSlice.actions
export default scheduleSlice.reducer
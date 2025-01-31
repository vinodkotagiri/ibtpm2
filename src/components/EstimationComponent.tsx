import React, { useState, useEffect, useCallback } from "react";
import {
  Layout,
  Card,
  Collapse,
  Table,
  InputNumber,
  Space,
  Tag,
  Typography,
  Button,
  Spin,
  Checkbox,
  Select,
} from "antd";
import {
  CaretDownOutlined,
  CaretRightOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { updateTaskField } from "../app/features/scheduleSlice";
import { Task, Resource } from "../constants/types";
import "./estimation.css";
import { ConcreteRates } from "../constants/rates";
import ElementTypeModal from "./ElementSelectionModal";

const { Text } = Typography;
const { Panel } = Collapse;
const { Content } = Layout;
const { Option } = Select;

interface ElementDimensions {
  length: number;
  breadth: number;
  thickness: number;
}

interface StructuralElement {
  id: string;
  name: string;
  dimensions: ElementDimensions;
  rate: number;
  category: string;
}

// Configuration for all structural elements
const structuralElements: Record<string, any[]> = {
  foundations: [
    {
      id: 'F01',
      name: 'Type 1: 1.2x1.2x0.3',
      dimensions: { length: 1.2, breadth: 1.2, thickness: 0.3 },
      rate: ConcreteRates.M20.Cum,
      category: 'Foundation'
    },
    {
      id: 'F02', 
      name: 'Type 2: 1.5x1.5x0.3',
      dimensions: { length: 1.5, breadth: 1.5, thickness: 0.3 },
      rate: ConcreteRates.M20.Cum,
      category: 'Foundation'
    },
    {
      id: 'F03',
      name: 'Type 3: 1.8x1.8x0.4',
      dimensions: { length: 1.8, breadth: 1.8, thickness: 0.4 },
      rate: ConcreteRates.M20.Cum,
      category: 'Foundation'
    },
    {
      id: 'F04',
      name: 'Type 4: 2.0x2.0x0.4',
      dimensions: { length: 2.0, breadth: 2.0, thickness: 0.4 },
      rate: ConcreteRates.M20.Cum,
      category: 'Foundation'
    },
    {
      id: 'F05',
      name: 'Type 5: 2.5x2.5x0.4',
      dimensions: { length: 2.5, breadth: 2.5, thickness: 0.4 },
      rate: ConcreteRates.M20.Cum,
      category: 'Foundation'
    },
    {
      id: 'F06',
      name: 'Type 6: 3.0x3.0x0.5',
      dimensions: { length: 3.0, breadth: 3.0, thickness: 0.5 },
      rate: ConcreteRates.M20.Cum,
      category: 'Foundation'
    }
  ],
  columns: [
    {
      id: 'GCT1',
      name: 'Type 1: 3x0.23x0.23',
      dimensions: { length: 3, breadth: 0.23, thickness: 0.23 },
      rate: ConcreteRates.M25.Cum,
      category: 'Column'
    },
    {
      id: 'GCT2',
      name: 'Type 2: 3x0.3x0.3',
      dimensions: { length: 3, breadth: 0.3, thickness: 0.3 },
      rate: ConcreteRates.M25.Cum,
      category: 'Column'
    },
    {
      id: 'GCT3', 
      name: 'Type 3: 3x0.3x0.45',
      dimensions: { length: 3, breadth: 0.3, thickness: 0.45 },
      rate: ConcreteRates.M25.Cum,
      category: 'Column'
    }
  ],
  beams: [
    {
      id: 'L1BT1',
      name: 'Type 1: 3x0.23x0.45',
      dimensions: { length: 3, breadth: 0.23, thickness: 0.45 },
      rate: ConcreteRates.M25.Cum,
      category: 'Beam'
    },
    {
      id: 'L1BT2',
      name: 'Type 2: 3x0.3x0.6',
      dimensions: { length: 3, breadth: 0.3, thickness: 0.6 },
      rate: ConcreteRates.M25.Cum,
      category: 'Beam'  
    }
  ],
  plinthBeamsLength: [
    {
      id: 'PBL1',
      name: 'Type 1: L/2x0.23x0.23',
      dimensions: { length: 0, breadth: 0.23, thickness: 0.23 },
      rate: ConcreteRates.M20.Cum,
      category: 'Plinth Beam'
    },
    {
      id: 'PBL2',  
      name: 'Type 2: L/2x0.26x0.26',
      dimensions: { length: 0, breadth: 0.26, thickness: 0.26 },
      rate: ConcreteRates.M20.Cum,
      category: 'Plinth Beam'
    },
    {
      id: 'PBL3',
      name: 'Type 3: L/2x0.30x0.30', 
      dimensions: { length: 0, breadth: 0.30, thickness: 0.30 },
      rate: ConcreteRates.M20.Cum,
      category: 'Plinth Beam'
    },
    {
      id: 'PBL4',
      name: 'Type 4: L/2x0.30x0.45',
      dimensions: { length: 0, breadth: 0.30, thickness: 0.45 },
      rate: ConcreteRates.M20.Cum,
      category: 'Plinth Beam'
    }
  ],
  plinthBeamsBreadth: [
    {
      id: 'PBB1',
      name: 'Type 1: B/2x0.23x0.23',
      dimensions: { length: 0, breadth: 0.23, thickness: 0.23 },
      rate: ConcreteRates.M20.Cum,
      category: 'Plinth Beam'
    },
    {
      id: 'PBB2',
      name: 'Type 2: B/2x0.26x0.26', 
      dimensions: { length: 0, breadth: 0.26, thickness: 0.26 },
      rate: ConcreteRates.M20.Cum,
      category: 'Plinth Beam'
    },
    {
      id: 'PBB3',
      name: 'Type 3: B/2x0.30x0.30',
      dimensions: { length: 0, breadth: 0.30, thickness: 0.30 },
      rate: ConcreteRates.M20.Cum,
      category: 'Plinth Beam'
    },
    {
      id: 'PBB4', 
      name: 'Type 4: B/2x0.30x0.45',
      dimensions: { length: 0, breadth: 0.30, thickness: 0.45 },
      rate: ConcreteRates.M20.Cum,
      category: 'Plinth Beam'
    }
  ],
  overheadTank: [
    {
      id: 'OTRC',
      name: 'Overhead Tank Reinforced Concrete',
      dimensions: { length: 0, breadth: 0, thickness: 0 },
      rate: ConcreteRates.M25.Cum,
      category: 'Overhead Tank'
    },
    {
      id: 'OTBW', 
      name: 'Overhead Tank Brick Work',
      dimensions: { length: 0, breadth: 0, thickness: 0 },
      rate: ConcreteRates.M20.Cum,
      category: 'Overhead Tank'
    }
  ]
 };


const EstimationComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { tasks, currencyCode } = useAppSelector((state) => state.schedule);
  const { drawingData } = useAppSelector((state) => state.schedule);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState<string>();

  // State declarations
  const [activeKeys, setActiveKeys] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedResources, setSelectedResources] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedElements, setSelectedElements] = useState<{
    [key: string]: string;
  }>({});


const calculateElementVolume = (dimensions: ElementDimensions, taskId: string) => {
  if (taskId?.startsWith('PT1')) {
    // For plinth beams, get length from drawingData
    const length = taskId.startsWith('PT1L') ? 
      drawingData.builtupLength / 2 :
      drawingData.builtupWidth / 2;
    return length * dimensions.breadth * dimensions.thickness;
  }
  
  return dimensions.length * dimensions.breadth * dimensions.thickness;
};


const handleElementSelection = (taskId: string, elementId: string) => {
  setLoading(true);

  try {
    setSelectedElements(prev => ({
      ...prev,
      [taskId]: elementId
    }));

    const selectedElement = Object.values(structuralElements)
      .flat()
      .find(element => element.id === elementId);

    if (selectedElement && tasks) {
      const task = tasks.find(t => t.id === taskId);
      
      if (task) {
        const volume = calculateElementVolume(selectedElement.dimensions, taskId);
        const elementCost = volume * selectedElement.rate * (task.numbersRequired || 1);

        let displayName = task.name.split(':')[0].trim();
        if (selectedElement.category === 'Plinth Beam') {
          const prefix = taskId.startsWith('PT1L') ? 'L/2' : 'B/2';
          displayName += ` Size: ${prefix}x${selectedElement.dimensions.breadth}x${selectedElement.dimensions.thickness}`;
        } else if (selectedElement.category === 'Overhead Tank') {
          displayName += ` Type: ${selectedElement.name}`;
        } else {
          displayName += ` Size: ${selectedElement.dimensions.length}x${selectedElement.dimensions.breadth}x${selectedElement.dimensions.thickness}`;
        }

        dispatch(
          updateTaskField({
            id: taskId,
            field: 'batchUpdate',
            value: {
              selectedElementId: elementId,
              elementCost,
              dimensions: selectedElement.dimensions,
              elementType: selectedElement.category,
              rate: selectedElement.rate,
              name: displayName,
              volume
            }
          })
        );

        if (task.parent) {
          updateParentCosts(task.parent);
        }
      }
    }
  } finally {
    setTimeout(() => setLoading(false), 100);
  }
};


const updateParentCosts = (parentId: string) => {
  const parent = tasks.find(t => t.id === parentId);
  if (parent) {
    const childrenCosts = (parent.children || []).reduce((sum, child) => {
      const childCost = calculateTaskCost(child);
      return sum + childCost;
    }, 0);

    const parentElementCost = getElementCost(parent.id);
    const totalParentCost = childrenCosts + parentElementCost;

    dispatch(
      updateTaskField({
        id: parentId,
        field: 'totalCost',
        value: totalParentCost
      })
    );

    if (parent.parent) {
      updateParentCosts(parent.parent);
    }
  }
};

const getElementCost = (taskId: string): number => {
  const elementId = selectedElements[taskId];
  if (!elementId) return 0;

  // Find selected element
  let selectedElement = null;
  Object.values(structuralElements).forEach((category) => {
    const found = category.find((element) => element.id === elementId);
    if (found) selectedElement = found;
  });

  if (!selectedElement) return 0;

  // Get task and dimensions
  const task = tasks.find((t) => t.id === taskId);
  if (!task) return 0;

  // Calculate volume based on element type
  let volume = 0;
  if (selectedElement.category === 'Plinth Beam') {
    // For plinth beams, use length from drawingData
    const length = taskId.startsWith('PT1L') ? 
      drawingData.builtupLength / 2 : 
      drawingData.builtupWidth / 2;
    volume = length * selectedElement.dimensions.breadth * selectedElement.dimensions.thickness;
  } else if (selectedElement.category === 'Overhead Tank') {
    // For overhead tank, use specific calculation
    volume = selectedElement.dimensions.length * selectedElement.dimensions.breadth * selectedElement.dimensions.thickness;
  } else {
    // For regular elements
    volume = calculateElementVolume(selectedElement.dimensions, taskId);
  }

  // Calculate final cost
  return volume * selectedElement.rate * (task.numbersRequired || 1);
};



  // Initialize selections
  useEffect(() => {
    const initializeSelections = (tasks: Task[]) => {
      const taskSelections: { [key: string]: boolean } = {};
      const resourceSelections: { [key: string]: boolean } = {};
      const elementSelections: { [key: string]: string } = {};

      const processTask = (task: any) => {
        taskSelections[task.id] = true;
        // Initialize element selection from task if it exists
        if (task.selectedElementId) {
          elementSelections[task.id] = task.selectedElementId;
        }
        task.resources?.forEach((resource: { id: string | number }) => {
          resourceSelections[resource.id] = true;
        });
        task.children?.forEach(processTask);
      };

      tasks.forEach(processTask);
      setSelectedTasks(taskSelections);
      setSelectedResources(resourceSelections);
      setSelectedElements(elementSelections);
    };

    initializeSelections(tasks);
  }, [tasks]);

  // Handle field changes
  function handleChange(
    e: any,
    id: string,
    field: string,
    type: string = "task"
  ) {
    dispatch(
      updateTaskField({
        id: id,
        field: field,
        value: e.target.valueAsNumber,
        type,
      })
    );
  }



  const handleTaskSelection = (taskId: string, checked: boolean) => {
    const findTaskAndLevel = (
      tasks: any[],
      id: string,
      level: number = 0
    ): [any, number] => {
      for (const task of tasks) {
        if (task.id === id) return [task, level];
        if (task.children) {
          const [found, foundLevel] = findTaskAndLevel(
            task.children,
            id,
            level + 1
          );
          if (found) return [found, foundLevel];
        }
      }
      return [null, -1];
    };

    const [task, level] = findTaskAndLevel(tasks, taskId);
    if (!task) return;

    // Get all descendants
    const getAllDescendants = (task: any) => {
      let taskIds: string[] = [task.id];
      let resourceIds: string[] = [];

      if (task.resources?.length) {
        resourceIds = [...resourceIds, ...task.resources.map((r: any) => r.id)];
      }

      if (task.children?.length) {
        task.children.forEach((child: any) => {
          const { tasks: childTaskIds, resources: childResourceIds } =
            getAllDescendants(child);
          taskIds = [...taskIds, ...childTaskIds];
          resourceIds = [...resourceIds, ...childResourceIds];
        });
      }

      return { tasks: taskIds, resources: resourceIds };
    };

    // Update selections including parent
    const { tasks: affectedTaskIds, resources: affectedResourceIds } =
      getAllDescendants(task);

    // Apply updates
    setSelectedTasks((prev) => {
      const next = { ...prev };
      affectedTaskIds.forEach((id) => {
        next[id] = checked;
      });
      return next;
    });

    setSelectedResources((prev) => {
      const next = { ...prev };
      affectedResourceIds.forEach((id) => {
        next[id] = checked;
      });
      return next;
    });

    // Update parent state if this is a second level task
    if (level === 1) {
      const parent = tasks.find((t) =>
        t.children?.some((c: { id: string }) => c.id === taskId)
      );
      if (parent) {
        const allSiblingsSelected = parent.children.every(
          (child: { id: string }) =>
            child.id === taskId ? checked : selectedTasks[child.id]
        );
        setSelectedTasks((prev) => ({
          ...prev,
          [parent.id]: allSiblingsSelected,
        }));
      }
    }
  };

  // Calculate task cost
  const calculateTaskCost = (task: any): number => {
    if (!selectedTasks[task.id]) return 0;

    let cost = 0;

    // Add structural element cost
    cost += getElementCost(task.id);

    // Add resource costs
    task.resources?.forEach(
      (resource: { id: string | number; totalCost: number }) => {
        if (selectedResources[resource.id] && resource.totalCost) {
          cost += resource.totalCost;
        }
      }
    );

    // Add children costs
    task.children?.forEach((child: any) => {
      cost += calculateTaskCost(child);
    });

    return cost;
  };
  // Resource columns configuration
  const resourceColumns: any = [
    {
      title: "Resource ID",
      dataIndex: "id",
      width: 100,
      fixed: "left",
      render: (id: string) => <Text strong>{id}</Text>,
    },
    {
      title: "", // Empty cell for alignment
      dataIndex: "spacer",
      width: 20,
    },
    {
      title: "Resource",
      dataIndex: "resource",
      width: 150,
    },
    {
      title: "Description",
      dataIndex: "description",
      width: 200,
    },
    {
      title: "Length",
      dataIndex: "length",
      width: 120,
      render: (value: number, record: Resource) => (
        <InputNumber
          className="w-[100px] h-[16px] input-ghost input-bordered"
          value={value}
          onChange={(val) =>
            handleChange(
              { target: { valueAsNumber: val } },
              record.id,
              "length"
            )
          }
          disabled={!record?.length && record?.length !== 0}
          min={0}
          step={0.1}
          precision={3}
        />
      ),
    },
    {
      title: "Breadth",
      dataIndex: "breadth",
      width: 120,
      render: (value: number, record: Resource) => (
        <InputNumber
          className="w-[100px] h-[16px] input-ghost input-bordered"
          value={value}
          onChange={(val) =>
            handleChange(
              { target: { valueAsNumber: val } },
              record.id,
              "breadth"
            )
          }
          disabled={!record?.length && record?.length !== 0}
          min={0}
          step={0.1}
          precision={3}
        />
      ),
    },
    {
      title: "Thickness",
      dataIndex: "thickness",
      width: 120,
      render: (value: number, record: Resource) => (
        <InputNumber
          className="w-[100px] h-[16px] input-ghost input-bordered"
          value={value}
          onChange={(val) =>
            handleChange(
              { target: { valueAsNumber: val } },
              record.id,
              "thickness"
            )
          }
          disabled={!record?.thickness && record?.thickness !== 0}
          min={0}
          step={0.01}
          precision={3}
        />
      ),
    },
    {
      title: "Diameter",
      dataIndex: "diameter",
      width: 120,
      render: (value: number, record: Resource) => (
        <InputNumber
          className="w-[100px] h-[16px] input-ghost input-bordered"
          value={value}
          onChange={(val) =>
            handleChange(
              { target: { valueAsNumber: val } },
              record.id,
              "diameter"
            )
          }
          disabled={!record?.diameter && record?.diameter !== 0}
          min={0}
          step={0.1}
          precision={3}
        />
      ),
    },
    {
      title: "No. of Bars",
      dataIndex: "noOfBars",
      width: 120,
      render: (value: number, record: Resource) => (
        <InputNumber
          className="w-[100px] h-[16px] input-ghost input-bordered"
          value={value}
          onChange={(val) =>
            handleChange(
              { target: { valueAsNumber: val } },
              record.id,
              "noOfBars"
            )
          }
          disabled={!record?.noOfBars && record?.noOfBars !== 0}
          min={0}
        />
      ),
    },
    {
      title: "Area",
      dataIndex: "area",
      width: 100,
    },
    {
      title: "Perimeter",
      dataIndex: "perimeter",
      width: 100,
    },
    // {
    //   title: 'Numbers Required',
    //   dataIndex: 'numbersRequired',
    //   width: 150,
    //   render: (value: number, record: Resource) => {
    //     const isExcavation = record.resource?.toLowerCase().includes('excavation');
    //     return (
    //       <InputNumber
    //         className="w-[100px] h-[16px] input-ghost input-bordered"
    //         value={value}
    //         onChange={(val) => handleChange({ target: { valueAsNumber: val }}, record.id, 'numbersRequired')}
    //         disabled={!isExcavation && !record?.numbersRequired && record?.numbersRequired !== 0}
    //         min={0}
    //       />
    //     );
    //   }
    // },
    {
      title: "Quantity",
      dataIndex: "quantity",
      width: 120,
    },
    {
      title: "Rate",
      dataIndex: "rate",
      width: 120,
    },
    {
      title: "Units",
      dataIndex: "units",
      width: 100,
    },
    {
      title: "Cost",
      fixed: "right",
      width: 120,
      render: (_: any, record: Resource) =>
        record.totalCost ? (
          <Text>
            {currencyCode} {record.totalCost.toFixed(2)}
          </Text>
        ) : null,
    },
  ];

  const renderResources = (resources: Resource[], parentTaskId: string) => {
    if (!selectedTasks[parentTaskId]) return null;

    return (
      <div className="nested-resources">
        <Table
          columns={resourceColumns}
          dataSource={resources}
          pagination={false}
          size="small"
          scroll={{ x: "max-content" }}
          rowKey="id"
          className="resource-table"
          sticky={true}
        />
      </div>
    );
  };

  const taskTree = React.useMemo(() => {
    const buildTaskHierarchy = (tasks: Task[]) => {
      const taskMap = new Map();
      const rootTasks: Task[] = [];

      tasks.forEach((task) => {
        taskMap.set(task.id, { ...task, children: [] });
      });

      tasks.forEach((task) => {
        if (task.parent && taskMap.has(task.parent)) {
          const parentTask = taskMap.get(task.parent);
          parentTask.children.push(taskMap.get(task.id));
        } else {
          rootTasks.push(taskMap.get(task.id));
        }
      });

      return rootTasks;
    };

    return buildTaskHierarchy(tasks);
  }, [tasks]);

  const getElementOptionsForTask = (task: any): StructuralElement[] => {
    switch (task.id) {
      case "F01":
        return structuralElements.foundations;
      case "PT1L0":
      case "PT1B0":
        return structuralElements.plinthBeams;
      case "GCT1":
        return structuralElements.columns;
      case "L1BT1":
        return structuralElements.beams;
    }

    const taskName = task.name.toLowerCase();
    if (task.id === "FD1" || taskName.includes("foundation")) {
      return structuralElements.foundations;
    }
    if (taskName.includes("plinth")) {
      return structuralElements.plinthBeams;
    }
    if (taskName.includes("column")) {
      return structuralElements.columns;
    }
    if (taskName.includes("beam") && !taskName.includes("plinth")) {
      return structuralElements.beams;
    }

    return [];
  };

  // Update the element types to show dropdowns for
  const shouldShowDropdown = (task: any) => {
    const dropdownElements = [
      "F01", // Footing Type1: 1.2x1.2x0.3
      "PT1L0", // Plinth Beam Type-1: L/2x0.23x0.23
      "PT1B0", // Plinth Beam Type-1: B/2x0.23x0.23
      "GCT1", // Columns-G-Level1-Typ-1
      "L1BT1", // Beam G-Level1-Typ-1
      "FFGL1", // First Flight-G-L1
      "SFGL1", // Second Flight-G-L1
      "ELE0", // Elevator Core
      "OTCW", // Overhead Tank-1 Shear Walls
      "OTBW", // Overhead Tank2 Brick Walls
      "L1MEP", // MEP 1st Fix
      "SCL1", // Staircase-G-L1
    ];

    return dropdownElements.includes(task.id);
  };

  // Update the getRowStyle function to handle all cases
  const getRowStyle = (taskId: string): string => {
    // Header rows (red)
    if (taskId.match(/^(OTCW|OTBW)$/)) {
      return "bg-red-100";
    }
    // Parent rows (green)
    if (taskId.match(/^(SCL1|ELE0|PBL|PBB)$/)) {
      return "bg-green-100";
    }
    // Child rows with dropdowns (blue)
    if (taskId.match(/^(F01|PT1L0|PT1B0|GCT1|L1BT1|FFGL1|SFGL1|L1MEP)$/)) {
      return "bg-blue-100";
    }
    return "";
  };

  // Update the renderTaskHeader function to handle dropdown visibility
  const renderTaskHeader = (task: any) => {
    const taskCost = calculateTaskCost(task);
    const showDropdown = shouldShowDropdown(task);
    const showElement = shouldShowDropdown(task);
    const selectedElementType = selectedElements[task.id];

    const elementOptions = showDropdown ? getElementOptionsForTask(task) : [];
    const rowStyle = getRowStyle(task.id);
    const getTaskDisplayName = (task: any) => {
      if (!selectedElementType) return task.name;
  
      const element = Object.values(structuralElements)
        .flat()
        .find((e) => e.id === selectedElementType);
  
      if (element) {
        const baseName = task.name.split(":")[0].trim();
  
        // Handle different element types
        if (element.category === 'Plinth Beam') {
          // For plinth beams, show L/2 or B/2 based on the type
          const prefix = task.id.startsWith('PT1L') ? 'L/2' : 'B/2';
          return `${baseName} Size: ${prefix}x${element.dimensions.breadth}x${element.dimensions.thickness}`;
        } 
        else if (element.category === 'Overhead Tank') {
          // For overhead tank, just show name without dimensions
          return `${baseName} Type: ${element.name}`;
        }
        else {
          // For other elements show regular dimensions
          return `${baseName} Size: ${element.dimensions.length}x${element.dimensions.breadth}x${element.dimensions.thickness}`;
        }
      }
      return task.name;
    };
    return (
      <div
        className={`flex justify-between items-center w-full p-2 ${rowStyle}`}
      >
        <div className="flex items-center gap-3">
          <Checkbox
            checked={selectedTasks[task.id]}
            onChange={(e) => handleTaskSelection(task.id, e.target.checked)}
          />

          {task.children?.length > 0 && (
            <Button
              type="text"
              icon={
                activeKeys.includes(task.id) ? (
                  <CaretDownOutlined />
                ) : (
                  <CaretRightOutlined />
                )
              }
              onClick={(e) => {
                e.stopPropagation();
                if (activeKeys.includes(task.id)) {
                  setActiveKeys((prev) => prev.filter((id) => id !== task.id));
                } else {
                  setActiveKeys((prev) => [...prev, task.id]);
                }
              }}
            />
          )}

          <Text strong>
            {task.id} - {getTaskDisplayName(task)}
          </Text>

          {showElement && (
            <Button
              onClick={() => {
                setCurrentTaskId(task.id);
                setModalVisible(true);
              }}
              disabled={!selectedTasks[task.id]}
            >
              {selectedElements[task.id] ? "Change Type" : "Select Type"}
            </Button>
          )}
          {/* {showDropdown && elementOptions.length > 0 && (
          <Select
            className="ml-4 w-64"
            value={selectedElements[task.id]}
            onChange={(value) => handleElementSelection(task.id, value)}
            placeholder="Select type"
            disabled={!selectedTasks[task.id]}
            onClick={(e) => e.stopPropagation()}
          >
            {elementOptions.map(element => (
              <Option key={element.id} value={element.id}>
                {element.name}
              </Option>
            ))}
          </Select>
        )} */}
        </div>

        <div className="flex items-center gap-4">
          {task.numbersRequired !== undefined && (
            <Space>
              <Text type="secondary">Numbers Required:</Text>
              <InputNumber
                className="w-[100px] h-[16px]"
                value={task.numbersRequired}
                onChange={(val) =>
                  handleChange(
                    { target: { valueAsNumber: val } },
                    task.id,
                    "numbersRequired"
                  )
                }
                min={0}
                disabled={!selectedTasks[task.id]}
              />
            </Space>
          )}

          {taskCost > 0 && selectedTasks[task.id] && (
            <Tag color="success">
              {currencyCode} {taskCost.toFixed(2)}
            </Tag>
          )}
        </div>
      </div>
    );
  };

  const renderNestedTasks = (task: any) => {
    const hasResources = task.resources?.length > 0;
    const hasChildren = task.children?.length > 0;

    return (
      <Panel
        key={task.id}
        header={renderTaskHeader(task)}
        className="task-panel"
      >
        {selectedTasks[task.id] && (
          <>
            {hasResources && renderResources(task.resources, task.id)}
            {hasChildren && (
              <Collapse ghost className="task-collapse">
                {task.children.map((child: any) => renderNestedTasks(child))}
              </Collapse>
            )}
          </>
        )}
      </Panel>
    );
  };

  return (
    <Layout className="estimation-layout">
      <Content className="estimation-content">
        <Spin spinning={loading}>
          {taskTree.map((task: any) => {
            const taskCost = calculateTaskCost(task);
            const elementOptions = getElementOptionsForTask(task);
            const showDropdown = shouldShowDropdown(task);

            return (
              <Card
                key={task.id}
                className="task-card"
                title={
                  <Space>
                    <Checkbox
                      checked={selectedTasks[task.id]}
                      onChange={(e) =>
                        handleTaskSelection(task.id, e.target.checked)
                      }
                    />
                    <Text strong>
                      {task.id} - {task.name}
                    </Text>

                    {showDropdown && elementOptions.length > 0 && (
                      <Select
                        className="ml-2 w-64"
                        value={selectedElements[task.id] || undefined}
                        onChange={(value) =>
                          handleElementSelection(task.id, value)
                        }
                        placeholder="Select foundation type"
                        disabled={!selectedTasks[task.id]}
                      >
                        {elementOptions.map((element) => (
                          <Option key={element.id} value={element.id}>
                            {element.name}
                          </Option>
                        ))}
                      </Select>
                    )}

                    {task.type === "project" && task.numbersRequired && (
                      <>
                        <Text type="secondary">Numbers Required:</Text>
                        <InputNumber
                          className="w-[100px] h-[16px] input-ghost input-bordered"
                          value={task.numbersRequired}
                          onChange={(val) =>
                            handleChange(
                              { target: { valueAsNumber: val } },
                              task.id,
                              "numbersRequired",
                              "project"
                            )
                          }
                          min={0}
                          disabled={!selectedTasks[task.id]}
                        />
                      </>
                    )}

                    {taskCost > 0 && selectedTasks[task.id] && (
                      <Tag color="success">
                        {/* <DollarOutlined /> */}
                        {currencyCode} {taskCost.toFixed(2)}
                      </Tag>
                    )}
                  </Space>
                }
              >
                {selectedTasks[task.id] && (
                  <Collapse
                    ghost
                    className="task-collapse"
                    activeKey={activeKeys}
                    onChange={(keys) => setActiveKeys(keys as string[])}
                  >
                    {task.children?.map((child: any) =>
                      renderNestedTasks(child)
                    )}
                  </Collapse>
                )}
              </Card>
            );
          })}
          <ElementTypeModal
            visible={modalVisible}
            onClose={() => {
              setModalVisible(false);
              setCurrentTaskId(undefined);
            }}
            onSelect={(elementId) => {
              if (currentTaskId) {
                handleElementSelection(currentTaskId, elementId);
              }
            }}
            taskId={currentTaskId}
            currentTask={tasks.find((t) => t.id === currentTaskId)}
          />
        </Spin>
      </Content>
    </Layout>
  );
};

export default EstimationComponent;

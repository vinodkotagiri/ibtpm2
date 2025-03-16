import React, { useState, useEffect, useMemo } from 'react';
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
  Tooltip,
  notification,
  Statistic,
  Alert
} from 'antd';
import {
  CaretDownOutlined,
  CaretRightOutlined,
  DollarOutlined,
  InfoCircleOutlined,
  ToolOutlined,
  BuildOutlined,
  EditOutlined
} from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { updateTaskField } from '../app/features/scheduleSlice';
import { Task, Resource } from '../constants/types';
import './estimation.css';
import { ConcreteRates } from '../constants/rates';
import ElementTypeModal from './ElementSelectionModal';

const { Text, Title } = Typography;
const { Panel } = Collapse;
const { Content } = Layout;
const { Option } = Select;

const EstimationComponent = () => {
  const dispatch = useAppDispatch();
  const { tasks, currencyCode } = useAppSelector(state => state.schedule);
  
  // State declarations
  const [modalVisible, setModalVisible] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState<string>();
  const [activeKeys, setActiveKeys] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState<{[key: string]: boolean}>({});
  const [selectedResources, setSelectedResources] = useState<{[key: string]: boolean}>({});
  const [selectedElements, setSelectedElements] = useState<{[key: string]: string}>({});
  const [totalEstimate, setTotalEstimate] = useState(0);

  // Define the structural elements with their properties
  const structuralElements = {
    // Foundations
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
    plinthBeams: [
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
    ]
  };

  // Helper functions
  const getElementOptionsForTask = (task) => {
    // Handle special cases by task ID
    switch(task.id) {
      case 'F01':
        return structuralElements.foundations;
      case 'PT1L0':
      case 'PT1B0':
        return structuralElements.plinthBeams;
      case 'GCT1':
        return structuralElements.columns;
      case 'L1BT1':
        return structuralElements.beams;
    }

    // If no specific ID match, check by name pattern
    const taskName = task.name.toLowerCase();
    if (task.id === 'FD1' || taskName.includes('foundation')) {
      return structuralElements.foundations;
    }
    if (taskName.includes('plinth')) {
      return structuralElements.plinthBeams;
    }
    if (taskName.includes('column')) {
      return structuralElements.columns;
    }
    if (taskName.includes('beam') && !taskName.includes('plinth')) {
      return structuralElements.beams;
    }
    
    return [];
  };

  const calculateElementVolume = (dimensions) => {
    return dimensions.length * dimensions.breadth * dimensions.thickness;
  };

  const getElementCost = (taskId) => {
    const elementId = selectedElements[taskId];
    if (!elementId) return 0;

    let selectedElement = null;
    Object.values(structuralElements).forEach(category => {
      const found = category.find(element => element.id === elementId);
      if (found) selectedElement = found;
    });

    if (!selectedElement) return 0;

    const volume = calculateElementVolume(selectedElement.dimensions);
    return volume * selectedElement.rate * (tasks.find(t => t.id === taskId)?.numbersRequired || 1);
  };

  // Initialize selections
  useEffect(() => {
    const initializeSelections = (tasks) => {
      const taskSelections = {};
      const resourceSelections = {};
      const elementSelections = {};
  
      const processTask = (task) => {
        taskSelections[task.id] = true;
        // Initialize element selection from task if it exists
        if (task.selectedElementId) {
          elementSelections[task.id] = task.selectedElementId;
        }
        task.resources?.forEach((resource) => {
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

  // Update total estimate whenever tasks or selections change
  useEffect(() => {
    const calculateTotal = () => {
      let total = 0;
      
      const processTask = (task) => {
        if (selectedTasks[task.id]) {
          // Add element cost
          total += getElementCost(task.id);
          
          // Add resource costs
          task.resources?.forEach(resource => {
            if (selectedResources[resource.id] && resource.totalCost) {
              total += resource.totalCost;
            }
          });
          
          // Process children
          task.children?.forEach(processTask);
        }
      };
      
      tasks.forEach(processTask);
      return total;
    };
    
    setTotalEstimate(calculateTotal());
  }, [tasks, selectedTasks, selectedResources, selectedElements]);

  // Handle field changes
  function handleChange(e, id, field, type = 'task') {
    dispatch(updateTaskField({
      id: id,
      field: field,
      value: e.target.valueAsNumber,
      type
    }));
  }

  // Handle element selection
  const handleElementSelection = (taskId, elementId) => {
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
          const volume = calculateElementVolume(selectedElement.dimensions);
          const elementCost = volume * selectedElement.rate * (task.numbersRequired || 1);
   
          // Update current task
          dispatch(updateTaskField({
            id: taskId,
            field: 'batchUpdate',
            value: {
              selectedElementId: elementId,
              elementCost: elementCost,
              dimensions: selectedElement.dimensions,
              elementType: selectedElement.category,
              rate: selectedElement.rate,
              ...(taskId.startsWith('F0') && { selectedName: selectedElement.name })
            }
          }));
   
          // Update parent cost recursively
          const updateParentCosts = (parentId) => {
            const parent = tasks.find(t => t.id === parentId);
            if (parent) {
              const newCost = calculateTaskCost(parent);
              dispatch(updateTaskField({
                id: parentId,
                field: 'totalCost',
                value: newCost
              }));
   
              if (parent.parent) {
                updateParentCosts(parent.parent);
              }
            }
          };
   
          if (task.parent) {
            updateParentCosts(task.parent);
          }
          
          // Show success notification
          notification.success({
            message: 'Element Type Selected',
            description: `Successfully applied ${selectedElement.name} to ${task.name}`,
            placement: 'topRight',
            duration: 3
          });
        }
      }
    } catch (error) {
      notification.error({
        message: 'Error',
        description: 'Failed to update element type',
        placement: 'topRight'
      });
      console.error('Error updating element:', error);
    } finally {
      setTimeout(() => setLoading(false), 300);
    }
  };

  // Enhanced task selection handler
  const handleTaskSelection = (taskId, checked) => {
    // Find task and its level
    const findTaskAndLevel = (tasks, id, level = 0) => {
      for (const task of tasks) {
        if (task.id === id) return [task, level];
        if (task.children) {
          const [found, foundLevel] = findTaskAndLevel(task.children, id, level + 1);
          if (found) return [found, foundLevel];
        }
      }
      return [null, -1];
    };
  
    const [task, level] = findTaskAndLevel(tasks, taskId);
    if (!task) return;
  
    // Get all descendants
    const getAllDescendants = (task) => {
      let taskIds = [task.id];
      let resourceIds = [];
  
      if (task.resources?.length) {
        resourceIds = [...resourceIds, ...task.resources.map((r) => r.id)];
      }
  
      if (task.children?.length) {
        task.children.forEach((child) => {
          const { tasks: childTaskIds, resources: childResourceIds } = getAllDescendants(child);
          taskIds = [...taskIds, ...childTaskIds];
          resourceIds = [...resourceIds, ...childResourceIds];
        });
      }
  
      return { tasks: taskIds, resources: resourceIds };
    };
  
    // Update selections including parent
    const { tasks: affectedTaskIds, resources: affectedResourceIds } = getAllDescendants(task);
  
    // Apply updates
    setSelectedTasks(prev => {
      const next = { ...prev };
      affectedTaskIds.forEach(id => {
        next[id] = checked;
      });
      return next;
    });
  
    setSelectedResources(prev => {
      const next = { ...prev };
      affectedResourceIds.forEach(id => {
        next[id] = checked;
      });
      return next;
    });
  
    // Update parent state if this is a second level task
    if (level === 1) {
      const parent = tasks.find(t => t.children?.some((c) => c.id === taskId));
      if (parent) {
        const allSiblingsSelected = parent.children.every((child) => 
          child.id === taskId ? checked : selectedTasks[child.id]
        );
        setSelectedTasks(prev => ({
          ...prev,
          [parent.id]: allSiblingsSelected
        }));
      }
    }
  };

  // Calculate task cost
  const calculateTaskCost = (task) => {
    if (!selectedTasks[task.id]) return 0;

    let cost = 0;
    
    // Add structural element cost
    cost += getElementCost(task.id);
    
    // Add resource costs
    task.resources?.forEach((resource) => {
      if (selectedResources[resource.id] && resource.totalCost) {
        cost += resource.totalCost;
      }
    });

    // Add children costs
    task.children?.forEach((child) => {
      cost += calculateTaskCost(child);
    });

    return cost;
  };

  // Resource columns configuration
  const resourceColumns:any = [
    {
      title: 'Resource ID',
      dataIndex: 'id',
      width: 100,
      fixed: 'left',
      render: (id) => <Text strong>{id}</Text>
    },
    {
      title: 'Resource',
      dataIndex: 'resource',
      width: 150
    },
    {
      title: 'Description',
      dataIndex: 'description',
      width: 200
    },
    {
      title: 'Length',
      dataIndex: 'length',
      width: 120,
      render: (value, record) => (
        <InputNumber
          className="w-full input-ghost input-bordered"
          value={value}
          onChange={(val) => handleChange({ target: { valueAsNumber: val }}, record.id, 'length')}
          disabled={!record?.length && record?.length !== 0}
          min={0}
          step={0.1}
          precision={3}
        />
      )
    },
    {
      title: 'Breadth',
      dataIndex: 'breadth',
      width: 120,
      render: (value, record) => (
        <InputNumber
          className="w-full input-ghost input-bordered"
          value={value}
          onChange={(val) => handleChange({ target: { valueAsNumber: val }}, record.id, 'breadth')}
          disabled={!record?.breadth && record?.breadth !== 0}
          min={0}
          step={0.1}
          precision={3}
        />
      )
    },
    {
      title: 'Thickness',
      dataIndex: 'thickness',
      width: 120,
      render: (value, record) => (
        <InputNumber
          className="w-full input-ghost input-bordered"
          value={value}
          onChange={(val) => handleChange({ target: { valueAsNumber: val }}, record.id, 'thickness')}
          disabled={!record?.thickness && record?.thickness !== 0}
          min={0}
          step={0.01}
          precision={3}
        />
      )
    },
    {
      title: 'Diameter',
      dataIndex: 'diameter',
      width: 120,
      render: (value, record) => (
        <InputNumber
          className="w-full input-ghost input-bordered"
          value={value}
          onChange={(val) => handleChange({ target: { valueAsNumber: val }}, record.id, 'diameter')}
          disabled={!record?.diameter && record?.diameter !== 0}
          min={0}
          step={0.1}
          precision={3}
        />
      )
    },
    {
      title: 'No. of Bars',
      dataIndex: 'noOfBars',
      width: 120,
      render: (value, record) => (
        <InputNumber
          className="w-full input-ghost input-bordered"
          value={value}
          onChange={(val) => handleChange({ target: { valueAsNumber: val }}, record.id, 'noOfBars')}
          disabled={!record?.noOfBars && record?.noOfBars !== 0}
          min={0}
        />
      )
    },
    {
      title: 'Area',
      dataIndex: 'area',
      width: 100,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      width: 120,
    },
    {
      title: 'Rate',
      dataIndex: 'rate',
      width: 120,
    },
    {
      title: 'Units',
      dataIndex: 'units',
      width: 100,
    },
    {
      title: 'Cost',
      fixed: 'right',
      width: 120,
      render: (_, record) => (
        record.totalCost ? (
          <Text>{currencyCode} {record.totalCost.toFixed(2)}</Text>
        ) : null
      )
    }
  ];

  // Render resources table
  const renderResources = (resources, parentTaskId) => {
    if (!selectedTasks[parentTaskId] || !resources?.length) return null;

    return (
      <div className="nested-resources">
        <Table
          columns={resourceColumns}
          dataSource={resources}
          pagination={false}
          size="small"
          scroll={{ x: 'max-content' }}
          rowKey="id"
          className="resource-table"
          sticky={true}
        />
      </div>
    );
  };

  // Build task tree
  const taskTree = useMemo(() => {
    const buildTaskHierarchy = (tasks) => {
      const taskMap = new Map();
      const rootTasks = [];

      tasks.forEach(task => {
        taskMap.set(task.id, { ...task, children: [] });
      });

      tasks.forEach(task => {
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

  // Determine if a task should show the element selection dropdown
  const shouldShowElementDropdown = (task) => {
    const dropdownElements = [
      'F01',       // Footing Type1: 1.2x1.2x0.3
      'PT1L0',     // Plinth Beam Type-1: L/2x0.23x0.23
      'PT1B0',     // Plinth Beam Type-1: B/2x0.23x0.23 
      'GCT1',      // Columns-G-Level1-Typ-1
      'L1BT1',     // Beam G-Level1-Typ-1 
      'FFGL1',     // First Flight-G-L1
      'SFGL1',     // Second Flight-G-L1
      'ELE0',      // Elevator Core
      'OTCW',      // Overhead Tank-1 Shear Walls
      'OTBW',      // Overhead Tank2 Brick Walls
      'L1MEP',     // MEP 1st Fix
      'SCL1'       // Staircase-G-L1
    ];

    return dropdownElements.includes(task.id);
  };

  // Determine the style for different row types
  const getRowStyle = (taskId) => {
    // Header rows (red)
    if (taskId.match(/^(OTCW|OTBW)$/)) {
      return 'bg-red-100';
    }
    // Parent rows (green)
    if (taskId.match(/^(SCL1|ELE0|PBL|PBB)$/)) {
      return 'bg-green-100';
    }
    // Child rows with dropdowns (blue)
    if (taskId.match(/^(F01|PT1L0|PT1B0|GCT1|L1BT1|FFGL1|SFGL1|L1MEP)$/)) {
      return 'bg-blue-100';
    }
    return '';
  };

  // Find selected element details
  const getSelectedElementDetails = (taskId) => {
    const elementId = selectedElements[taskId];
    if (!elementId) return null;

    let selectedElement = null;
    Object.values(structuralElements).forEach(category => {
      const found = category.find(element => element.id === elementId);
      if (found) selectedElement = found;
    });

    return selectedElement;
  };

  // Render the task header
  const renderTaskHeader = (task) => {
    const taskCost = calculateTaskCost(task);
    const showElementButton = shouldShowElementDropdown(task);
    const elementOptions = getElementOptionsForTask(task);
    const rowStyle = getRowStyle(task.id);
    const selectedElement = getSelectedElementDetails(task.id);

    return (
      <div className={`flex justify-between items-center w-full p-2 ${rowStyle}`}>
        <div className="flex items-center gap-3">
          <Checkbox
            checked={selectedTasks[task.id]}
            onChange={(e) => handleTaskSelection(task.id, e.target.checked)}
          />
          
          {task.children?.length > 0 && (
            <Button
              type="text"
              icon={activeKeys.includes(task.id) ? <CaretDownOutlined /> : <CaretRightOutlined />}
              onClick={(e) => {
                e.stopPropagation();
                if (activeKeys.includes(task.id)) {
                  setActiveKeys(prev => prev.filter(id => id !== task.id));
                } else {
                  setActiveKeys(prev => [...prev, task.id]);
                }
              }}
            />
          )}
          
          <Text strong>{task.id} - {task.name}</Text>
          
          {showElementButton && (
            <Button
              type="primary"
              ghost
              size="small"
              icon={<EditOutlined />}
              onClick={() => {
                setCurrentTaskId(task.id);
                setModalVisible(true);
              }}
              disabled={!selectedTasks[task.id]}
            >
              {selectedElements[task.id] ? 'Change Element' : 'Select Element'}
            </Button>
          )}
          
          {selectedElement && (
            <Tooltip 
              title={
                <div>
                  <p><strong>Type:</strong> {selectedElement.name}</p>
                  <p><strong>Dimensions:</strong> {selectedElement.dimensions.length}m × {selectedElement.dimensions.breadth}m × {selectedElement.dimensions.thickness}m</p>
                  <p><strong>Volume:</strong> {(selectedElement.dimensions.length * selectedElement.dimensions.breadth * selectedElement.dimensions.thickness).toFixed(3)} m³</p>
                  <p><strong>Rate:</strong> {currencyCode} {selectedElement.rate}/m³</p>
                </div>
              }>
              <Tag color="cyan" style={{ cursor: 'pointer' }}>
                <InfoCircleOutlined /> {selectedElement.name}
              </Tag>
            </Tooltip>
          )}
        </div>

        <div className="flex items-center gap-4">
          {task.numbersRequired !== undefined && (
            <Space>
              <Text type="secondary">Required Quantity:</Text>
              <InputNumber
                className="w-24"
                value={task.numbersRequired}
                onChange={(val) => handleChange(
                  { target: { valueAsNumber: val }},
                  task.id,
                  'numbersRequired'
                )}
                min={0}
                disabled={!selectedTasks[task.id]}
              />
            </Space>
          )}
          
          {taskCost > 0 && selectedTasks[task.id] && (
            <Tag color="success" style={{ fontSize: '14px' }}>
              <DollarOutlined /> {currencyCode} {taskCost.toFixed(2)}
            </Tag>
          )}
        </div>
      </div>
    );
  };

  // Render nested tasks
  const renderNestedTasks = (task) => {
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
                {task.children.map((child) => renderNestedTasks(child))}
              </Collapse>
            )}
          </>
        )}
      </Panel>
    );
  };

  // Main component return
  return (
    <Layout className="estimation-layout">
      <Content className="estimation-content p-4">
        <Spin spinning={loading}>
          {/* Summary Stats Card */}
          <Card className="mb-4 shadow-sm">
            <div className="flex flex-wrap justify-between">
              <Statistic 
                title="Total Estimate" 
                value={totalEstimate} 
                precision={2} 
                prefix={<DollarOutlined />}
                suffix={currencyCode}
                className="mr-8"
              />
         
              <div>
                <Button 
                  type="primary" 
                  className="mr-2"
                  onClick={() => {
                    // Logic to save or export the estimate
                    notification.success({
                      message: 'Estimate Saved',
                      description: 'Your estimate has been saved successfully',
                      placement: 'topRight'
                    });
                  }}
                >
                  Save Estimate
                </Button>
                <Button 
                  onClick={() => {
                    // Logic to generate a report
                    notification.info({
                      message: 'Generating Report',
                      description: 'Your estimate report is being generated',
                      placement: 'topRight'
                    });
                  }}
                >
                  Generate Report
                </Button>
              </div>
            </div>
          </Card>

          {/* Info Alert */}
          <Alert
            message="Estimation Instructions"
            description={
              <ul className="ml-4 list-disc">
                <li>Select or deselect tasks to include in your estimate</li>
                <li>For tasks that require element selection, click "Select Element"</li>
                <li>Adjust quantities as needed for each task</li>
                <li>The total cost will update automatically based on your selections</li>
              </ul>
            }
            type="info"
            showIcon
            closable
            className="mb-4"
          />
          
          {/* Task Cards */}
          {taskTree.map((task) => {
            const taskCost = calculateTaskCost(task);
            const elementOptions = getElementOptionsForTask(task);
            const showDropdown = shouldShowElementDropdown(task);
            const selectedElement = getSelectedElementDetails(task.id);
            
            return (
              <Card
                key={task.id}
                className="task-card mb-4 shadow-sm"
                title={
                  <Space>
                    <Checkbox
                      checked={selectedTasks[task.id]}
                      onChange={(e) => handleTaskSelection(task.id, e.target.checked)}
                    />
                    <Text strong>{task.id} - {task.name}</Text>
                    
                    {showDropdown && elementOptions.length > 0 && (
                      <Button
                        type="primary"
                        ghost
                        icon={<BuildOutlined />}
                        onClick={() => {
                          setCurrentTaskId(task.id);
                          setModalVisible(true);
                        }}
                        disabled={!selectedTasks[task.id]}
                      >
                        {selectedElements[task.id] ? 'Change Element Type' : 'Select Element Type'}
                      </Button>
                    )}
                    
                    {selectedElement && (
                      <Tooltip 
                        title={
                          <div>
                            <p><strong>Type:</strong> {selectedElement.name}</p>
                            <p><strong>Dimensions:</strong> {selectedElement.dimensions.length}m × {selectedElement.dimensions.breadth}m × {selectedElement.dimensions.thickness}m</p>
                            <p><strong>Volume:</strong> {(selectedElement.dimensions.length * selectedElement.dimensions.breadth * selectedElement.dimensions.thickness).toFixed(3)} m³</p>
                            <p><strong>Rate:</strong> {currencyCode} {selectedElement.rate}/m³</p>
                          </div>
                        }>
                        <Tag color="blue" style={{ cursor: 'pointer' }}>
                          <InfoCircleOutlined /> {selectedElement.name}
                        </Tag>
                      </Tooltip>
                    )}
                    
                    {(task.type === 'project' && task.numbersRequired !== undefined) && (
                      <>
                        <Text type="secondary">Quantity:</Text>
                        <InputNumber
                          className="w-24"
                          value={task.numbersRequired}
                          onChange={(val) => handleChange(
                            { target: { valueAsNumber: val }},
                            task.id,
                            'numbersRequired',
                            'project'
                          )}
                          min={0}
                          disabled={!selectedTasks[task.id]}
                        />
                      </>
                    )}
                    
                    {taskCost > 0 && selectedTasks[task.id] && (
                      <Tag color="success" style={{ fontSize: '16px' }}>
                        <DollarOutlined /> {currencyCode} {taskCost.toFixed(2)}
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
                    onChange={keys => setActiveKeys(keys)}
                  >
                    {task.children?.map((child) => renderNestedTasks(child))}
                  </Collapse>
                )}
              </Card>
            );
          })}
          
          {/* Element Selection Modal */}
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
            currentElement={currentTaskId ? selectedElements[currentTaskId] : undefined}
            taskId={currentTaskId}
          />
        </Spin>
      </Content>
    </Layout>
  );
};
export default  EstimationComponent
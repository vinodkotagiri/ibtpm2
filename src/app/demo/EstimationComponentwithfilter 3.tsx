import React, { useState, useEffect, useCallback } from 'react';
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
  Select
} from 'antd';
import {
  CaretDownOutlined,
  CaretRightOutlined,
  DollarOutlined
} from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { updateTaskField } from '../app/features/scheduleSlice';
import { Task, Resource } from '../constants/types';
import './estimation.css';
import { ConcreteRates } from '../constants/rates';

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
const structuralElements: Record<string, StructuralElement[]> = {
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
// Structural Element Select Component
const StructuralElementSelect: React.FC<{
  taskId: string;
  elements: StructuralElement[];
  onChange: (value: string) => void;
  currentValue: string;
  disabled: boolean;
}> = ({ taskId, elements, onChange, currentValue, disabled }) => {
  return (
    <Select
      className="ml-2 w-64"
      value={currentValue}
      onChange={onChange}
      placeholder="Select type"
      disabled={disabled}
    >
      {elements.map(element => (
        <Option key={element.id} value={element.id}>
          {element.name}
        </Option>
      ))}
    </Select>
  );
};

const EstimationComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { tasks, currencyCode } = useAppSelector(state => state.schedule);
  
  // State declarations
  const [activeKeys, setActiveKeys] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState<{[key: string]: boolean}>({});
  const [selectedResources, setSelectedResources] = useState<{[key: string]: boolean}>({});
  const [selectedElements, setSelectedElements] = useState<{[key: string]: string}>({});

  // Helper functions
  const getElementOptionsForTask = (task: any): StructuralElement[] => {
    const taskName = task.name.toLowerCase();
    
    // Add specific checks for F01 - Foundation sections
    if (task.id === 'F00' || task.id === 'F01') {
      return structuralElements.foundations;
    }
    
    // Foundation selection in FD1
    if (task.id === 'FD1' || task.name.includes('Foundation')) {
      return structuralElements.foundations;
    }
  
    // Individual footings (F01, F02, etc)
    if (task.id?.startsWith('F') && taskName.includes('footing')) {
      return structuralElements.foundations;
    }
  
    // Rest remains same
    if (taskName.includes('plinth') && taskName.includes('length')) return structuralElements.plinthBeams;
    if (taskName.includes('column')) return structuralElements.columns;
    if (taskName.includes('beam') && !taskName.includes('plinth')) return structuralElements.beams;
    return [];
  };

  const calculateElementVolume = (dimensions: ElementDimensions): number => {
    return dimensions.length * dimensions.breadth * dimensions.thickness;
  };

  const getElementCost = (taskId: string): number => {
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
    const initializeSelections = (tasks: Task[]) => {
      const taskSelections: {[key: string]: boolean} = {};
      const resourceSelections: {[key: string]: boolean} = {};
      const elementSelections: {[key: string]: string} = {};
  
      const processTask = (task: any) => {
        taskSelections[task.id] = true;
        // Initialize element selection from task if it exists
        if (task.selectedElementId) {
          elementSelections[task.id] = task.selectedElementId;
        }
        task.resources?.forEach((resource: { id: string | number; }) => {
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
  function handleChange(e: any, id: string, field: string, type: string = 'task') {
    dispatch(updateTaskField({
      id: id,
      field: field,
      value: e.target.valueAsNumber,
      type
    }));
  }

  // Handle element selection
  const handleElementSelection = (taskId: string, elementId: string) => {
    // Update the selected element state
    setSelectedElements(prev => ({
      ...prev,
      [taskId]: elementId
    }));
  
    // Find the selected element
    let selectedElement = null;
    Object.values(structuralElements).forEach(category => {
      const found = category.find(element => element.id === elementId);
      if (found) selectedElement = found;
    });
  
    if (selectedElement) {
      // Update the task with the selected element details
      dispatch(updateTaskField({
        id: taskId,
        field: 'selectedElementId',
        value: elementId,
        type: 'task'
      }));
  
      // Update dimensions and cost
      const volume = calculateElementVolume(selectedElement.dimensions);
      const elementCost = volume * selectedElement.rate * (tasks.find(t => t.id === taskId)?.numbersRequired || 1);
  
      // Update task with new element cost
      dispatch(updateTaskField({
        id: taskId,
        field: 'elementCost',
        value: elementCost,
        type: 'task'
      }));
  
      // Also update dimensions
      dispatch(updateTaskField({
        id: taskId,
        field: 'dimensions',
        value: selectedElement.dimensions,
        type: 'task'
      }));
    }
  };

  // Enhanced task selection handler
  const handleTaskSelection = (taskId: string, checked: boolean) => {
    // Find task and its level
    const findTaskAndLevel = (tasks: any[], id: string, level: number = 0): [any, number] => {
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
    const getAllDescendants = (task: any) => {
      let taskIds: string[] = [task.id];
      let resourceIds: string[] = [];
  
      if (task.resources?.length) {
        resourceIds = [...resourceIds, ...task.resources.map((r: any) => r.id)];
      }
  
      if (task.children?.length) {
        task.children.forEach((child: any) => {
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
      const parent = tasks.find(t => t.children?.some((c: { id: string; }) => c.id === taskId));
      if (parent) {
        const allSiblingsSelected = parent.children.every((child: { id: string; }) => 
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
  const calculateTaskCost = (task: any): number => {
    if (!selectedTasks[task.id]) return 0;

    let cost = 0;
    
    // Add structural element cost
    cost += getElementCost(task.id);
    
    // Add resource costs
    task.resources?.forEach((resource: { id: string | number; totalCost: number; }) => {
      if (selectedResources[resource.id] && resource.totalCost) {
        cost += resource.totalCost;
      }
    });

    // Add children costs
    task.children?.forEach((child: any) => {
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
      render: (id: string) => <Text strong>{id}</Text>
    },
    {
      title: '', // Empty cell for alignment
      dataIndex: 'spacer',
      width: 20
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
      render: (value: number, record: Resource) => (
        <InputNumber
          className="w-[100px] h-[16px] input-ghost input-bordered"
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
      render: (value: number, record: Resource) => (
        <InputNumber
          className="w-[100px] h-[16px] input-ghost input-bordered"
          value={value}
          onChange={(val) => handleChange({ target: { valueAsNumber: val }}, record.id, 'breadth')}
          disabled={!record?.length && record?.length !== 0}
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
      render: (value: number, record: Resource) => (
        <InputNumber
          className="w-[100px] h-[16px] input-ghost input-bordered"
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
      render: (value: number, record: Resource) => (
        <InputNumber
          className="w-[100px] h-[16px] input-ghost input-bordered"
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
      render: (value: number, record: Resource) => (
        <InputNumber
          className="w-[100px] h-[16px] input-ghost input-bordered"
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
      title: 'Perimeter',
      dataIndex: 'perimeter',
      width: 100,
    },
    {
      title: 'Numbers Required',
      dataIndex: 'numbersRequired',
      width: 150,
      render: (value: number, record: Resource) => {
        const isExcavation = record.resource?.toLowerCase().includes('excavation');
        return (
          <InputNumber
            className="w-[100px] h-[16px] input-ghost input-bordered"
            value={value}
            onChange={(val) => handleChange({ target: { valueAsNumber: val }}, record.id, 'numbersRequired')}
            disabled={!isExcavation && !record?.numbersRequired && record?.numbersRequired !== 0}
            min={0}
          />
        );
      }
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
      render: (_: any, record: Resource) => (
        record.totalCost ? (
          <Text>{currencyCode} {record.totalCost.toFixed(2)}</Text>
        ) : null
      )
    }
  ];

  // Render resources table
  const renderResources = (resources: Resource[], parentTaskId: string) => {
    if (!selectedTasks[parentTaskId]) return null;

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
  const taskTree = React.useMemo(() => {
    const buildTaskHierarchy = (tasks: Task[]) => {
      const taskMap = new Map();
      const rootTasks: Task[] = [];

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

  // Render nested tasks
  const renderTaskHeader = (task: any) => {
    const taskCost = calculateTaskCost(task);
    const elementOptions = getElementOptionsForTask(task);
    // Modify foundation check
    const isFoundationSection = task.id === 'F00' || task.id === 'F01' || 
                               task.id === 'FD1' || task.name.includes('Footing');
    
    return (
      <Space className="w-full flex items-center">
        <Checkbox
          checked={selectedTasks[task.id]}
          onChange={(e) => handleTaskSelection(task.id, e.target.checked)}
        />
        
        {task.children?.length > 0 && (
          <Button
            type="text"
            icon={activeKeys.includes(task.id) ? 
              <CaretDownOutlined /> : 
              <CaretRightOutlined />
            }
            onClick={() => {
              if (activeKeys.includes(task.id)) {
                setActiveKeys(prev => prev.filter(id => id !== task.id));
              } else {
                setActiveKeys(prev => [...prev, task.id]);
              }
            }}
          />
        )}
  
        <Text strong>{task.id} - {task.name}</Text>
  
        {/* Modified condition for showing Select */}
        {(isFoundationSection && elementOptions.length > 0) && (
         <Select
         className="ml-2 w-64"
         value={selectedElements[task.id] || undefined}  // Changed this line
         onChange={(value) => handleElementSelection(task.id, value)}
         placeholder="Select foundation type"
         disabled={!selectedTasks[task.id]}
       >
         {elementOptions.map(element => (
           <Option key={element.id} value={element.id}>
             {element.name}
           </Option>
         ))}
       </Select>
        )}
        {/* Rest of the code remains same */}
        {task.type === 'project' && (
          <>
            <Text type="secondary">Numbers Required:</Text>
            <InputNumber
              className="w-[100px] h-[16px] input-ghost input-bordered"
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
          <Tag color="success">
            <DollarOutlined /> {currencyCode} {taskCost.toFixed(2)}
          </Tag>
        )}
      </Space>
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
  // Main component return
  return (
    <Layout className="estimation-layout">
      <Content className="estimation-content">
        <Spin spinning={loading}>
          {taskTree.map((task: any) => {
            const taskCost = calculateTaskCost(task);
            const elementOptions = getElementOptionsForTask(task);
            
            return (
              <Card
                key={task.id}
                className="task-card"
                title={
                  <Space>
                    <Checkbox
                      checked={selectedTasks[task.id]}
                      onChange={(e) => handleTaskSelection(task.id, e.target.checked)}
                    />
                    <Text strong>{task.id} - {task.name}</Text>
                    
                    {elementOptions.length > 0 && (
                      <Select
                        className="ml-2 w-64"
                        value={selectedElements[task.id]}
                        onChange={(value) => handleElementSelection(task.id, value)}
                        placeholder={`Select ${elementOptions[0].category.toLowerCase()} type`}
                        disabled={!selectedTasks[task.id]}
                      >
                        {elementOptions.map(element => (
                          <Option key={element.id} value={element.id}>
                            {element.name}
                          </Option>
                        ))}
                      </Select>
                    )}
                    
                    {task.type === 'project' && (
                      <>
                        <Text type="secondary">Numbers Required:</Text>
                        <InputNumber
                          className="w-[100px] h-[16px] input-ghost input-bordered"
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
                      <Tag color="success">
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
                    onChange={keys => setActiveKeys(keys as string[])}
                  >
                    {task.children?.map((child: any) => renderNestedTasks(child))}
                  </Collapse>
                )}
              </Card>
            );
          })}
        </Spin>
      </Content>
    </Layout>
  );
};

export default EstimationComponent;
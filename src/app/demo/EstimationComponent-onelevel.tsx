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
  Checkbox
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

const { Text } = Typography;
const { Panel } = Collapse;
const { Content } = Layout;

const EstimationComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { tasks, currencyCode } = useAppSelector(state => state.schedule);
  const [activeKeys, setActiveKeys] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState<{[key: string]: boolean}>({});
  const [selectedResources, setSelectedResources] = useState<{[key: string]: boolean}>({});

  // Initialize selections
  useEffect(() => {
    const initializeSelections = (tasks: Task[]) => {
      const taskSelections: {[key: string]: boolean} = {};
      const resourceSelections: {[key: string]: boolean} = {};

      const processTask = (task: any) => {
        taskSelections[task.id] = true;
        task.resources?.forEach(resource => {
          resourceSelections[resource.id] = true;
        });
        task.children?.forEach(processTask);
      };

      tasks.forEach(processTask);
      setSelectedTasks(taskSelections);
      setSelectedResources(resourceSelections);
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

  // Enhanced task selection handler
  const handleTaskSelection = (taskId: string, checked: boolean) => {
    // Get all descendant tasks and resources
    const getAllDescendants = (task: any) => {
      let taskIds: string[] = [task.id];
      let resourceIds: string[] = [];

      // Get resources
      if (task.resources?.length) {
        resourceIds = [...resourceIds, ...task.resources.map((r: any) => r.id)];
      }

      // Get children recursively
      if (task.children?.length) {
        task.children.forEach((child: any) => {
          const { tasks: childTaskIds, resources: childResourceIds } = getAllDescendants(child);
          taskIds = [...taskIds, ...childTaskIds];
          resourceIds = [...resourceIds, ...childResourceIds];
        });
      }

      return { tasks: taskIds, resources: resourceIds };
    };

    // Find the task
    const findTask = (id: string): any => {
      const find = (tasks: any[]): any => {
        for (const task of tasks) {
          if (task.id === id) return task;
          if (task.children) {
            const found = find(task.children);
            if (found) return found;
          }
        }
        return null;
      };
      return find(tasks);
    };

    const task = findTask(taskId);
    if (!task) return;

    // Get all affected IDs
    const { tasks: affectedTaskIds, resources: affectedResourceIds } = getAllDescendants(task);

    // Update selections
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
  };

  // Calculate task cost
  const calculateTaskCost = (task: any): number => {
    if (!selectedTasks[task.id]) return 0;

    let cost = 0;
    
    // Add resource costs
    task.resources?.forEach(resource => {
      if (selectedResources[resource.id] && resource.totalCost) {
        cost += resource.totalCost;
      }
    });

    // Add children costs
    task.children?.forEach(child => {
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
    render: (value: number, record: any) => (
      <InputNumber
        className="w-[100px] h-[16px] input-ghost input-bordered"
        value={value}
        onChange={(val) => handleChange({ target: { valueAsNumber: val }}, record.id, 'length')}
        disabled={(!record?.length && record?.length !== 0) || !selectedTasks[record.parent]}
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
    render: (value: number, record: any) => (
      <InputNumber
        className="w-[100px] h-[16px] input-ghost input-bordered"
        value={value}
        onChange={(val) => handleChange({ target: { valueAsNumber: val }}, record.id, 'breadth')}
        disabled={(!record?.length && record?.length !== 0) || !selectedTasks[record.parent]}
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
    render: (value: number, record: any) => (
      <InputNumber
        className="w-[100px] h-[16px] input-ghost input-bordered"
        value={value}
        onChange={(val) => handleChange({ target: { valueAsNumber: val }}, record.id, 'thickness')}
        disabled={(!record?.thickness && record?.thickness !== 0) || !selectedTasks[record.parent]}
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
    render: (value: number, record: any) => (
      <InputNumber
        className="w-[100px] h-[16px] input-ghost input-bordered"
        value={value}
        onChange={(val) => handleChange({ target: { valueAsNumber: val }}, record.id, 'diameter')}
        disabled={(!record?.diameter && record?.diameter !== 0) || !selectedTasks[record.parent]}
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
    render: (value: number, record: any) => (
      <InputNumber
        className="w-[100px] h-[16px] input-ghost input-bordered"
        value={value}
        onChange={(val) => handleChange({ target: { valueAsNumber: val }}, record.id, 'noOfBars')}
        disabled={(!record?.noOfBars && record?.noOfBars !== 0) || !selectedTasks[record.parent]}
        min={0}
      />
    )
  },
  {
    title: 'Area',
    dataIndex: 'area',
    width: 100
  },
  {
    title: 'Perimeter',
    dataIndex: 'perimeter',
    width: 100
  },
  {
    title: 'Numbers Required',
    dataIndex: 'numbersRequired',
    width: 150,
    render: (value: number, record: any) => {
      const isExcavation = record.resource?.toLowerCase().includes('excavation');
      return (
        <InputNumber
          className="w-[100px] h-[16px] input-ghost input-bordered"
          value={value}
          onChange={(val) => handleChange({ target: { valueAsNumber: val }}, record.id, 'numbersRequired')}
          disabled={(!isExcavation && !record?.numbersRequired && record?.numbersRequired !== 0) || !selectedTasks[record.parent]}
          min={0}
        />
      );
    }
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    width: 120
  },
  {
    title: 'Rate',
    dataIndex: 'rate',
    width: 120
  },
  {
    title: 'Units',
    dataIndex: 'units',
    width: 100
  },
  {
    title: 'Cost',
    fixed: 'right',
    width: 120,
    render: (_: any, record: any) => (
      record.totalCost && selectedTasks[record.parent] ? (
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
  const renderNestedTasks = (task: any) => {
    const hasResources = task.resources?.length > 0;
    const hasChildren = task.children?.length > 0;
    const taskCost = calculateTaskCost(task);
    const isParentTask = task.type === 'project' || !task.parent;

    return (
      <Panel
        key={task.id}
        header={
          <Space>
            {isParentTask && (
              <Checkbox
                checked={selectedTasks[task.id]}
                onChange={(e) => handleTaskSelection(task.id, e.target.checked)}
              />
            )}
            {hasChildren && (
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
        className="task-panel"
      >
        {selectedTasks[task.id] && (
          <>
            {hasResources && renderResources(task.resources, task.id)}
            {hasChildren && (
              <Collapse ghost className="task-collapse">
                {task.children.map(child => renderNestedTasks(child))}
              </Collapse>
            )}
          </>
        )}
      </Panel>
    );
  };

  // Return statement remains the same...
  return (
    <Layout className="estimation-layout">
      <Content className="estimation-content">
        <Spin spinning={loading}>
          {taskTree.map((task: any) => {
            const taskCost = calculateTaskCost(task);
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
                    {task.children.map(child => renderNestedTasks(child))}
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
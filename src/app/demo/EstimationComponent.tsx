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
  Spin
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
  const [loading, setLoading] = useState(true);

  // Handle field changes
  function handleChange(e, id: string, field: string, type: string = 'task') {
    dispatch(updateTaskField({
      id: id,
      field: field,
      value: e.target.valueAsNumber,
      type
    }));
  }

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

  useEffect(() => {
    setLoading(true);
    const rootIds = taskTree.map(task => task.id);
    setActiveKeys(rootIds);
    setLoading(false);
  }, [taskTree]);

  // Render resources table
  const renderResources = (resources: Resource[]) => (
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

  // Render nested tasks recursively
  const renderNestedTasks = (task: any) => {
    const hasResources = task.resources?.length > 0;
    const hasChildren = task.children?.length > 0;

    return (
      <Panel
        key={task.id}
        header={
          <Space>
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
                />
              </>
            )}
            {task.cost && (
              <Tag color="success">
                <DollarOutlined /> {currencyCode} {task.cost.toFixed(2)}
              </Tag>
            )}
          </Space>
        }
        className="task-panel"
      >
        {hasResources && renderResources(task.resources)}
        {hasChildren && (
          <Collapse ghost className="task-collapse">
            {task.children.map(child => renderNestedTasks(child))}
          </Collapse>
        )}
      </Panel>
    );
  };

  return (
    <Layout className="estimation-layout">
      <Content className="estimation-content">
        <Spin spinning={loading}>
          {taskTree.map((task: any) => (
            <Card
              key={task.id}
              className="task-card"
              title={
                <Space>
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
                      />
                    </>
                  )}
                  <Tag color="success">
                    <DollarOutlined /> {currencyCode} {task.cost?.toFixed(2)}
                  </Tag>
                </Space>
              }
            >
              <Collapse
                ghost
                className="task-collapse"
                activeKey={activeKeys}
                onChange={keys => setActiveKeys(keys as string[])}
              >
                {task.children.map(child => renderNestedTasks(child))}
              </Collapse>
            </Card>
          ))}
        </Spin>
      </Content>
    </Layout>
  );
};

export default EstimationComponent;
import {
  CaretDownOutlined,
  CaretUpOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  CaretRightOutlined
} from '@ant-design/icons';
import { Checkbox, DatePicker, Input, Select, Button,Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import {
  updateEstimateRestore,
  updateTaskFromDrawing,
  updateTaskProgress,
  updateTaskStartDate,
  updateTasksDuration
} from '../app/features/scheduleSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

import type { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';
import { getEstimate } from '../app/services/axios';
import { useSearchParams } from 'react-router-dom';
import './Schedule.css';

const { Option } = Select;

const ScheduleComponent = ({ setEstimateName }) => {
  const [params] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [expandedRows, setExpandedRows] = useState<string[]>([]);
  const [selectedTaskTypes, setSelectedTaskTypes] = useState<string[]>([]);
  const { tasks, currencyCode, drawingData } = useAppSelector(state => state.schedule);
  const dispatch = useAppDispatch();

  // Load estimate data
  useEffect(() => {
    const estimate = params.get('estimate');
    if (estimate) {
      setLoading(true);
      getEstimate(estimate, null)
        .then((res:any) => {
          if (res.data.estimate._id) {
            localStorage.setItem("estimateId", JSON.stringify(res.data.estimate._id));
          }
          setEstimateName(res.data.estimate.Name);
          if (res.data?.estimate?.Data?.schedule) {
            dispatch(updateEstimateRestore({ Data: res.data.estimate.Data.schedule }));
          }
        })
        .finally(() => setLoading(false));
    }
  }, []);

  // Update tasks based on drawing data
  useEffect(() => {
    if (drawingData.plotLength && drawingData.plotWidth && drawingData.plotArea) {
      dispatch(updateTaskFromDrawing());
    }
  }, [drawingData]);

  // Build task hierarchy
  const buildTaskTree = (tasks) => {
    const taskMap = {};
    const rootTasks = [];

    tasks.forEach(task => {
      taskMap[task.id] = { ...task, children: [] };
    });

    tasks.forEach(task => {
      if (task.parent && taskMap[task.parent]) {
        taskMap[task.parent].children.push(taskMap[task.id]);
      } else {
        rootTasks.push(taskMap[task.id]);
      }
    });

    return rootTasks;
  };

  const handleDurationChange = (id: string, value: number) => {
    dispatch(updateTasksDuration({ id, duration: value }));
  };

  const handleStartDateChange = (id: string, date: string) => {
    dispatch(updateTaskStartDate({ id, newDate: date }));
  };

  const handleProgressChange = (id: string, checked: boolean) => {
    dispatch(updateTaskProgress({ id, progress: checked ? 1 : 0 }));
  };

  // Get unique task types for filter
  const taskTypes = Array.from(new Set(tasks.map(task => task.type)));

  const columns: ColumnsType<any> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 150,
      fixed: 'left',
      className: 'id-column',
      render: (text, record) => (
        <Space className="id-cell">
          <span>{text}</span>
          {record.children?.length > 0 && (
            <Button 
              type="text" 
              className="expand-button"
              icon={expandedRows.includes(record.id) ? 
                <CaretDownOutlined className="expand-icon" /> : 
                <CaretRightOutlined className="expand-icon" />
              }
            />
          )}
        </Space>
      )
    },
    {
      title: 'Task Name',
      dataIndex: 'name',
      key: 'name',
      width: 250,
      className: 'task-name-column',
      filters: taskTypes.map(type => ({ text: type, value: type })),
      onFilter: (value, record) => record.type === value
    },
    {
      title: 'Cost',
      dataIndex: 'cost',
      key: 'cost',
      width: 150,
      className: 'cost-column',
      render: (cost) => cost ? (
        <span className="cost-value">
          {currencyCode} {cost.toFixed(2)}
        </span>
      ) : '-'
    },
    {
      title: 'Duration (days)',
      dataIndex: 'duration',
      key: 'duration',
      width: 130,
      className: 'duration-column',
      render: (duration, record) => (
        <Input
          type="number"
          value={duration}
          onChange={(e) => handleDurationChange(record.id, parseFloat(e.target.value))}
          disabled={record.type === 'project' || !record.start}
          className="duration-input"
        />
      )
    },
    {
      title: 'Start Date',
      dataIndex: 'start',
      key: 'start',
      width: 160,
      className: 'date-column',
      render: (date, record) => (
        <DatePicker
          value={date ? dayjs(date) : null}
          onChange={(value) => handleStartDateChange(record.id, value?.format('YYYY-MM-DD') || '')}
          className="date-picker"
        />
      )
    },
    {
      title: 'End Date',
      dataIndex: 'end',
      key: 'end',
      width: 160,
      className: 'date-column',
      render: (date) => (
        <DatePicker
          value={date ? dayjs(date) : null}
          disabled
          className="date-picker"
        />
      )
    },
    {
      title: 'Strategy',
      dataIndex: 'strategy',
      key: 'strategy',
      width: 120,
      className: 'strategy-column',
      render: (strategy) => (
        <Tag color="blue" className={`strategy-tag strategy-${strategy.toLowerCase()}`}>
          {strategy}
        </Tag>
      )
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
      key: 'progress',
      width: 120,
      className: 'progress-column',
      render: (progress, record) => (
        record.type === 'task' ? (
          <Checkbox
            checked={progress === 1}
            onChange={(e) => handleProgressChange(record.id, e.target.checked)}
            className="progress-checkbox"
          />
        ) : (
          <Tag 
            icon={progress > 0 ? 
              <CheckCircleOutlined className="progress-icon complete" /> : 
              <ClockCircleOutlined className="progress-icon pending" />
            } 
            color={progress > 0 ? 'success' : 'default'}
            className="progress-tag"
          >
            {progress}%
          </Tag>
        )
      )
    }
  ];

  const nestedTasks = buildTaskTree(tasks);

  return (
    <div className="schedule-wrapper">
    <Space className="filter-container" wrap>
      <Select
        mode="multiple"
        placeholder="Filter by task type"
        value={selectedTaskTypes}
        onChange={setSelectedTaskTypes}
        className="task-type-filter"
      >
        {taskTypes.map(type => (
          <Option key={type} value={type}>{type}</Option>
        ))}
      </Select>
    </Space>

    <Table
      columns={columns}
      dataSource={nestedTasks}
      loading={loading}
      rowKey="id"
      className="schedule-table"
      scroll={{ x: 1300, y: 'calc(100vh - 300px)' }}
      expandable={{
        expandedRowKeys: expandedRows,
        onExpandedRowsChange: (expandedKeys) => setExpandedRows(expandedKeys as string[]),
      }}
      size="middle"
    />
  </div>
  );
};

export default ScheduleComponent;
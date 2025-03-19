import React, { useState, useEffect } from 'react';
import { Modal, Radio, Row, Col, Card, Space, Button, Tabs, Tag, Typography, Table, Divider } from 'antd';
import { InfoCircleOutlined, CheckCircleFilled, BuildOutlined } from '@ant-design/icons';
import { ConcreteRates } from '../constants/rates';

const { Text, Title } = Typography;
const { TabPane } = Tabs;

const ElementTypeModal = ({ visible, onClose, onSelect, currentElement, taskId }) => {
  // State hooks
  const [category, setCategory] = useState('all');
  const [elementType, setElementType] = useState('');
  const [selectedElement, setSelectedElement] = useState(null);
  const [activeTab, setActiveTab] = useState('select');

  // Define the structural elements with their properties
  const structuralElements = {
    // Foundations
    foundations: [
      {
        id: 'F01',
        name: 'Type 1: 1.2x1.2x0.3',
        dimensions: { length: 1.2, breadth: 1.2, thickness: 0.3 },
        rate: ConcreteRates.M20.Cum,
        category: 'Foundation',
        description: 'Small isolated footing suitable for light loads',
        material: 'M20 Concrete'
      },
      {
        id: 'F02',
        name: 'Type 2: 1.5x1.5x0.3',
        dimensions: { length: 1.5, breadth: 1.5, thickness: 0.3 },
        rate: ConcreteRates.M20.Cum,
        category: 'Foundation',
        description: 'Medium isolated footing for moderate loads',
        material: 'M20 Concrete'
      },
      {
        id: 'F03',
        name: 'Type 3: 1.8x1.8x0.4',
        dimensions: { length: 1.8, breadth: 1.8, thickness: 0.4 },
        rate: ConcreteRates.M20.Cum,
        category: 'Foundation',
        description: 'Medium-large isolated footing for heavier loads',
        material: 'M20 Concrete'
      },
      {
        id: 'F04',
        name: 'Type 4: 2.0x2.0x0.4',
        dimensions: { length: 2.0, breadth: 2.0, thickness: 0.4 },
        rate: ConcreteRates.M20.Cum,
        category: 'Foundation',
        description: 'Large isolated footing for heavy loads',
        material: 'M20 Concrete'
      },
      {
        id: 'F05',
        name: 'Type 5: 2.5x2.5x0.4',
        dimensions: { length: 2.5, breadth: 2.5, thickness: 0.4 },
        rate: ConcreteRates.M20.Cum,
        category: 'Foundation',
        description: 'Extra large isolated footing for very heavy loads',
        material: 'M20 Concrete'
      },
      {
        id: 'F06',
        name: 'Type 6: 3.0x3.0x0.5',
        dimensions: { length: 3.0, breadth: 3.0, thickness: 0.5 },
        rate: ConcreteRates.M20.Cum,
        category: 'Foundation',
        description: 'Heavy duty isolated footing for major structural loads',
        material: 'M20 Concrete'
      }
    ],
    columns: [
      {
        id: 'GCT1',
        name: 'Type 1: 3x0.23x0.23',
        dimensions: { length: 3, breadth: 0.23, thickness: 0.23 },
        rate: ConcreteRates.M25.Cum,
        category: 'Column',
        description: 'Standard residential column for light loads',
        material: 'M25 Concrete'
      },
      {
        id: 'GCT2',
        name: 'Type 2: 3x0.3x0.3',
        dimensions: { length: 3, breadth: 0.3, thickness: 0.3 },
        rate: ConcreteRates.M25.Cum,
        category: 'Column',
        description: 'Medium-duty column for moderate loads',
        material: 'M25 Concrete'
      },
      {
        id: 'GCT3',
        name: 'Type 3: 3x0.3x0.45',
        dimensions: { length: 3, breadth: 0.3, thickness: 0.45 },
        rate: ConcreteRates.M25.Cum,
        category: 'Column',
        description: 'Heavy-duty column for significant structural loads',
        material: 'M25 Concrete'
      }
    ],
    beams: [
      {
        id: 'L1BT1',
        name: 'Type 1: 3x0.23x0.45',
        dimensions: { length: 3, breadth: 0.23, thickness: 0.45 },
        rate: ConcreteRates.M25.Cum,
        category: 'Beam',
        description: 'Standard residential beam for moderate spans',
        material: 'M25 Concrete'
      },
      {
        id: 'L1BT2',
        name: 'Type 2: 3x0.3x0.6',
        dimensions: { length: 3, breadth: 0.3, thickness: 0.6 },
        rate: ConcreteRates.M25.Cum,
        category: 'Beam',
        description: 'Heavy-duty beam for longer spans and higher loads',
        material: 'M25 Concrete'
      }
    ],
    plinthBeams: [
      {
        id: 'PBL1',
        name: 'Type 1: L/2x0.23x0.23',
        dimensions: { length: 0, breadth: 0.23, thickness: 0.23 },
        rate: ConcreteRates.M20.Cum,
        category: 'Plinth Beam',
        description: 'Small plinth beam for light structures',
        material: 'M20 Concrete'
      },
      {
        id: 'PBL2',
        name: 'Type 2: L/2x0.26x0.26',
        dimensions: { length: 0, breadth: 0.26, thickness: 0.26 },
        rate: ConcreteRates.M20.Cum,
        category: 'Plinth Beam',
        description: 'Medium plinth beam for standard constructions',
        material: 'M20 Concrete'
      },
      {
        id: 'PBL3',
        name: 'Type 3: L/2x0.30x0.30',
        dimensions: { length: 0, breadth: 0.30, thickness: 0.30 },
        rate: ConcreteRates.M20.Cum,
        category: 'Plinth Beam',
        description: 'Large plinth beam for heavier structures',
        material: 'M20 Concrete'
      },
      {
        id: 'PBL4',
        name: 'Type 4: L/2x0.30x0.45',
        dimensions: { length: 0, breadth: 0.30, thickness: 0.45 },
        rate: ConcreteRates.M20.Cum,
        category: 'Plinth Beam',
        description: 'Heavy-duty plinth beam for significant structural requirements',
        material: 'M20 Concrete'
      }
    ]
  };

  // Mapping of categories for convenient access in UI
  const categories = {
    'Foundation': structuralElements.foundations,
    'Column': structuralElements.columns, 
    'Beam': structuralElements.beams,
    'Plinth Beam': structuralElements.plinthBeams
  };

  // Get element options based on task ID
  const getElementOptionsForTask = (taskId) => {
    if (!taskId) return [];
    
    // Handle specific task IDs
    switch(taskId) {
      case 'F01':
        return structuralElements.foundations;
      case 'PT1L0':
      case 'PT1B0':
        return structuralElements.plinthBeams;
      case 'GCT1':
        return structuralElements.columns;
      case 'L1BT1':
        return structuralElements.beams;
      default:
        break;
    }
    
    // If no specific match, try to determine by task ID pattern
    if (taskId.startsWith('F0')) {
      return structuralElements.foundations;
    }
    if (taskId.startsWith('PT1')) {
      return structuralElements.plinthBeams;
    }
    if (taskId.startsWith('GCT')) {
      return structuralElements.columns;
    }
    if (taskId.startsWith('L1BT')) {
      return structuralElements.beams;
    }
    
    return Object.values(structuralElements).flat();
  };

  // Calculate volume and cost for an element
  const calculateElementDetails = (element) => {
    if (!element) return { volume: 0, cost: 0 };
    
    const volume = element.dimensions.length * element.dimensions.breadth * element.dimensions.thickness;
    const cost = volume * element.rate;
    
    return { volume, cost };
  };

  // Initialize with current element if provided
  useEffect(() => {
    if (currentElement) {
      setElementType(currentElement);
      
      // Find the element in our data structure
      for (const category in structuralElements) {
        const found = structuralElements[category].find(el => el.id === currentElement);
        if (found) {
          setSelectedElement(found);
          setCategory(found.category);
          break;
        }
      }
    } else {
      // Set default category based on task ID
      const options = getElementOptionsForTask(taskId);
      if (options && options.length > 0) {
        setCategory(options[0].category);
      } else {
        setCategory('all');
      }
    }
  }, [currentElement, taskId, visible]);

  // Columns for the comparison table
  const detailColumns = [
    {
      title: 'Property',
      dataIndex: 'property',
      key: 'property',
      width: '30%',
      render: (text) => <Text strong>{text}</Text>
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
      width: '70%',
    },
  ];

  // Generate data for the details table
  const getElementDetailsData = (element) => {
    if (!element) return [];
    
    const { volume, cost } = calculateElementDetails(element);
    
    return [
      { key: '1', property: 'Element Type', value: element.name },
      { key: '2', property: 'Category', value: element.category },
      { key: '3', property: 'Material', value: element.material || (element.category === 'Foundation' || element.category === 'Plinth Beam' ? 'M20 Concrete' : 'M25 Concrete') },
      { key: '4', property: 'Dimensions', value: `${element.dimensions.length}m × ${element.dimensions.breadth}m × ${element.dimensions.thickness}m` },
      { key: '5', property: 'Volume', value: `${volume.toFixed(3)} m³` },
      { key: '6', property: 'Rate', value: `₹${element.rate.toFixed(2)} per m³` },
      { key: '7', property: 'Estimated Cost (per unit)', value: `₹${cost.toFixed(2)}` },
      { key: '8', property: 'Description', value: element.description || 'No description available' },
    ];
  };

  return (
    <Modal
      title={
        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
          <span>Select Element Type</span>
          {taskId && <Tag color="blue" style={{ marginLeft: '8px' }}>Task: {taskId}</Tag>}
        </div>
      }
      open={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>Cancel</Button>,
        <Button 
          key="submit" 
          type="primary"
          onClick={() => {
            onSelect(elementType);
            onClose();
          }}
          disabled={!elementType}
        >
          {currentElement ? 'Update Element' : 'Select Element'}
        </Button>
      ]}
      width={800}
    >
      <Tabs 
        activeKey={activeTab} 
        onChange={setActiveTab}
        style={{ marginBottom: '20px' }}
      >
        <TabPane tab="Select Element" key="select">
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Radio.Group 
              value={category} 
              onChange={e => setCategory(e.target.value)}
              optionType="button"
              buttonStyle="solid"
              style={{ marginBottom: '16px' }}
            >
              <Radio.Button value="all">All Types</Radio.Button>
              {Object.keys(categories).map(type => (
                <Radio.Button key={type} value={type}>{type}</Radio.Button>
              ))}
            </Radio.Group>

            <Row gutter={[16, 16]}>
              {Object.entries(categories)
                .filter(([key]) => category === 'all' || key === category)
                .map(([type, elements]) => (
                  <Col key={type} xs={24} md={12}>
                    <Card 
                      title={<span style={{ fontWeight: 'bold' }}>{type}</span>} 
                      className="element-type-card"
                      headStyle={{ backgroundColor: '#f5f5f5' }}
                    >
                      {elements.map(element => (
                        <div 
                          key={element.id}
                          className={`p-3 mb-3 rounded cursor-pointer`}
                          style={{ 
                            padding: '12px', 
                            marginBottom: '12px', 
                            border: elementType === element.id ? '2px solid #1890ff' : '1px solid #d9d9d9',
                            borderRadius: '4px',
                            backgroundColor: elementType === element.id ? '#e6f7ff' : 'white',
                            cursor: 'pointer'
                          }}
                          onClick={() => {
                            setElementType(element.id);
                            setSelectedElement(element);
                          }}
                        >
                          <Row justify="space-between" align="middle">
                            <Col span={16}>
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                {elementType === element.id && (
                                  <CheckCircleFilled style={{ color: '#1890ff', marginRight: '8px' }} />
                                )}
                                <Text strong>{element.name}</Text>
                              </div>
                              <div>
                                <Text type="secondary">{element.description || ''}</Text>
                              </div>
                            </Col>
                            <Col span={8} style={{ textAlign: 'right' }}>
                              <Tag color="blue">
                                {element.dimensions.length}×{element.dimensions.breadth}×{element.dimensions.thickness}m
                              </Tag>
                            </Col>
                          </Row>
                        </div>
                      ))}
                    </Card>
                  </Col>
                ))}
            </Row>
          </Space>
        </TabPane>

        <TabPane tab="Element Details" key="details" disabled={!selectedElement}>
          {selectedElement && (
            <div>
              <div style={{ marginBottom: '16px', padding: '16px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
                <Title level={4}>{selectedElement.name}</Title>
                <div style={{ marginTop: '8px' }}>
                  <Tag color="blue">{selectedElement.category}</Tag>
                  <Tag color="green">{selectedElement.category === 'Foundation' || selectedElement.category === 'Plinth Beam' ? 'M20 Concrete' : 'M25 Concrete'}</Tag>
                </div>
                <Text style={{ display: 'block', marginTop: '8px' }}>{selectedElement.description || ''}</Text>
              </div>
              
              <Divider orientation="left">Technical Specifications</Divider>
              
              <Table 
                columns={detailColumns} 
                dataSource={getElementDetailsData(selectedElement)} 
                pagination={false}
                size="middle"
                bordered
              />
            </div>
          )}
        </TabPane>
      </Tabs>
    </Modal>
  );
};

export default ElementTypeModal;
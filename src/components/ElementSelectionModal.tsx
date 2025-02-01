import { Modal, Radio, Row, Col, Space, Button } from 'antd';
import { useState, useEffect } from 'react';
import { ConcreteRates } from '../constants/rates';

interface ElementTypeModalProps {
 visible: boolean;
 onClose: () => void;
 onSelect: (elementId: string) => void;
 taskId?: string;
 currentTask?: any;
}

const ElementTypeModal: React.FC<ElementTypeModalProps> = ({ 
 visible, 
 onClose, 
 onSelect, 
 taskId,
 currentTask
}) => {
 const [elementType, setElementType] = useState('');

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

 const getModalTitle = (taskId: string) => {
  if(!taskId) return 'Select Type';
  
  if(taskId.startsWith('F')) return 'Select Foundation Type';
  if(taskId.includes('GCT')) return 'Select Column Type';
  if(taskId.includes('BT')) return 'Select Beam Type';
  if(taskId.includes('PB')) return 'Select Plinth Beam Type';
  
  return 'Select Type';
 };

 const getElementCategory = (taskId: string) => {
  if (!taskId) return '';

  // Match exact task IDs first
  switch(taskId) {
    case 'SCL1': 
    case 'OTRC':
    case 'OTBW':
      return 'overheadTank';
    case 'ELE0':
      return 'elevatorCore';
    case 'FFGL1':
    case 'SFGL1':
      return 'stairFlights';
  }

  // Then check prefixes
  if (taskId.startsWith('F0')) return 'foundations';
  if (taskId.startsWith('PT1L')) return 'plinthBeamsLength';
  if (taskId.startsWith('PT1B')) return 'plinthBeamsBreadth';
  if (taskId.startsWith('GCT')) return 'columns';
  if (taskId.startsWith('L1BT')) return 'beams';

  return '';
};

 const getElements = () => {
   if (!taskId) return [];
   const category = getElementCategory(taskId);
   return structuralElements[category] || [];
 };

 const elements = getElements();

 return (
   <Modal
   title={getModalTitle(taskId)}
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
         Select
       </Button>
     ]}
     width={600}
   >
     <div className="element-options">
       {elements.map(element => (
         <Radio.Button
           key={element.id}
           checked={elementType === element.id}
           onClick={() => setElementType(element.id)} 
           className="w-full mb-2"
         >
           <Row justify="space-between">
             <Col>{element.name}</Col>
             <Col>
               {element.dimensions.length}x
               {element.dimensions.breadth}x
               {element.dimensions.thickness}
             </Col>
           </Row>
         </Radio.Button>
       ))}
     </div>
   </Modal>
 );
};

export default ElementTypeModal;
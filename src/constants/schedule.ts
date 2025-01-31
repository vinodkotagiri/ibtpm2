import { footings, plinthBeamBreadth, plinthBeamLength } from './resourceTypes'
import {Task} from './types'

let tasks:Task[]=[
  {
    id:'PROJ',
    name:'Project iBuiltup Tech Summary',
    start:'',
    end:'',
    duration:0,
    cost:0,
    strategy:'FS',
    dependencies:[],
    type:'project',
    progress:0,
    hideChildren:false,    
  },
  {
    id:'PCON',
    name:'Pre-Construction',
    start:'',
    end:'',
    duration:0,
    cost:0,
    strategy:'FS',
    dependencies:[],
    type:'project',
    progress:0,
    hideChildren:false,
    parent:'PROJ'
  },
  {
    id:'PC1',
    name:'Design & Contract',
    start:'',
    end:'',
    duration:0,
    cost:0,
    strategy:'FF',
    dependencies:[],
    type:'project',
    progress:0,
    hideChildren:false,
    parent:'PCON'
  },
  {
    id:'PC2',
    name:'Floor Plan Design at IBT',
    start:'',
    end:'',
    duration:2,
    cost:0,
    strategy:'SS',
    dependencies:[],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'PC1'
  },
  {
    id:'PC3',
    name:'Contract and Estimation details',
    start:'',
    end:'',
    duration:5,
    cost:0,
    strategy:'FS',
    dependencies:['PC2'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'PC1'
  },
    {
    id:'PC4',
    name:'City Approval & Issue Contract',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FF',
    dependencies:['PC3'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'PC1'
  }, 
  {
    id:'CON',
    name:'Construction',
    start:'',
    end:'',
    duration:0,
    cost:0,
    strategy:'SS',
    dependencies:[],
    type:'project',
    progress:0,
    hideChildren:false,
    parent:'PROJ'
  },     
  {
    id:'SP0',
    name:'Site Preparation',
    start:'',
    end:'',
    duration:0,
    cost:0,
    strategy:'FS',
    dependencies:[],
    type:'project',
    progress:0,
    hideChildren:false,
    parent:'CON'
  },
  {
    id:'SP1',
    name:'Plot Survey and Marking',
    start:'',
    end:'',
    duration:2,
    cost:0,
    strategy:'FS',
    dependencies:['PC3'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'SP0'
  },  
  {
    id:'SP2',
    name:'Clean-up and Fencing',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['SP1'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'SP0',
    resources:[]
  },
  {
    id:'SP3',
    name:'Excavation',
    start:'',
    end:'',
    duration:3,
    cost:0,
    numbersRequired:16,    
    strategy:'FS',
    dependencies:['SP2'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'SP0',
    resources:[],
  },
  {
    id:'SP4',
    name:'Shoring and Protection',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['SP3'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'SP0',
    resources:[],
  },
  {
    id:'SP5',
    name:'Termite Treatment',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['SP4'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'SP0',
    resources:[],
  },
  {
    id:'SP6',
    name:'Curing',
    start:'',
    end:'',
    duration:4,
    cost:0,
    strategy:'FS',
    dependencies:['SP5'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'SP0',
    resources:[],
  },
  {
    id:'FD1',
    name:'Foundation',
    start:'',
    end:'',
    duration:0,
    cost:0,
    strategy:'FS',
    dependencies:[],
    type:'project',
    progress:0,
    hideChildren:false,
    parent:'CON'
  },
  {
    id:'F00',
    name:'Footings',
    start:'',
    end:'',
    duration:0,
    cost:0,
    strategy:'FS',
    dependencies:[],
    type:'project',
    progress:0,
    hideChildren:false,
    parent:'FD1'
  },
//FOOTINGS START
// FOOTINGS END
  {
    id:'FL0',
    name:'Filling',
    start:'',
    end:'',
    duration:2,
    cost:0,
    numbersRequired:16,
    strategy:'FS',
    dependencies:['FT604'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'FD1',
    resources:[],
  },
  {
    id:'PBL',
    name:'Plinth Beam Length',
    start:'',
    end:'',
    duration:0,
    cost:0,
    strategy:'FS',
    dependencies:[],
    type:'project',
    progress:0,
    hideChildren:false,
    parent:'FD1'
  },
  
  //PLINT BEAMS LENGTH

  {
    id:'PBB',
    name:'Plinth Beam Breadth',
    start:'',
    end:'',
    duration:0,
    cost:0,
    strategy:'FS',
    dependencies:[],
    type:'project',
    progress:0,
    hideChildren:false,
    parent:'FD1'
  },

  //PLINTH BEAMS BREADTH
  

//MEP//

{
  id:'US0',
  name:'Underground Sewage',
  start:'',
  end:'',
  duration:0,
  cost:0,
  strategy:'FS',
  dependencies:[],
  type:'project',
  progress:0,
  hideChildren:false,
  parent:'CON',
  resources:[],
},

{
  id:'UD1',
  name:'Sewage Tank',
  start:'',
  end:'',
  duration:0,
  cost:0,
  strategy:'FS',
  dependencies:[],
  type:'project',
  progress:0,
  hideChildren:false,
  parent:'US0',
  resources:[],
},
{
  id:'ST0',
  name:'Excavation',
  start:'',
  end:'',
  duration:2,
  cost:0,
  strategy:'FS',
  dependencies:['PT4B4'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'UD1',
  resources:[],
},

{
  id:'ST1',
  name:'Concrete Floor Screed',
  start:'',
  end:'',
  duration:4,
  cost:0,
  strategy:'FS',
  dependencies:['ST0'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'UD1',
  resources:[],
},

{
  id:'ST2',
  name:' Brickwork Length',
  start:'',
  end:'',
  duration:4,
  cost:0,
  numbersRequired:1,
  strategy:'FS',
  dependencies:['ST1'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'UD1',
  resources:[],
},
{
  id:'ST3',
  name:' Brickwork Breadth',
  start:'',
  end:'',
  duration:4,
  cost:0,
  numbersRequired:1,
  strategy:'FS',
  dependencies:['ST2'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'UD1',
  resources:[],
},

{
  id:'ST4',
  name:'Brickwork Baffle Wall',
  start:'',
  end:'',
  duration:4,
  cost:0,
  strategy:'FS',
  dependencies:['ST3'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'UD1',
  resources:[],
},
{
  id:'ST5',
  name:'Plaster',
  start:'',
  end:'',
  duration:4,
  cost:0,
  strategy:'FS',
  dependencies:['ST4'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'UD1',
  resources:[],
},
{
  id:'ST6',
  name:'Concrete Roof',
  start:'',
  end:'',
  duration:4,
  cost:0,
  strategy:'FS',
  dependencies:['ST5'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'UD1',
  resources:[],
},

{
  id:'UD2',
  name:'Sewer PVC Pipes',
  start:'',
  end:'',
  duration:0,
  cost:0,
  numbersRequired:1,
  strategy:'FS',
  dependencies:[],
  type:'project',
  progress:0,
  hideChildren:false,
  parent:'US0',
  resources:[],
},
{
  id:'DC1',
  name:'Install Sewer PVC',
  start:'',
  end:'',
  duration:1,
  cost:0,
  numbersRequired:1,
  strategy:'FS',
  dependencies:['ST5'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'UD2',
  resources:[],
},

{
  id:'DC2',
  name:'Install ConSewer PVC',
  start:'',
  end:'',
  duration:1,
  cost:0,
  numbersRequired:1,
  strategy:'FF',
  dependencies:['DC1'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'UD2',
  resources:[],
},

//under ground water tank //

{
  id:'UW0',
  name:'Underground Water Tank',
  start:'',
  end:'',
  duration:0,
  cost:0,
  strategy:'FS',
  dependencies:[],
  type:'project',
  progress:0,
  hideChildren:false,
  parent:'CON',
  resources:[],
},

{
  id:'UW1',
  name:'Water Tank Construction',
  start:'',
  end:'',
  duration:0,
  cost:0,
  strategy:'FS',
  dependencies:[],
  type:'project',
  progress:0,
  hideChildren:false,
  parent:'UW0',
  resources:[],
},
{
  id:'WT1',
  name:'Excavation',
  start:'',
  end:'',
  duration:2,
  cost:0,
  strategy:'FS',
  dependencies:['ST0'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'UW1',
  resources:[],
},

{
  id:'WT2',
  name:'Concrete Floor Screed',
  start:'',
  end:'',
  duration:1,
  cost:0,
  strategy:'FS',
  dependencies:['WT1'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'UW1',
  resources:[],
},

{
  id:'WT3',
  name:' Brickwork Length',
  start:'',
  end:'',
  duration:2,
  cost:0,
  numbersRequired:1,
  strategy:'FS',
  dependencies:['WT2'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'UW1',
  resources:[],
},

{
  id:'WT4',
  name:'Brickwork Breadth',
  start:'',
  end:'',
  duration:2,
  cost:0,
  numbersRequired:1,
  strategy:'FS',
  dependencies:['WT3'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'UW1',
  resources:[],
},
{
  id:'WT5',
  name:'Plaster',
  start:'',
  end:'',
  duration:2,
  cost:0,
  strategy:'FS',
  dependencies:['WT4'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'UW1',
  resources:[],
},
{
  id:'WT6',
  name:'Concrete Roof',
  start:'',
  end:'',
  duration:1,
  cost:0,
  strategy:'FS',
  dependencies:['WT5'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'UW1',
  resources:[],
},

{
  id:'WTPL1',
  name:'Plumbing',
  start:'',
  end:'',
  duration:0,
  cost:0,
  numbersRequired:1,
  strategy:'FS',
  dependencies:[],
  type:'project',
  progress:0,
  hideChildren:false,
  parent:'UW0',
  resources:[],
},
{
  id:'WTPL2',
  name:'Install Conduits',
  start:'',
  end:'',
  duration:1,
  cost:0,
  strategy:'FS',
  dependencies:['WT5'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'WTPL1',
  resources:[],
},

{
  id:'WTPL3',
  name:'Install Conduits',
  start:'',
  end:'',
  duration:1,
  cost:0,
  strategy:'FF',
  dependencies:['WTPL2'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'WTPL1',
  resources:[],
},
//under ground water tank//
//xxxxxxxxxxxxxxxxxxxxx/////
//Ground Slab CC Floor//
//Ground Slab CC Floor//
{
  id:'GCC',
  name:'Ground CC Floor',
  start:'',
  end:'',
  duration:0,
  cost:0,
  strategy:'FS',
  dependencies:[],
  type:'project',
  progress:0,
  hideChildren:false,
  parent:'CON',
  resources:[],
},
  {
    id:'GP1',
    name:'Ground Slab Filling and compaction',
    start:'',
    end:'',
    duration:2,
    cost:0,
    strategy:'FS',
    dependencies:['PT1B4,PT2B4,PT3B4,PT4B4'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'GCC',
    resources:[],
  },
  {
    id:'GP2',
    name:'Ground Slab Steel (Floor Area)',
    start:'',
    end:'',
    duration:2,
    cost:0,
    strategy:'FS',
    dependencies:['GP1'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'GCC',
    resources:[],
  },

  {
    id:'GP3',
    name:'Ground Slab Concrete (Floor Screed)',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['GP2'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'GCC',
    resources:[],
  },
  {
    id:'GP4',
    name:'Curing',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['GP3'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'GCC',
    resources:[],
  },


  {
    id:'LL1',
    name:'Level-1 Structure',
    start:'',
    end:'',
    duration:0,
    cost:0,
    strategy:'FS',
    dependencies:[],
    type:'project',
    progress:0,
    hideChildren:false,
    parent:'CON'
  },
  {
    id:'L1C',
    name:'Level-1 Columns',
    start:'',
    end:'',
    duration:0,
    cost:0,
    strategy:'FS',
    dependencies:[],
    type:'project',
    progress:0,
    hideChildren:false,
    parent:'LL1'
  },
  {
    id:'GCT1',
    name:'Columns-G-Level1-Typ-1 3x0.23x0.23',
    start:'',
    end:'',
    duration:0,
    cost:0,
    numbersRequired:16,
    
    strategy:'FS',
    dependencies:[],
    type:'project',
    progress:0,
    hideChildren:false,
    parent:'L1C'
  },
  //columns// set-1
  {
    id:'GCT11',
    name:'Columns Steel',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['GP4'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'GCT1'
  },  
  {
    id:'GCT12',
    name:'Columns Formwork',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['GCT11'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'GCT1'
  },
  {
    id:'GCT13',
    name:'Columns Concrete',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['GCT12'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'GCT1'
  },
  //Ground columns// set-1

  //Ground columns// set-2
  {
    id:'GCT2',
    name:'Columns-G=Level1-Typ-2 3x0.3x0.3',
    start:'',
    end:'',
    duration:0,
    cost:0,
    numbersRequired:0,
    required:false,
    strategy:'FS',
    dependencies:[],
    type:'project',
    progress:0,
    hideChildren:false,
    parent:'L1C'
  },
  //columns// set-2
  {
    id:'CT21',
    name:'Columns Steel',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['GP4'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'GCT2'
  },  
  {
    id:'CT22',
    name:'Columns Formwork',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['CT21'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'GCT2'
  },
  {
    id:'CT23',
    name:'Columns Concrete',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['CT22'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'GCT2'
  },
  //end of Ground columns// set-2

    //Ground columns// set-3
    {
      id:'GCT3',
      name:'Columns-G=Level1-Typ-3 3x0.3x0.45',
      start:'',
      end:'',
      duration:0,
      cost:0,
      numbersRequired:1,
      required:false,
      strategy:'FS',
      dependencies:[],
      type:'project',
      progress:0,
      hideChildren:false,
      parent:'L1C'
    },    
    {
      id:'CT31',
      name:'Columns Steel',
      start:'',
      end:'',
      duration:1,
      cost:0,
      strategy:'FS',
      dependencies:['GP4'],
      type:'task',
      progress:0,
      hideChildren:false,
      parent:'GCT3'
    },  
    {
      id:'CT32',
      name:'Columns Formwork',
      start:'',
      end:'',
      duration:1,
      cost:0,
      strategy:'FS',
      dependencies:['CT31'],
      type:'task',
      progress:0,
      hideChildren:false,
      parent:'GCT3'
    },
    {
      id:'CT33',
      name:'Columns Concrete',
      start:'',
      end:'',
      duration:1,
      cost:0,
      strategy:'FS',
      dependencies:['CT32'],
      type:'task',
      progress:0,
      hideChildren:false,
      parent:'GCT3'
    },
    //columns// set-3
    //end of Ground columns// set-3

    //Beam Type-1// 3x0.23x0.45
    {
      id:'L1B',
      name:'Level-1 Beams',
      start:'',
      end:'',
      duration:0,
      cost:0,
      strategy:'FS',
      dependencies:[],
      type:'project',
      progress:0,
      hideChildren:false,
      parent:'LL1'
    },
    {
      id:'L1BT1',
      name:'Beam G-Level1-Typ-1 3x0.23x0.45',
      start:'',
      end:'',
      duration:0,
      cost:0,
      numbersRequired:1,
      
      strategy:'FS',
      dependencies:[],
      type:'project',
      progress:0,
      hideChildren:false,
      parent:'L1B'
    },
  {
    id:'BT11',
    name:'Beam Formwork',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['CT32'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'L1BT1'
  },
  {
    id:'BT12',
    name:'Beam Steel',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['BT11'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'L1BT1'
  },
  {
    id:'BT13',
    name:'Inspection',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['BT12'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'L1BT1'
  },
  {
    id:'BT14',
    name:'Beam Concrete',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['BT13'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'L1BT1'
  },
  //Beam Type-1// 3x0.23x0.45

//Beam Type-2// 3x0.3x0.6
{
  id:'L1BT2',
  name:'Beam G-Level1-Typ-2 3x0.3x0.6',
  start:'',
  end:'',
  duration:0,
  cost:0,
  numbersRequired:1,
  required:false,
  strategy:'FS',
  dependencies:[],
  type:'project',
  progress:0,
  hideChildren:false,
  parent:'L1B'
},
{
id:'BT21',
name:'Beam Formwork',
start:'',
end:'',
duration:1,
cost:0,
strategy:'FS',
dependencies:['CT32'],
type:'task',
progress:0,
hideChildren:false,
parent:'L1BT2'
},
{
id:'BT22',
name:'Beam Steel',
start:'',
end:'',
duration:1,
cost:0,
strategy:'FS',
dependencies:['BT11'],
type:'task',
progress:0,
hideChildren:false,
parent:'L1BT2'
},
{
id:'BT23',
name:'Inspection',
start:'',
end:'',
duration:1,
cost:0,
strategy:'FS',
dependencies:['BT12'],
type:'task',
progress:0,
hideChildren:false,
parent:'L1BT2'
},
{
id:'BT24',
name:'Beam Concrete',
start:'',
end:'',
duration:1,
cost:0,
strategy:'FS',
dependencies:['BT23'],
type:'task',
progress:0,
hideChildren:false,
parent:'L1BT2'
},
//Beam Type-2// 3x0.3x0.6


  //slab//
  {
    id:'SL1',
    name:'Slab Level-1',
    start:'',
    end:'',
    duration:0,
    cost:0,
    strategy:'FS',
    dependencies:[],
    type:'project',
    progress:0,
    hideChildren:false,
    parent:'LL1'
  },
  {
    id:'SLB1',
    name:'Slab Formwork',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['CT32'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'SL1'
  },
  {
    id:'SSB',
    name:'Slab Steel-Bottom',
    start:'',
    end:'',
    duration:0,
    cost:0,
    strategy:'FS',
    dependencies:[],
    type:'project',
    progress:0,
    hideChildren:false,
    parent:'SL1'
  },
  {
    id:'SSL1',
    name:'Slab Steel-Length',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['SLB1'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'SSB'
  },
  {
    id:'SSB1',
    name:'Slab Steel-Breadth',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FF',
    dependencies:['SSL1'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'SSB'
  },
//SLAB MEP 1st Fix START//
{
  id:'L1MEP',
  name:'MEP 1st Fix',
  start:'',
  end:'',
  duration:0,
  cost:0,
  strategy:'FS',
  dependencies:[],
  type:'project',
  progress:0,
  hideChildren:false,
  parent:'SL1'
},
{
  id:'SLB3',
  name:'Slab Electrical',
  start:'',
  end:'',
  duration:1,
  cost:0,
  numbersRequired:1,
  
  strategy:'FS',
  dependencies:['SLB21'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'L1MEP'
},
{
  id:'SLB4',
  name:'Slab Mechanical',
  start:'',
  end:'',
  duration:1,
  cost:0,
  numbersRequired:1,
  required:false,
  strategy:'FS',
  dependencies:['SLB3'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'L1MEP'
},
{
  id:'SLB5',
  name:'Slab Plumbing',
  start:'',
  end:'',
  duration:1,
  cost:0,
  numbersRequired:1,
  
  strategy:'FS',
  dependencies:['SLB4'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'L1MEP'
},
{
  id:'SLB6',
  name:'Slab Firefighting',
  start:'',
  end:'',
  duration:1,
  cost:0,
  numbersRequired:1,
  required:false,
  strategy:'FS',
  dependencies:['SLB5'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'L1MEP'
},
//SLAB MEP 1st Fix END//
  {
    id:'SST',
    name:'Slab Steel-Top',
    start:'',
    end:'',
    duration:0,
    cost:0,
    strategy:'FS',
    dependencies:[],
    type:'project',
    progress:0,
    hideChildren:false,
    parent:'SL1'
  },
  {
    id:'SSL2',
    name:'Slab Steel-Length',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['SLB3'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'SST'
  },
  {
    id:'SLB2',
    name:'Slab Steel-Breadth',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FF',
    dependencies:['SSL2'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'SST'
  },
 
  {
    id:'SLB7',
    name:'Slab Concrete',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['SLB2'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'SL1'
  },
  {
    id:'SLB8',
    name:'Slab Curing',
    start:'',
    end:'',
    duration:7,
    cost:0,
    strategy:'FS',
    dependencies:['SLB7'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'SL1'
  },
  {
    id:'SLB9',
    name:'Remove Formwork',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['SLB8'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'SL1'
  },

  //G-L1 Staircase//
  {
    id:'SCL1',
    name:'Staircase-G-L1',
    start:'',
    end:'',
    duration:0,
    cost:0,
    strategy:'FS',
    
    dependencies:[],
    type:'project',
    progress:0,
    hideChildren:false,
    parent:'LL1'
  },
  {
    id:'FFGL1',
    name:'First Flight-G-L1',
    start:'',
    end:'',
    duration:0,
    cost:0,
    strategy:'FS',
    dependencies:[],
    type:'project',
    progress:0,
    hideChildren:false,
    parent:'SCL1'
  },
  {
    id:'FFG10',
    name:'Foundation Bed',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['SLB8'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'FFGL1'
  },
  {
    id:'FFG11',
    name:'Slab Formwork',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'SS',
    dependencies:['FFG10'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'FFGL1'
  },

  {
    id:'FFG12',
    name:'Waist Slab Steel',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['FFG11'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'FFGL1'
  },
  {
    id:'FFG13',
    name:'Landing Slab',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FF',
    dependencies:['FFG12'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'FFGL1'
  },
  
  {
    id:'FFG14',
    name:'Beam Steel (Landing Portion Support)',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['FFG13'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'FFGL1'
  }, 
  {
    id:'FFG15',
    name:'Staircase Concrete',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['FFG14'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'FFGL1'
  },
  {
    id:'FFG16',
    name:'Staircase Curing',
    start:'',
    end:'',
    duration:7,
    cost:0,
    strategy:'FS',
    dependencies:['FFG15'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'FFGL1'
  },
  {
    id:'FFG17',
    name:'Remove Formwork',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['FFG16'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'FFGL1'
  },

  {
    id:'SFGL1',
    name:'Second Flight-G-L1',
    start:'',
    end:'',
    duration:0,
    cost:0,
    strategy:'FS',
    dependencies:[],
    type:'project',
    progress:0,
    hideChildren:false,
    parent:'SCL1'
  },


  {
    id:'SFG12',
    name:'Formwork 2nd Flight Slab',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FF',
    dependencies:['FFG16'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'SFGL1'
  },
  {
    id:'SFG13',
    name:'Beam Steel (Landing portion)',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['SFG12'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'SFGL1'
  }, 
  {
    id:'SFG14',
    name:'Landing Steel',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FF',
    dependencies:['SFG13'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'SFGL1'
  },

  {
    id:'SFG15',
    name:'Waist Slab Steel',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['SFG14'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'SFGL1'
  },
  {
    id:'SFG16',
    name:'Landing Slab',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FF',
    dependencies:['SFG15'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'SFGL1'
  },
  {
    id:'SFG17',
    name:'Staircase Concrete',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['SFG16'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'SFGL1'
  },
  {
    id:'SFG18',
    name:'Staircase Curing',
    start:'',
    end:'',
    duration:7,
    cost:0,
    strategy:'FS',
    dependencies:['FFG17'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'SFGL1'
  },
  {
    id:'SFG19',
    name:'Remove Formwork',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['FFG18'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'SFGL1'
  },

//G-L1 Staircase

//Elevator Core Wall//
{
  id:'ELE0',
  name:'Elevator Core',
  start:'',
  end:'',
  duration:0,
  cost:0,
  strategy:'FS',
  required:false,
  dependencies:[],
  type:'project',
  progress:0,
  hideChildren:false,
  parent:'LL1'
},
{
  id:'EL11',
  name:'Foundation Columns Steel',
  start:'',
  end:'',
  duration:4,
  cost:0,
  numbersRequired:4,
  strategy:'SS',
  dependencies:['SFG17'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'ELE0'
},
{
  id:'EL12',
  name:'Inspection',
  start:'',
  end:'',
  duration:4,
  cost:0,
  numbersRequired:1,
  strategy:'FS',
  dependencies:['EL11'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'ELE0'
},
{
  id:'EL13',
  name:'Foundation Columns Concrete',
  start:'',
  end:'',
  duration:4,
  cost:0,
  numbersRequired:4,
  strategy:'FF',
  dependencies:['EL12'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'ELE0'
},
{
  id:'EL14',
  name:'Columns Steel',
  start:'',
  end:'',
  duration:4,
  cost:0,
  numbersRequired:4,
  strategy:'SS',
  dependencies:['EL13'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'ELE0'
},
{
  id:'EL15',
  name:'Columns Formwork',
  start:'',
  end:'',
  duration:1,
  cost:0,
  numbersRequired:4,
  strategy:'FS',
  dependencies:['EL14'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'ELE0'
},
{
  id:'EL16',
  name:'Columns Concrete',
  start:'',
  end:'',
  duration:1,
  cost:0,
  numbersRequired:4,
  strategy:'FS',
  dependencies:['EL15'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'ELE0'
},
//Elevator Beams//
{
  id:'EL17',
  name:'Beam Formwork',
  start:'',
  end:'',
  duration:1,
  cost:0,
  numbersRequired:4,
  strategy:'FS',
  dependencies:['EL16'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'ELE0'
},
{
  id:'EL18',
  name:'Beam Steel',
  start:'',
  end:'',
  duration:1,
  cost:0,
  numbersRequired:4,
  strategy:'FS',
  dependencies:['EL17'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'ELE0'
},
{
  id:'EL19',
  name:'Inspection',
  start:'',
  end:'',
  duration:3,
  cost:0,  
  strategy:'FS',
  dependencies:['EL18'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'ELE0'
},
{
  id:'EL110',
  name:'Beam Concrete',
  start:'',
  end:'',
  duration:1,
  cost:0,
  numbersRequired:4,
  strategy:'FS',
  dependencies:['EL19'],
  type:'task',
  progress:0,
  hideChildren:false,
  parent:'ELE0'
},

// CODE WILL BE APPENDEDED HERE BASED ON NO OF FLOORS IN DRAWING

//Overhead Water Tank Concrete//
  {
    id:'OTCW',
    name:'Overhead Tank-1 Shear Walls-4x3',
    start:'',
    end:'',
    duration:0,
    cost:0,
    strategy:'FS',
    required:false,
    dependencies:[],
    type:'project',
    progress:0,
    hideChildren:false,
    parent:'CON'
  },
  {
    id:'OT1',
    name:'Columns Steel-3x0.3x0.3',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['L3SF6'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTCW'
  },
  {
    id:'OT2',
    name:'Columns Formwork',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['OT1'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTCW'
  },
  {
    id:'OT3',
    name:'Columns Concrete',
    start:'',
    end:'',
    duration:1,
    cost:0,
    numbersRequired:4,
    strategy:'FS',
    dependencies:['OT2'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTCW'
  },
  {
    id:'OT4',
    name:'Beams Formwork',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['OT3'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTCW'
  },
  {
    id:'OT5',
    name:'Beams Steel',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['OT4'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTCW'
  },
  {
    id:'OT6',
    name:'Beams Concrete',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['OT5'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTCW'
  },
  {
    id:'OT7',
    name:'Slab Formwork',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['OT6'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTCW'
  },
  {
    id:'OT8',
    name:'Slab Steel-4x3',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['OT6'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTCW'
  },
  {
    id:'OT9',
    name:'Slab Concrete',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['OT7'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTCW'
  },
  {
    id:'OT10',
    name:'Slab Curing',
    start:'',
    end:'',
    duration:7,
    cost:0,
    strategy:'FS',
    dependencies:['OT8'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTCW'
  },
  {
    id:'OT11',
    name:'Shear Walls & Roof Slab Steel-4x3',
    start:'',
    end:'',
    duration:2,
    cost:0,
    strategy:'FS',    
    dependencies:['OT9'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTCW'
  },
  {
    id:'OT12',
    name:'ShearWalls Formwork',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['OT10'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTCW'
  },
  {
    id:'OT13',
    name:'Shear Walls Concrete',
    start:'',
    end:'',
    duration:2,
    cost:0,
    strategy:'FS',
    dependencies:['OT11'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTCW'
  },

  {
    id:'OT14',
    name:'Remove Formwork',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['OT12'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTCW'
  },

  //Overhead Water Tank Brickwalls//
  {
    id:'OTBW',
    name:'Overhead Tank2 Brick Walls',
    start:'',
    end:'',
    duration:0,
    cost:0,
    strategy:'FS',
    required:false,
    dependencies:[],
    type:'project',
    progress:0,
    hideChildren:false,
    parent:'CON'
  },
  {
    id:'OTBW1',
    name:'Columns Steel',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['L3SF6'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTBW'
  },
  {
    id:'OTBW2',
    name:'Columns Formwork',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['OTBW1'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTBW'
  },
  {
    id:'OTBW3',
    name:'Columns Concrete',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['OTBW2'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTBW'
  },
  {
    id:'OTBW4',
    name:'Beams Formwork',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['OTBW3'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTBW'
  },
  {
    id:'OTBW5',
    name:'Beams Steel',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['OTBW4'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTBW'
  },
  {
    id:'OTBW6',
    name:'Beams Concrete',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['OTBW5'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTBW'
  },
  {
    id:'OTBW7',
    name:'Slab Formwork',
    start:'',
    end:'',
    duration:2,
    cost:0,
    strategy:'FS',
    dependencies:['OTBW6'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTBW'
  },
  {
    id:'OTBW8',
    name:'Slab Steel',
    start:'',
    end:'',
    duration:2,
    cost:0,
    strategy:'FS',
    dependencies:['OTBW6'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTBW'
  },
  {
    id:'OTBW9',
    name:'Slab Concrete',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['OTBW7'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTBW'
  },
  {
    id:'OTBW10',
    name:'Slab Curing',
    start:'',
    end:'',
    duration:7,
    cost:0,
    strategy:'FS',
    dependencies:['OTBW8'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTBW'
  },
  {
    id:'OTBW11',
    name:'Remove Formwork',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['OTBW9'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTBW'
  },
  {
    id:'OTBW12',
    name:'Brick Walls',
    start:'',
    end:'',
    duration:2,
    cost:0,
    strategy:'FS',
    dependencies:['OTBW10'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTBW'
  },
  {
    id:'OTBW13',
    name:'Brick Walls Plaster',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['OTBW11'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTBW'
  },
  {
    id:'OTBW14',
    name:'Cement Concrete Roof with opening',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['OTBW12'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTBW'
  },
  {
    id:'OTBW15',
    name:'Remove Scaffold',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['OTBW13'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'OTBW'
  },

//Finishes Rough-in start//




  {
    id:'CLOSE',
    name:'Closing',
    start:'',
    end:'',
    duration:0,
    cost:0,
    strategy:'FS',
    dependencies:[],
    type:'project',
    progress:0,
    hideChildren:false,
    parent:'PROJ'
  },

  {
    id:'CL01',
    name:'Install Final Fixtures',
    start:'',
    end:'',
    duration:2,
    cost:0,
    strategy:'FS',
    dependencies:['GFFU'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'CLOSE'
  },

  {
    id:'CL02',
    name:'Inspections',
    start:'',
    end:'',
    duration:2,
    cost:0,
    strategy:'FS',
    dependencies:['CL01'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'CLOSE'
  },

  {
    id:'CL03',
    name:'Snag List',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['CL02,GFPL'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'CLOSE'
  },

  {
    id:'CL04',
    name:'Clear Snag List',
    start:'',
    end:'',
    duration:5,
    cost:0,
    strategy:'FS',
    dependencies:['CL03'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'CLOSE'
  },

  {
    id:'CL05',
    name:'Handover',
    start:'',
    end:'',
    duration:1,
    cost:0,
    strategy:'FS',
    dependencies:['CL04'],
    type:'task',
    progress:0,
    hideChildren:false,
    parent:'CLOSE'
  },  


]

const footingIndex=tasks.findIndex(task=>task.id=='F00')
tasks = [...tasks.slice(0, footingIndex + 1), ...footings['F01'], ...tasks.slice(footingIndex + 1)];
// PBL,PBB
const plintBeamLengthIndex=tasks.findIndex(task=>task.id=='PBL')
tasks = [...tasks.slice(0, plintBeamLengthIndex + 1), ...plinthBeamLength['PBL1'], ...tasks.slice(plintBeamLengthIndex + 1)];
const plinthBeamBreadthIndex=tasks.findIndex(task=>task.id=='PBB')
tasks = [...tasks.slice(0, plinthBeamBreadthIndex + 1), ...plinthBeamBreadth['PBB1'], ...tasks.slice(plinthBeamBreadthIndex + 1)];
export default tasks
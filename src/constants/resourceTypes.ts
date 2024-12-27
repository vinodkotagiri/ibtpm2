export const footings = {
  F01: [
    {
      id: "F01",
      name: "Footing Type1 : Size: 1.2x1.2x0.3 ",
      start: "",
      end: "",
      duration: 0,
      cost: 0,
      numbersRequired: 16,

      strategy: "FS",
      dependencies: [],
      type: "project",
      progress: 0,
      hideChildren: false,
      parent: "F00"
    },
    {
      id: "FT01",
      name: "PCC",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["SP6"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F01",
      resources: []
    },
    {
      id: "FT02",
      name: "Steel",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "SS",
      dependencies: ["FT01"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F01",
      resources: []
    },
    {
      id: "FT03",
      name: "Formwork",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["FT02"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F01",
      resources: []
    },
    {
      id: "FT04",
      name: "Concrete",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FF",
      dependencies: ["FT03"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F01",
      resources: []
    }
  ],

  F02: [
    {
      id: "F02",
      name: "Footings Type2 Size: 1.5x1.5x0.3",
      start: "",
      end: "",
      duration: 0,
      cost: 0,
      numbersRequired: 0,
      strategy: "FS",
      dependencies: [],
      type: "project",
      progress: 0,
      hideChildren: false,
      parent: "F00"
    },
    {
      id: "FT201",
      name: "PCC",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["SP6"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F02",
      resources: []
    },
    {
      id: "FT202",
      name: "Steel",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "SS",
      dependencies: ["FT201"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F02",
      resources: []
    },
    {
      id: "FT203",
      name: "Formwork",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["FT202"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F02",
      resources: []
    },
    {
      id: "FT204",
      name: "Concrete",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FF",
      dependencies: ["FT203"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F02",
      resources: []
    }
  ],
  F03: [
    {
      id: "F03",
      name: "Footings Type3 Size: 1.8x1.8x0.4",
      start: "",
      end: "",
      duration: 0,
      cost: 0,
      numbersRequired: 0,
      strategy: "FS",
      dependencies: [],
      type: "project",
      progress: 0,
      hideChildren: false,
      parent: "F00"
    },
    {
      id: "FT301",
      name: "PCC",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["SP6"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F03",
      resources: []
    },
    {
      id: "FT302",
      name: "Steel",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "SS",
      dependencies: ["FT301"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F03",
      resources: []
    },
    {
      id: "FT303",
      name: "Formwork",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["FT302"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F03",
      resources: []
    },
    {
      id: "FT304",
      name: "Concrete",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FF",
      dependencies: ["FT303"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F03",
      resources: []
    }
  ],
  F04: [
    {
      id: "F04",
      name: "Footings Type4 Size: 2.0x2.0x0.4",
      start: "",
      end: "",
      duration: 0,
      cost: 0,
      numbersRequired: 0,
      strategy: "FS",
      dependencies: [],
      type: "project",
      progress: 0,
      hideChildren: false,
      parent: "F00"
    },
    {
      id: "FT401",
      name: "PCC",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["SP6"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F04",
      resources: []
    },
    {
      id: "FT402",
      name: "Steel",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "SS",
      dependencies: ["FT401"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F04",
      resources: []
    },
    {
      id: "FT403",
      name: "Formwork",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["FT402"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F04",
      resources: []
    },
    {
      id: "FT404",
      name: "Concrete",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FF",
      dependencies: ["FT403"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F04",
      resources: []
    }
  ],
  F05: [
    {
      id: "F05",
      name: "Footings Type5 Size: 2.5x2.5x0.4",
      start: "",
      end: "",
      duration: 0,
      cost: 0,
      numbersRequired: 1,
      strategy: "FS",
      dependencies: [],
      type: "project",
      progress: 0,
      hideChildren: false,
      parent: "F00"
    },
    {
      id: "FT501",
      name: "PCC",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["SP6"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F05",
      resources: []
    },
    {
      id: "FT502",
      name: "Steel",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "SS",
      dependencies: ["FT501"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F05",
      resources: []
    },
    {
      id: "FT503",
      name: "Formwork",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["FT502"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F05",
      resources: []
    },
    {
      id: "FT504",
      name: "Concrete",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FF",
      dependencies: ["FT503"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F05",
      resources: []
    }
  ],
  F06: [
    {
      id: "F06",
      name: "Footings Type6 Size: 3.0x3.0x0.5",
      start: "",
      end: "",
      duration: 0,
      cost: 0,
      numbersRequired: 1,
      strategy: "FS",
      dependencies: [],
      type: "project",
      progress: 0,
      hideChildren: false,
      parent: "F00"
    },
    {
      id: "FT601",
      name: "PCC",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["SP6"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F06",
      resources: []
    },
    {
      id: "FT602",
      name: "Steel",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "SS",
      dependencies: ["FT601"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F06",
      resources: []
    },
    {
      id: "FT603",
      name: "Formwork",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["FT602"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F06",
      resources: []
    },
    {
      id: "FT604",
      name: "Concrete",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FF",
      dependencies: ["FT603"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "F06",
      resources: []
    }
  ]
};

export const plinthBeamLength = {
  PBL1: [
    {
      id: "PT1L0",
      name: "Plinth Beam Type-1 : L/2 x 0.23 x 0.23",
      start: "",
      end: "",
      duration: 0,
      cost: 0,
      numbersRequired: 6,
      strategy: "FS",
      dependencies: ["FL0"],
      type: "project",
      progress: 0,
      hideChildren: false,
      parent: "PBL"
    },
    {
      id: "PT1L1",
      name: "Stone Masonry",
      start: "",
      end: "",
      duration: 2,
      cost: 0,
      strategy: "FS",
      dependencies: ["FL0"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT1L0",
      resources: []
    },
    {
      id: "PT1L2",
      name: "Beam Steel",
      start: "",
      end: "",
      duration: 2,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT1L1"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT1L0",
      resources: []
    },
    {
      id: "PT1L3",
      name: "Beam Flasework",
      start: "",
      end: "",
      duration: 2,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT1L2"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT1L0",
      resources: []
    },
    {
      id: "PT1L4",
      name: "Beam Concrete",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT1L3"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT1L0",
      resources: []
    }
  ],

  PBL2: [
    {
      id: "PT2L0",
      name: "Plinth Beam Type-2 : L/2 x 0.26 x 0.26",
      start: "",
      end: "",
      duration: 0,
      cost: 0,
      numbersRequired: 1,
      strategy: "FS",
      dependencies: [],
      type: "project",
      progress: 0,
      hideChildren: false,
      parent: "PBL"
    },
    {
      id: "PT2L1",
      name: "Stone Masonry",
      start: "",
      end: "",
      duration: 2,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT1L1"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT2L0",
      resources: []
    },
    {
      id: "PT2L2",
      name: "Beam Steel",
      start: "",
      end: "",
      duration: 2,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT2L1"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT2L0",
      resources: []
    },
    {
      id: "PT2L3",
      name: "Beam Flasework",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT2L2"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT2L0",
      resources: []
    },
    {
      id: "PT2L4",
      name: "Beam Concrete",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT2L3"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT2L0",
      resources: []
    }
  ],

  PBL3: [
    {
      id: "PT3L0",
      name: "Plinth Beam Type-3 : L/2 x 0.3 x 0.3",
      start: "",
      end: "",
      duration: 0,
      cost: 0,
      numbersRequired: 0,
      strategy: "FS",
      dependencies: [],
      type: "project",
      progress: 0,
      hideChildren: false,
      parent: "PBL"
    },
    {
      id: "PT3L1",
      name: "Stone Masonry",
      start: "",
      end: "",
      duration: 2,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT2L1"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT3L0",
      resources: []
    },
    {
      id: "PT3L2",
      name: "Beam Steel",
      start: "",
      end: "",
      duration: 2,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT3L1"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT3L0",
      resources: []
    },
    {
      id: "PT3L3",
      name: "Beam Flasework",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT3L2"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT3L0",
      resources: []
    },
    {
      id: "PT3L4",
      name: "Beam Concrete",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT3L3"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT3L0",
      resources: []
    }
  ],

  PBL4: [
    {
      id: "PT4L0",
      name: "Plinth Beam Type-4  : L/2 x 0.3 x 0.45",
      start: "",
      end: "",
      duration: 0,
      cost: 0,
      numbersRequired: 0,
      strategy: "FS",
      dependencies: [],
      type: "project",
      progress: 0,
      hideChildren: false,
      parent: "PBL"
    },
    {
      id: "PT4L1",
      name: "Stone Masonry",
      start: "",
      end: "",
      duration: 2,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT3L1"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT4L0",
      resources: []
    },
    {
      id: "PT4L2",
      name: "Beam Steel",
      start: "",
      end: "",
      duration: 2,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT4L1"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT4L0",
      resources: []
    },
    {
      id: "PT4L3",
      name: "Beam Flasework",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT4L2"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT4L0",
      resources: []
    },
    {
      id: "PT4L4",
      name: "Beam Concrete",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT4L3"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT4L0",
      resources: []
    }
  ]
};
export const plinthBeamBreadth = {
  PBB1: [
    {
      id: "PT1B0",
      name: "Plinth Beam Type-1 : B/2 x 0.23 x 0.23",
      start: "",
      end: "",
      duration: 0,
      cost: 0,
      numbersRequired: 6,

      strategy: "FS",
      dependencies: [],
      type: "project",
      progress: 0,
      hideChildren: false,
      parent: "PBB"
    },
    {
      id: "PT1B1",
      name: "Stone Masonry",
      start: "",
      end: "",
      duration: 2,
      cost: 0,
      strategy: "FS",
      dependencies: ["FL0"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT1B0",
      resources: []
    },
    {
      id: "PT1B2",
      name: "Beam Steel",
      start: "",
      end: "",
      duration: 2,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT1B1"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT1B0",
      resources: []
    },
    {
      id: "PT1B3",
      name: "Beam Flasework",
      start: "",
      end: "",
      duration: 2,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT1B2"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT1B0",
      resources: []
    },
    {
      id: "PT1B4",
      name: "Beam Concrete",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT1B3"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT1B0",
      resources: []
    }
  ],

  PBB2: [
    {
      id: "PT2B0",
      name: "Plinth Beam Type-2 : B/2 x 0.26 x 0.26",
      start: "",
      end: "",
      duration: 0,
      cost: 0,
      numbersRequired: 0,
      strategy: "FS",
      dependencies: [],
      type: "project",
      progress: 0,
      hideChildren: false,
      parent: "PBB"
    },
    {
      id: "PT2B1",
      name: "Stone Masonry",
      start: "",
      end: "",
      duration: 2,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT1B1"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT2B0",
      resources: []
    },
    {
      id: "PT2B2",
      name: "Beam Steel",
      start: "",
      end: "",
      duration: 2,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT2B1"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT2B0",
      resources: []
    },
    {
      id: "PT2B3",
      name: "Beam Flasework",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT2B2"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT2B0",
      resources: []
    },
    {
      id: "PT2B4",
      name: "Beam Concrete",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT2B3"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT2B0",
      resources: []
    }
  ],

  PBB3: [
    {
      id: "PT3B0",
      name: "Plinth Beam Type-3 : B/2 x 0.3 x 0.3",
      start: "",
      end: "",
      duration: 0,
      cost: 0,
      numbersRequired: 0,
      strategy: "FS",
      dependencies: [],
      type: "project",
      progress: 0,
      hideChildren: false,
      parent: "PBB"
    },
    {
      id: "PT3B1",
      name: "Stone Masonry",
      start: "",
      end: "",
      duration: 2,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT2B1"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT3B0",
      resources: []
    },
    {
      id: "PT3B2",
      name: "Beam Steel",
      start: "",
      end: "",
      duration: 2,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT3B1"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT3B0",
      resources: []
    },
    {
      id: "PT3B3",
      name: "Beam Flasework",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT3B2"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT3B0",
      resources: []
    },
    {
      id: "PT3B4",
      name: "Beam Concrete",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT3B3"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT3B0",
      resources: []
    }
  ],

  PBB4: [
    {
      id: "PT4B0",
      name: "Plinth Beam Type-4  : B/2 x 0.3 x 0.45",
      start: "",
      end: "",
      duration: 0,
      cost: 0,
      numbersRequired: 0,
      strategy: "FS",
      dependencies: [],
      type: "project",
      progress: 0,
      hideChildren: false,
      parent: "PBB"
    },
    {
      id: "PT4B1",
      name: "Stone Masonry",
      start: "",
      end: "",
      duration: 2,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT3B1"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT4B0",
      resources: []
    },
    {
      id: "PT4B2",
      name: "Beam Steel",
      start: "",
      end: "",
      duration: 2,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT4B1"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT4B0",
      resources: []
    },
    {
      id: "PT4B3",
      name: "Beam Flasework",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT4B2"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT4B0",
      resources: []
    },
    {
      id: "PT4B4",
      name: "Beam Concrete",
      start: "",
      end: "",
      duration: 1,
      cost: 0,
      strategy: "FS",
      dependencies: ["PT4B3"],
      type: "task",
      progress: 0,
      hideChildren: false,
      parent: "PT4B0",
      resources: []
    }
  ]
};

export const ColumnsGLevel1 = {
  Col1: [
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
  ],
  Col2: [
  // Ground columns// set-2
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
  // end of Ground columns// set-2
],
Col3: [
    // Ground columns// set-3
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
    // columns// set-3
    // end of Ground columns// set-3  
  ],

  //Beam Type-1// 3x0.23x0.45
  Beam1: [
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
 ],

//Beam Type-2// 3x0.3x0.6
Beam2: [
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
],
// Beam Type-2// 3x0.3x0.6

MEP1: [
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
],

// staircase + Elevator//
STR1: [
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
],
STR2: [
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
//staricase end//
],

ELE1: [
//Elevator start//
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
],

//Overhead tank RC work//

OTRC:[
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
],

//Overhead tank brickwork//
OTBW:[
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
]
};
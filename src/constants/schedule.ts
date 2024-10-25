const schedule = [
  {
    id: 1,
    name: "Pre-Construction",
    start: 0,
    end: 0,
    duration: 0,
    cost: 0,

    subTasks: [
      {
        id: 11,
        name: "Design",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [
          {
            materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
            manpower: [
              { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
              { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
              { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
            ],
            machinery: [
              { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
              { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
            ]
          }
        ],

        subTasks: [
          {
            id: 111,
            name: "Floor Plan Design",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: []
          },
          {
            id: 112,
            name: "Plot Survey",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: []
          }
        ]
      },
      {
        id: 12,
        name: "Issue Contract",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: []
      }
    ]
  },
  {
    id: 2,
    name: "Construction",
    start: 0,
    end: 0,
    duration: 0,
    cost: 0,
    resources: [],
    subTasks: [
      {
        id: 21,
        name: "Excavation",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [
          {
            materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
            manpower: [
              { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
              { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
              { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
            ],
            machinery: [
              { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
              { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
            ]
          }
        ],
        subTasks: [
          {
            id: 211,
            name: "Shoring and Protection",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 212,
            name: "Termite Treatment",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 22,
        name: "Foundation",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [],
        subTasks: [
          {
            id: 222,
            name: "Footing-1",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 223,
            name: "Footing-2",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 224,
            name: "Filling",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 23,
        name: "Plinth & Ground",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [],
        subTasks: [
          {
            id: 233,
            name: "Stone Masonry",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 234,
            name: "Beam Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 235,
            name: "Beam Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 236,
            name: "Ground Filling",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 237,
            name: "Ground Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 24,
        name: "Level-1 Slab",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [],
        subTasks: [
          {
            id: 244,
            name: "Columns Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 245,
            name: "Columns Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 246,
            name: "Columns Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 247,
            name: "Beams Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 248,
            name: "Beam Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 249,
            name: "Beam Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 250,
            name: "Slab Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 251,
            name: "Slab Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 252,
            name: "Curing",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 253,
            name: "Remove Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 25,
        name: "Level-2 Slab",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [],
        subTasks: [
          {
            id: 255,
            name: "Columns Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 256,
            name: "Columns Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 257,
            name: "Columns Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 258,
            name: "Beams Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 259,
            name: "Beam Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 260,
            name: "Beam Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 261,
            name: "Slab Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 262,
            name: "Slab Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 263,
            name: "Curing",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 264,
            name: "Remove Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 26,
        name: "Level-3 Slab",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [
          {
            materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
            manpower: [
              { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
              { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
              { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
            ],
            machinery: [
              { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
              { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
            ]
          }
        ],
        subTasks: [
          {
            id: 2600,
            name: "Columns Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2610,
            name: "Columns Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2620,
            name: "Columns Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2630,
            name: "Beams Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2640,
            name: "Beam Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2650,
            name: "Beam Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2660,
            name: "Slab Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2670,
            name: "Slab Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2680,
            name: "Curing",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2690,
            name: "Remove Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 27,
        name: "Level-4 Slab",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [],
        subTasks: [
          {
            id: 2700,
            name: "Columns Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2701,
            name: "Columns Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2702,
            name: "Columns Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2703,
            name: "Beams Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2704,
            name: "Beam Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2705,
            name: "Beam Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2706,
            name: "Slab Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2707,
            name: "Slab Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2708,
            name: "Curing",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2709,
            name: "Remove Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 28,
        name: "Level-5 Slab",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [],
        subTasks: [
          {
            id: 2800,
            name: "Columns Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2801,
            name: "Columns Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2802,
            name: "Columns Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2803,
            name: "Beams Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2804,
            name: "Beam Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2805,
            name: "Beam Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2806,
            name: "Slab Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2807,
            name: "Slab Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2808,
            name: "Curing",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2809,
            name: "Remove Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 29,
        name: "Level-6 Slab",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [],
        subTasks: [
          {
            id: 2900,
            name: "Columns Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2901,
            name: "Columns Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2902,
            name: "Columns Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2903,
            name: "Beams Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2904,
            name: "Beam Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2905,
            name: "Beam Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2906,
            name: "Slab Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2907,
            name: "Slab Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2908,
            name: "Curing",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 2909,
            name: "Remove Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 30,
        name: "Water Tank-1 Concrete Walls",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [],
        subTasks: [
          {
            id: 3900,
            name: "Excavation",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3901,
            name: "Columns Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3902,
            name: "Columns Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3903,
            name: "Beams Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3904,
            name: "Beam Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3905,
            name: "Beam Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3906,
            name: "Slab Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3907,
            name: "Slab Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3908,
            name: "Curing",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3909,
            name: "Remove Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 31,
        name: "Water Tank-2 Brick Walls",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [],
        subTasks: [
          {
            id: 3100,
            name: "Excavation",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3101,
            name: "Columns Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3102,
            name: "Columns Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3103,
            name: "Beams Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3104,
            name: "Beam Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3105,
            name: "Beam Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3106,
            name: "Slab Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3107,
            name: "Slab Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3108,
            name: "Curing",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3109,
            name: "Remove Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3110,
            name: "Brickwork",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 32,
        name: "Overhead Water Tank-1 Concrete Walls",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [],
        subTasks: [
          {
            id: 3200,
            name: "Excavation",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3201,
            name: "Columns Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3202,
            name: "Columns Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3203,
            name: "Beams Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3204,
            name: "Beam Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3205,
            name: "Beam Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3206,
            name: "Slab Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3207,
            name: "Slab Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3208,
            name: "Curing",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3209,
            name: "Remove Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 33,
        name: "Overhead Water Tank-2 Brick Walls",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [],
        subTasks: [
          {
            id: 3300,
            name: "Excavation",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3301,
            name: "Columns Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3302,
            name: "Columns Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3303,
            name: "Beams Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3304,
            name: "Beam Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3305,
            name: "Beam Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3306,
            name: "Slab Steel",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3307,
            name: "Slab Concrete",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3308,
            name: "Curing",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3309,
            name: "Remove Falsework",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3310,
            name: "Brickwork",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 0, units: "cu.m", costPerUnit: 100, totalCost: 0 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Finishs Rough-in",
    start: 0,
    end: 0,
    duration: 0,
    cost: 0,
    resources: [],
    subTasks: [
      {
        id: 35,
        name: "Ground",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [],

        subTasks: [
          {
            id: 3550,
            name: "Brickwork",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3551,
            name: "Electrical - Wires",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3552,
            name: "Mechanical - Ducts",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3553,
            name: "Plumbing - Conduits",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3554,
            name: "Fire Fighting - Pipes",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3555,
            name: "Door Frame",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3556,
            name: "Winddow Frame",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3557,
            name: "Plaster",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3558,
            name: "Primer",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 3559,
            name: "Paint 1st Coat",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 35590,
            name: "Paint 2nd Coat",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 35591,
            name: "Paint final Coat",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 35592,
            name: "Clean-up",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 45,
        name: "Level-1",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [],
        subTasks: [
          {
            id: 4550,
            name: "Brickwork",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 4551,
            name: "Electrical - Wires",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 4552,
            name: "Mechanical - Ducts",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 4553,
            name: "Plumbing - Conduits",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 4554,
            name: "Fire Fighting - Pipes",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 4555,
            name: "Door Frame",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 4556,
            name: "Window Frame",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 4557,
            name: "Plaster",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 4558,
            name: "Primer",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 4559,
            name: "Paint 1st Coat",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 45590,
            name: "Paint 2nd Coat",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 45591,
            name: "Paint final Coat",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 45592,
            name: "Clean-up",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 55,
        name: "Level-2",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [],
        subTasks: [
          {
            id: 5501,
            name: "Brickwork",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 5501,
            name: "Electrical - Wires",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 5502,
            name: "Mechanical - Ducts",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 5503,
            name: "Plumbing - Conduits",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 5504,
            name: "Fire Fighting - Pipes",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 5505,
            name: "Door Frame",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 5506,
            name: "Window Frame",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 5507,
            name: "Plaster",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 5508,
            name: "Primer",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 5509,
            name: "Paint 1st Coat",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 55090,
            name: "Paint 2nd Coat",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 55091,
            name: "Paint final Coat",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 55092,
            name: "Clean-up",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 65,
        name: "Level-3",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [],
        subTasks: [
          {
            id: 6501,
            name: "Brickwork",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 6501,
            name: "Electrical - Wires",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 6502,
            name: "Mechanical - Ducts",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 6503,
            name: "Plumbing - Conduits",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 6504,
            name: "Fire Fighting - Pipes",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 6505,
            name: "Door Frame",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 6506,
            name: "Window Frame",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 6507,
            name: "Plaster",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 6508,
            name: "Primer",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 6509,
            name: "Paint 1st Coat",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 65090,
            name: "Paint 2nd Coat",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 65091,
            name: "Paint final Coat",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 65092,
            name: "Clean-up",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 75,
        name: "Level-4",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [],
        subTasks: [
          {
            id: 7501,
            name: "Brickwork",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 7501,
            name: "Electrical - Wires",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 7502,
            name: "Mechanical - Ducts",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 7503,
            name: "Plumbing - Conduits",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 7504,
            name: "Fire Fighting - Pipes",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 7505,
            name: "Door Frame",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 7506,
            name: "Window Frame",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 7507,
            name: "Plaster",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 7508,
            name: "Primer",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 7509,
            name: "Paint 1st Coat",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 75090,
            name: "Paint 2nd Coat",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 75091,
            name: "Paint final Coat",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 75092,
            name: "Clean-up",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 85,
        name: "Level-5",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [],
        subTasks: [
          {
            id: 8501,
            name: "Brickwork",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 8501,
            name: "Electrical - Wires",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 8502,
            name: "Mechanical - Ducts",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 8503,
            name: "Plumbing - Conduits",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 8504,
            name: "Fire Fighting - Pipes",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 8505,
            name: "Door Frame",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 8506,
            name: "Window Frame",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 8507,
            name: "Plaster",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 8508,
            name: "Primer",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 8509,
            name: "Paint 1st Coat",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 85090,
            name: "Paint 2nd Coat",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 85091,
            name: "Paint final Coat",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 85092,
            name: "Clean-up",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 95,
        name: "Level-6",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [],
        subTasks: [
          {
            id: 9501,
            name: "Brickwork",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 9501,
            name: "Electrical - Wires",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 9502,
            name: "Mechanical - Ducts",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 9503,
            name: "Plumbing - Conduits",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 9504,
            name: "Fire Fighting - Pipes",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 9505,
            name: "Door Frame",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 9506,
            name: "Window Frame",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 9507,
            name: "Plaster",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 9508,
            name: "Door",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 9509,
            name: "Primer",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 95090,
            name: "Paint 1st Coat",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 95091,
            name: "Paint 2nd Coat",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 95092,
            name: "Paint final Coat",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          },
          {
            id: 95093,
            name: "Clean-up",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [
              {
                materials: [{ name: "concrete", qty: 200, units: "cu.m", costPerUnit: 100, totalCost: 2000 }],
                manpower: [
                  { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                  { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                ],
                machinery: [
                  { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                  { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Finishes Interiors",
    start: 0,
    end: 0,
    duration: 0,
    cost: 0,
    resources: [],
    subTasks: [
      {
        id: 41,
        name: "Ground",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [],
        subTasks: [
          {
            id: 411,
            name: "Kitchen",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [],
            subTasks: [
              {
                id: 4110,
                name: "Waterproofing",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Waterproofing", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4111,
                name: "Flooring",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4112,
                name: "Install Door",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Carpenter", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4113,
                name: "Joinery",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Carpenter", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4114,
                name: "Light Fixtures",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Electrician", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4115,
                name: "False Ceiling",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4116,
                name: "Glass Work",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4117,
                name: "Countertop",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4118,
                name: "Plumbing",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Plumber", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 412,
            name: "Living",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [],
            subTasks: [
              {
                id: 4120,
                name: "Flooring",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Carpenter", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4121,
                name: "Install Door",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Carpenter", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4122,
                name: "Joinery",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Carpenter", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4123,
                name: "Light Fixtures",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Electrician", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4124,
                name: "False Ceiling",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4125,
                name: "Glass Work",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 413,
            name: "Bedroom-1",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [],
            subTasks: [
              {
                id: 4130,
                name: "Flooring",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4131,
                name: "Install Door",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Carpenter", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4132,
                name: "Joinery",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Carpenter", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4133,
                name: "Light Fixtures",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Electrician", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4134,
                name: "False Ceiling",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4135,
                name: "Glass Work",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 414,
            name: "Bedroom-2",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [],
            subTasks: [
              {
                id: 4140,
                name: "Flooring",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4141,
                name: "Install Door",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Carpenter", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4142,
                name: "Joinery",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Carpenter", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4143,
                name: "Light Fixtures",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Electrician", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4144,
                name: "False Ceiling",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4145,
                name: "Glass Work",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 415,
            name: "Bedroom-3",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [],
            subTasks: [
              {
                id: 4150,
                name: "Flooring",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4151,
                name: "Install Door",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Carpenter", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4152,
                name: "Joinery",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Carpenter", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4153,
                name: "Light Fixtures",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Electrician", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4154,
                name: "False Ceiling",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4155,
                name: "Glass Work",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 416,
            name: "Bedroom-4",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [],
            subTasks: [
              {
                id: 4160,
                name: "Flooring",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4161,
                name: "Install Door",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Carpenter", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4162,
                name: "Joinery",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Carpenter", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4163,
                name: "Light Fixtures",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Carpenter", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4164,
                name: "False Ceiling",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4165,
                name: "Glass Work",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 417,
            name: "Drawing",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [],
            subTasks: [
              {
                id: 4170,
                name: "Flooring",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4171,
                name: "Install Door",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Carpenter", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4172,
                name: "Joinery",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Carpenter", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4173,
                name: "Light Fixtures",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Electrician", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4174,
                name: "False Ceiling",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4175,
                name: "Glass Work",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 418,
            name: "Media",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [],
            subTasks: [
              {
                id: 4180,
                name: "Flooring",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4181,
                name: "Install Door",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4182,
                name: "Joinery",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4183,
                name: "Light Fixtures",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4184,
                name: "False Ceiling",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4185,
                name: "Glass Work",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 419,
            name: "Puja",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [],
            subTasks: [
              {
                id: 4190,
                name: "Flooring",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4191,
                name: "Install Door",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4192,
                name: "Joinery",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4193,
                name: "Light Fixtures",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4194,
                name: "False Ceiling",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4195,
                name: "Glass Work",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 420,
            name: "Sitout",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [],
            subTasks: [
              {
                id: 4200,
                name: "Flooring",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4201,
                name: "Install Door",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4202,
                name: "Joinery",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4203,
                name: "Light Fixtures",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4204,
                name: "False Ceiling",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4205,
                name: "Railing",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4206,
                name: "Glass Work",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 421,
            name: "Sitout-1",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [],
            subTasks: [
              {
                id: 4210,
                name: "Flooring",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4211,
                name: "Install Door",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4212,
                name: "Joinery",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4213,
                name: "Light Fixtures",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4214,
                name: "False Ceiling",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4215,
                name: "Railing",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4216,
                name: "Glass Work",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 422,
            name: "Sitout-2",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [],
            subTasks: [
              {
                id: 4220,
                name: "Flooring",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4221,
                name: "Install Door",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4222,
                name: "Joinery",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4223,
                name: "Light Fixtures",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4224,
                name: "False Ceiling",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4225,
                name: "Railing",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4226,
                name: "Glass Work",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 423,
            name: "Sitout-3",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [],
            subTasks: [
              {
                id: 4230,
                name: "Flooring",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4231,
                name: "Install Door",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4232,
                name: "Joinery",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4233,
                name: "Light Fixtures",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4234,
                name: "False Ceiling",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4235,
                name: "Railing",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4236,
                name: "Glass Work",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: []
              }
            ]
          },
          {
            id: 424,
            name: "Sitout-4",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [],
            subTasks: [
              {
                id: 4240,
                name: "Flooring",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4241,
                name: "Install Door",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4242,
                name: "Joinery",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4243,
                name: "Light Fixtures",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4244,
                name: "False Ceiling",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4245,
                name: "Railing",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4246,
                name: "Glass Work",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 425,
            name: "Balcony",
            start: 0,
            end: 0,
            duration: 0,
            cost: 0,
            resources: [],
            subTasks: [
              {
                id: 4250,
                name: "Flooring",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4241,
                name: "Install Door",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4252,
                name: "Joinery",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4253,
                name: "Light Fixtures",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4254,
                name: "False Ceiling",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4255,
                name: "Railing",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              },
              {
                id: 4256,
                name: "Glass Work",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [
                  {
                    materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
                    manpower: [
                      { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
                      { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
                    ],
                    machinery: [
                      { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
                      { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Closing",
    start: 0,
    end: 0,
    duration: 0,
    cost: 0,
    resources: [],
    subTasks: [
      {
        id: 5100,
        name: "Install Final Fixtures",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [
          {
            materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
            manpower: [
              { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
              { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
              { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
            ],
            machinery: [
              { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
              { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
            ]
          }
        ]
      },
      {
        id: 5101,
        name: "Inspections",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [
          {
            materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
            manpower: [
              { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
              { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
              { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
            ],
            machinery: [
              { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
              { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
            ]
          }
        ]
      },
      {
        id: 5102,
        name: "Snag List",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [
          {
            materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
            manpower: [
              { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
              { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
              { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
            ],
            machinery: [
              { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
              { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
            ]
          }
        ]
      },
      {
        id: 5103,
        name: "Clear List",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [
          {
            materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
            manpower: [
              { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
              { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
              { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
            ],
            machinery: [
              { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
              { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
            ]
          }
        ]
      },
      {
        id: 5104,
        name: "Handover",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        resources: [
          {
            materials: [{ name: "Mason", qty: 0, units: "sft", costPerUnit: 100, totalCost: 1000 }],
            manpower: [
              { name: "Engineer", qty: 1, units: "Person", costPerUnit: 1000, totalCost: 1000 },
              { name: "Supervisor", qty: 1, units: "Person", costPerUnit: 100, totalCost: 100 },
              { name: "Mason", qty: 1, units: "Person", costPerUnit: 150, totalCost: 1500 }
            ],
            machinery: [
              { name: "Concrete Mixer", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 },
              { name: "Concrete Pump", qty: 1, units: "Machine", costPerUnit: 1000, totalCost: 1000 }
            ]
          }
        ]
      }
    ]
  }
];

export default schedule
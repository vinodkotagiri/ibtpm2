const schedule:Array<object>=  [
    {
        id: 10000,
        main:true,
        name: "Main Task 1",
        start: '12/12/2022',
        end: '12/12/2023',
        duration:( Date.parse('12/12/2023') - Date.parse('12/12/2022')),
        cost: 0,
        color:'#83a300',
        dependencies: [],
        resources: [{
            materials: [{ name: 'concrete', qty: 200, units: 'cu.m', costPerUnit: 100, totalCost: 2000 }],
            manpower: [
                { name: 'Engineer', qty: 1, units: 'Person', costPerUnit: 1000, totalCost: 1000 },
                { name: 'Supervisor', qty: 1, units: 'Person', costPerUnit: 100, totalCost: 100 },
                { name: 'Mason', qty: 1, units: 'Person', costPerUnit: 150, totalCost: 1500 },
            ],
            machinery: [{ name: 'Concrete Mixer', qty: 1, units: 'Machine', costPerUnit: 1000, totalCost: 1000 },
            { name: 'Concrete Pump', qty: 1, units: 'Machine', costPerUnit: 1000, totalCost: 1000 }],
        }],
        subTasks: [
            {
                id: 11,
                name: "Sub Task 1",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                dependencies: [10000],
                resources: [],
                subTasks: [
                    {
                        id: 111,
                        name: "Sub Sub Task 1",
                        start: 0,
                        end: 0,
                        duration: 0,
                        cost: 0,
                        dependencies: [11],
                        resources: [],
                    },
                    {
                        id: 112,
                        name: "Sub Sub Task 2",
                        start: 0,
                        end: 0,
                        duration: 0,
                        cost: 0,
                        dependencies: [11],
                        resources: [],
                    }
                ]
            },
            {
                id: 12,
                name: "Sub Task 2",
                start: 0,
                end: 0, duration: 0,
                cost: 0,
                dependencies: [10000],
                resources: [],
            }
        ]
    },
    {
        id: 2,
        main:true,
        name: "Main Task 2",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        color:'#c06c84',
        dependencies: [],
        resources: [],
        subTasks: [
            {
                id: 21,
                name: "Sub Task 1",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                dependencies: [],
                resources: [],
                subTasks: [
                    {
                        id: 211,
                        name: "Sub Sub Task 1",
                        start: 0,
                        end: 0,
                        duration: 0,
                        cost: 0,
                        dependencies: [],
                        resources: [],
                    },
                    {
                        id: 212,
                        name: "Sub Sub Task 2",
                        start: 0,
                        end: 0,
                        duration: 0,
                        cost: 0,
                        dependencies: [],
                        resources: [],
                    }
                ]
            },
            {
                id: 22,
                name: "Sub Task 2",
                start: 0,
                end: 0, duration: 0,
                cost: 0,
                dependencies: [],
                resources: [],
            }
        ]
    },
    {
        id: 3,
        main:true,
        name: "Main Task 3",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        color:'#c06c84',
        resources: [],
        dependencies: [],
        subTasks: [
            {
                id: 31,
                name: "Sub Task 1",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [],
                subTasks: [
                    {
                        id: 311,
                        name: "Sub Sub Task 1",
                        start: 0,
                        end: 0,
                        duration: 0,
                        cost: 0,
                        dependencies: [],
                        resources: [],
                    },
                    {
                        id: 312,
                        name: "Sub Sub Task 2",
                        start: 0,
                        end: 0,
                        duration: 0,
                        cost: 0,
                        dependencies: [],
                        resources: [],
                    }
                ]
            },
            {
                id: 32,
                name: "Sub Task 2",
                start: 0,
                end: 0, duration: 0,
                cost: 0,
                dependencies: [],
                resources: [],
            }
        ]
    },
    {
        id: 4,
        main:true,
        name: "Main Task 4",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        color:'#c06c84',
        dependencies: [],
        resources: [],
        subTasks: [
            {
                id: 41,
                name: "Sub Task 1",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                dependencies: [],
                resources: [],
                subTasks: [
                    {
                        id: 411,
                        name: "Sub Sub Task 1",
                        start: 0,
                        end: 0,
                        duration: 0,
                        cost: 0,
                        dependencies: [],
                        resources: [],
                    },
                    {
                        id: 412,
                        name: "Sub Sub Task 2",
                        start: 0,
                        end: 0,
                        duration: 0,
                        cost: 0,
                        dependencies: [],
                        resources: [],
                    }
                ]
            },
            {
                id: 42,
                name: "Sub Task 2",
                start: 0,
                end: 0, duration: 0,
                cost: 0,
                dependencies: [],
                resources: [],
            }
        ]
    },
    {
        id: 5,
        main:true,
        name: "Main Task 5",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        color:'#c06c84',
        dependencies: [],
        resources: [],
        subTasks: [
            {
                id: 51,
                name: "Sub Task 1",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                dependencies: [],
                resources: [],
                subTasks: [
                    {
                        id: 511,
                        name: "Sub Sub Task 1",
                        start: 0,
                        end: 0,
                        duration: 0,
                        cost: 0,
                        dependencies: [],
                        resources: [],
                    },
                    {
                        id: 512,
                        name: "Sub Sub Task 2",
                        start: 0,
                        end: 0,
                        duration: 0,
                        cost: 0,
                        dependencies: [],
                        resources: [],
                    }
                ]
            },
            {
                id: 52,
                name: "Sub Task 2",
                start: 0,
                end: 0, duration: 0,
                cost: 0,
                dependencies: [],
                resources: [],
            }
        ]
    },
    {
        id: 6,
        main:true,
        name: "Main Task 6",
        start: 0,
        end: 0,
        duration: 0,
        cost: 0,
        color:'#c06c84',
        dependencies: [],
        resources: [],
        subTasks: [
            {
                id: 61,
                name: "Sub Task 1",
                start: 0,
                end: 0,
                duration: 0,
                cost: 0,
                resources: [],
                subTasks: [
                    {
                        id: 611,
                        name: "Sub Sub Task 1",
                        start: 0,
                        end: 0,
                        duration: 0,
                        cost: 0,
                        resources: [],
                    },
                    {
                        id: 612,
                        name: "Sub Sub Task 2",
                        start: 0,
                        end: 0,
                        duration: 0,
                        cost: 0,
                        resources: [],
                    }
                ]
            },
            {
                id: 62,
                name: "Sub Task 2",
                start: 0,
                end: 0, duration: 0,
                cost: 0,
                resources: [],
            }
        ]
    }

]
export default schedule
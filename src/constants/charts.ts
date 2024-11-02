interface IChart{
  chartType:string
  data:Array<Array<string|number>>
  options:object
  width?:string
  height?:string
  legendToggle?:boolean
}

export const LineChart:IChart = {
  chartType:"LineChart",
  data : [
    ["x", "dogs"],
    [0, 0],
    [1, 10],
    [2, 23],
    [3, 17],
    [4, 18],
    [5, 9],
    [6, 11],
    [7, 27],
    [8, 33],
    [9, 40],
    [10, 32],
    [11, 35],
  ],
  options : {
    title: "Line Chart Example",
    hAxis: { title: "Time",textStyle: {
      color: '#bf4', // Horizontal axis text color
    }, },
    vAxis: { title: "Popularity", textStyle: {
      color: '#fb3', // Horizontal axis text color
    }, },
    backgroundColor: "transparent",

    titleTextStyle: {
      color: '#bbb', // Title text color
      fontSize: 24, // Title font size
    },
    legend: {
      textStyle: {
        color: '#ddd', 
      },
    },

  },
  width:"100%",
  height:"100%"
}

export const PieChart:IChart={
  chartType:"PieChart",
  data:[
    ["Task", "Hours per Day"],
    ["Work", 9],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ],
  options:{
    title: "My Daily Activities",
    backgroundColor: "transparent",
    titleTextStyle: {
      color: '#bbb', 
      fontSize: 24, 
    },
    legend: {
      textStyle: {
        color: '#ddd', 
      },
    },
  },
  width:"100%",
  height:"100%"
}
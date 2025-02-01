interface IChart {
  chartType: string;
  data: Array<Array<string | number>>;
  options: object;
  width?: string;
  height?: string;
  legendToggle?: boolean;
}

export const LineChart: IChart = {
  chartType: "LineChart",
  data: [
    ["x", "Cost"],
    [0, 0],
    [1, 5],
    [2, 15],
    [3, 20],
    [4, 25],
    [5, 30],
    [6, 40],
    [7, 50],
    [8, 60],
    [9, 70],
    [10, 80],
    [11, 90],
    [12, 100]
  ],
  
  options: {
    title: "Project Summary",    
    hAxis: {
      title: "Time (months)",
      textStyle: {
        color: "#bf4" // Horizontal axis text color
      },
      titleTextStyle: { color: '#bf4' }
    },
    vAxis: {
      title: "Popularity",
      textStyle: {
        color: "#fb3" // Horizontal axis text color
      },
      titleTextStyle: { color: '#fb3' }
    },

    backgroundColor: "transparent",

    titleTextStyle: {
      color: "#bbb", // Title text color
      fontSize: 26 // Title font size
    },
    legend: {
      textStyle: {
        color: "#ddd"
      }
    }
  },
  width: "100%",
  height: "100%"
};

export const PieChart: IChart = {
  chartType: "PieChart",
    data: [
    ["Category", "Percent"],
    ["Actual", 0.5],
    ["Planned", 9.5],    
  ],
  options: {
    title: "Percent Complete",
    backgroundColor: "transparent",
    titleTextStyle: {
      color: "#bbb",
      fontSize: 18
    },
    legend: {
      textStyle: {
        color: "#ddd"
      }
    }
  },
  width: "100%",
  height: "100%"
};

export const BarChart: IChart = {
  chartType: "BarChart",
  data: [
    ["Category", "Hours"],
    ["Steel", 2],
    ["Concrete", 5],
    ["Formwork", 2],
    ["Bricks- Red Clay", 4],
    ["Plaster", 3]
  ],
  options: {
    title: "Quantities",
      subtitle: "Total Quantity for Each Name and Unit",
    backgroundColor: "transparent",
    titleTextStyle: {
      color: "#bbb",
      fontSize: 16
    },
    legend: {
      position: "none" // Bar charts often display without legends to save space
    },
    hAxis: {
      title: "Quantity",
      minValue: 0,
      textStyle: {
        color: "#ddd"
      },
      titleTextStyle: {
        color: "#bbb"
      }
    },
    vAxis: {
      textStyle: {
        color: "#ddd"
      },
      titleTextStyle: {
        color: "#bbb"
      }
    },
    bar: { groupWidth: "70%" }
  },
  width: "100%",
  height: "100%"
};

export const AreaChart: IChart = {
  chartType: "AreaChart",
  data: [
    ["Date", "Sales", "Expenses"],
    ["2024-01-01", 1000, 400],
    ["2024-01-02", 1170, 460],
    ["2024-01-03", 660, 1120],
    ["2024-01-04", 1030, 540],
    ["2024-01-05", 1200, 600],
    ["2024-01-06", 850, 700]
  ],
  options: {
    title: "Company Performance",
    backgroundColor: "transparent",
    titleTextStyle: {
      color: "#bbb",
      fontSize: 16
    },
    hAxis: {
      title: "Date",
      titleTextStyle: { color: "#aaa" },
      textStyle: { color: "#ddd" }
    },
    vAxis: {
      title: "Amount (in USD)",
      titleTextStyle: { color: "#aaa" },
      textStyle: { color: "#ddd" },
      gridlines: { color: "#333" }
    },
    legend: {
      textStyle: { color: "#ddd" },
      position: "bottom"
    },
    colors: ["#4CAF50", "#FF7043"],
    isStacked: true,
    areaOpacity: 0.4 // Adjusts the transparency of the area fill
  },
  width: "100%",
  height: "100%"
};

export const ComboChart: IChart = {
  chartType: "ComboChart",
  data: [
    ["Month", "Sales", "Expenses", "Profit", "Forecast"],
    ["Jan", 1000, 400, 600, 700],
    ["Feb", 1170, 460, 710, 800],
    ["Mar", 660, 1120, -460, 550],
    ["Apr", 1030, 540, 490, 920],
    ["May", 850, 620, 230, 740],
    ["Jun", 950, 680, 270, 800]
  ],
  options: {
    title: "Previous Payments",
    backgroundColor: "transparent",
    titleTextStyle: {
      color: "#bbb",
      fontSize: 16
    },
    hAxis: {
      title: "Month",
      titleTextStyle: { color: "#aaa" },
      textStyle: { color: "#ddd" }
    },
    vAxis: {
      title: "Amount (in USD)",
      titleTextStyle: { color: "#aaa" },
      textStyle: { color: "#ddd" },
      gridlines: { color: "#333" }
    },
    seriesType: "bars",
    series: {
      2: { type: "line", color: "#FF7043" }, // Profit line
      3: { type: "line", color: "#FFD700" } // Forecast line
    },
    legend: {
      textStyle: { color: "#ddd" },
      position: "bottom"
    },
    colors: ["#4CAF50", "#2196F3"] // Colors for Sales and Expenses bars
  },
  width: "100%",
  height: "100%"
};

export const DonutChart: IChart = {
  chartType: "PieChart",  // Google Charts treats Donut as a Pie Chart with a hole
  data: [
    ["Category", "Hours"],
    ["Mason", 1],
    ["Steel Fixer", 4],
    ["Helper", 5],
    ["Operator", 1],
    ["Carpenter", 3]
  ],
  options: {
    title: "Daily Activities",
    pieHole: 0.4,  // Creates the donut effect
    backgroundColor: "transparent",
    titleTextStyle: {
      color: "#bbb",
      fontSize: 18,
    },
    legend: {
      textStyle: { color: "#ddd" },
    },
    pieSliceTextStyle: {
      color: "#fff",  // Slice label color
    },
  },
  width: "100%",
  height: "100%",
};
export const SteppedAreaChart: IChart = {
  chartType: "AreaChart",
  data: [
    ["X", "Planned", "Additional"],
    [0, 0, 0],
    [1, 10, 0],
    [2, 15, 0],
    [3, 20, 4],
    [4, 25, 6],
    [5, 30, 8],
    [6, 35, 10],
    [7, 40, 14],
    [8, 45, 10],
    [9, 50, 10],
    [10, 55, 20],
  ],
  options: {
    title: "Future Payments",
    hAxis: {
      title: "X Axis",
      textStyle: {
        color: "#bf4",  // Horizontal axis text color
      },
    },
    vAxis: {
      title: "Y Axis",
      textStyle: {
        color: "#fb3",  // Vertical axis text color
      },
    },
    areaOpacity: 0.5,  // Set transparency for the area
    isStacked: true,   // Stack the areas to show total
    backgroundColor: "transparent", // Transparent background
    titleTextStyle: {
      color: "#bbb", // Title text color
      fontSize: 16,  // Title font size
    },
    legend: {
      textStyle: {
        color: "#ddd", 
      },
    },
    steps: true, // Enable stepped lines
  },
  width: "100%",
  height: "100%",
};



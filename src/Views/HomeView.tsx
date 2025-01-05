import { useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import ChartComponent from "../components/ChartComponent";
import {  AreaChart, BarChart, ComboChart, DonutChart, LineChart, PieChart, SteppedAreaChart } from "../constants/charts";

const HomeView = () => {
  const {totalTasks,tasks}=useAppSelector(state => state.schedule)

  
  
  


  return (
    <div className="w-screen h-[calc(100vh-64px)] bg-slate-800 px-4 py-1 overflow-y-auto text-slate-800 font-semibold">
      {/* Top Section */}
      <div className="w-full flex flex-wrap gap-3 p-3 justify-center overflow-auto">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 min-h-[80px] rounded-md shadow-md bg-[#F55C47] flex items-center justify-center flex-col font-semibold text-slate-600">
        <div className="text-2xl font-semibold text-slate-600">
          TOTAL TASKS
        </div>
        <div className="text-xl">
          {totalTasks}
        </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 min-h-[80px] rounded-md shadow-md bg-[#9FE6A0] flex flex-col items-center justify-center font-semibold text-slate-600">
        <div className="text-2xl font-semibold text-slate-600">
          TOTAL BUDGET
        </div>
        <div className="text-xl">
          &#8377;35,22000
        </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 min-h-[80px] rounded-md shadow-md bg-[#E6FF94] flex items-center justify-center flex-col font-semibold text-slate-600">
        <div className="text-2xl">
          ACTUAL COST
        </div>
        <div>
          &#8377;0
        </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 min-h-[80px] rounded-md shadow-md bg-[#B3A398] flex items-center justify-center flex-col font-semibold text-slate-600">
        <div className="text-2xl">
          AMOUNT PAID
        </div>
        <div>
          &#8377;0
        </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 min-h-[80px] rounded-md shadow-md bg-[#CD8D7A] flex items-center justify-center flex-col font-semibold text-slate-600">
        <div className="text-2xl">
          AMOUNT DUE
        </div>
        <div>
          &#8377;0
        </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col h-[calc(100%-120px)] p-4 gap-2 overflow-auto">
        {/* Chart Row */}
        <div className="w-full h-1/2 flex  items-center gap-2">
          <div className="w-full sm:w-1/2 lg:w-1/2 h-full  shadow-sm rounded-2xl shadow-purple-500">
            <ChartComponent chart={LineChart} />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 h-full  shadow-sm rounded-2xl shadow-purple-500">
            <ChartComponent chart={PieChart} />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 h-full  shadow-sm rounded-2xl shadow-purple-500">
          <ChartComponent chart={BarChart} />
          </div>
          {/* <div className="w-full sm:w-1/2 lg:w-1/4 h-full shadow-sm rounded-2xl shadow-purple-500 ">
          <ChartComponent chart={AreaChart} />
          </div> */}
        </div>

        {/* Empty Content Row */}
        <div className="w-full h-1/2 flex  items-center gap-2">
          <div className="w-full sm:w-1/2 lg:w-1/3 h-full shadow-sm rounded-2xl shadow-purple-500">
          <ChartComponent chart={ComboChart} />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 h-full shadow-sm rounded-2xl shadow-purple-500">
          <ChartComponent chart={DonutChart} />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 h-full shadow-sm rounded-2xl shadow-purple-500">
          <ChartComponent chart={SteppedAreaChart} /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;

import ChartComponent from "../components/ChartComponent";
import { LineChart, PieChart } from "../constants/charts";

const HomeView = () => {
  return (
    <div className="w-screen h-[calc(100vh-64px)] bg-slate-900 px-4 py-1 overflow-y-auto">
      {/* Top Section */}
      <div className="w-full flex flex-wrap gap-3 p-3 justify-center">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 min-h-[80px] rounded-md shadow-md bg-[#F55C47] flex items-center justify-center">
          HELLO
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 min-h-[80px] rounded-md shadow-md bg-[#9FE6A0] flex items-center justify-center">
          HELLO
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 min-h-[80px] rounded-md shadow-md bg-[#4AA96C] flex items-center justify-center">
          HELLO
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 min-h-[80px] rounded-md shadow-md bg-[#564A4A] flex items-center justify-center">
          HELLO
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 min-h-[80px] rounded-md shadow-md bg-[#B31312] flex items-center justify-center">
          HELLO
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col h-[calc(100%-120px)] p-3 gap-2">
        {/* Chart Row */}
        <div className="w-full h-1/2 flex flex-wrap items-center gap-2">
          <div className="w-full sm:w-1/2 lg:w-1/4 h-full">
            <ChartComponent chart={LineChart} />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 h-full">
            <ChartComponent chart={PieChart} />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 h-full"></div>
          <div className="w-full sm:w-1/2 lg:w-1/4 h-full"></div>
        </div>

        {/* Empty Content Row */}
        <div className="w-full h-1/2 flex flex-wrap items-center gap-2">
          <div className="w-full sm:w-1/2 lg:w-1/3 h-full"></div>
          <div className="w-full sm:w-1/2 lg:w-1/3 h-full"></div>
          <div className="w-full sm:w-1/2 lg:w-1/3 h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;

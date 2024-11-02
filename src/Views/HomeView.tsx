import ChartComponent from "../components/ChartComponent"
import { LineChart, PieChart } from "../constants/charts"

const HomeView = () => {
  return (
    <div className="w-screen h-[calc(100vh-64px)] bg-slate-900 px-4 py-1">
      <div className="w-full h-[120px]  flex gap-3 px-3 py-1">
        <div className="w-1/6 h-full rounded-md shadow-slate-600 bg-[#F55C47]">HELLO</div>
        <div className="w-1/6 h-full rounded-md bg-[#9FE6A0]">HELLO</div>
        <div className="w-1/6 h-full rounded-md bg-[#4AA96C]">HELLO</div>
        <div className="w-1/6 h-full rounded-md  bg-[#564A4A]">HELLO</div>
        <div className="w-1/6 h-full rounded-md bg-[#B31312]">HELLO</div>
        <div className="w-1/6 h-full rounded-md bg-[#EA906C]">HELLO</div>
      </div>
      <div className="w-full flex flex-col h-[calc(100%-120px)] p-3 gap-2">
        <div className="w-full h-1/2 flex items-center gap-2">
          <div className="w-1/4 h-full">
         <ChartComponent chart={LineChart}/> 
          </div>
          <div className="w-1/4 h-full">
          <ChartComponent chart={PieChart}/> 
          </div>
          <div className="w-1/4 h-full"></div>
          <div className="w-1/4 h-full"></div>
        </div>
        <div className="w-full h-1/2  flex items-center gap-2">
     <div className="w-1/3 h-full"></div>
     <div className="w-1/3 h-full"></div>
     <div className="w-1/3 h-full"></div>
   </div>
      </div>
    </div>
  )
}

export default HomeView







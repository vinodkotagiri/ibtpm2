import { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const ChartComponent = ({ chart, resourceQuantities = null }) => {
  const [data, setData] = useState(chart.data)

  useEffect(() => {
    if (resourceQuantities) {
      const steelFilters = ['Dia8', 'Dia10', 'Dia12', 'Dia16', 'Dia20', 'Dia24'];
      const concreteFilters = ['M20', 'M25', 'M30', 'M35', 'M40', 'M45', 'M50'];
      const filters = ['Brickwork', 'Plaster', ...steelFilters, ...concreteFilters];
      const units = ['Kgs', 'Cum'];
    
      // Step 1: Filter and map resources to apply name changes for steel and concrete
      let filteredResources = resourceQuantities.filter(
        (resource) => filters.includes(resource.name) && units.includes(resource.units)
      );
    
      filteredResources = filteredResources.map((resource) => {
        if (steelFilters.includes(resource.name)) {
          resource.name = 'Steel (Kgs)';
        }
        if (concreteFilters.includes(resource.name)) {
          resource.name = 'Concrete (Cum)';
        }
        return resource;
      });
    
      // Step 2: Aggregate quantities by resource name
      let dataToChart = {};
    
      for (const resource of filteredResources) {
        if (dataToChart[resource.name]) {
          dataToChart[resource.name] += parseFloat(resource.totalQuantity);
        } else {
          dataToChart[resource.name] = parseFloat(resource.totalQuantity);
        }
      }
    
      // Step 3: Prepare chartData
      let chartData = [
        ["Name (Units)", "Total Quantity", { role: "style" }]  // Column headers
      ];
      
      // Add resource data (ensure total quantity is a number)
      let colorIndex = 0;
      const colors=["#4285F4","#34A853", "#FBBC05"," #EA4335"]
      for (const name in dataToChart) {

        chartData.push([name, parseFloat(dataToChart[name]),`${colors[colorIndex]}`]);
        colorIndex++;
      }
      
      // Convert Steel from Kgs to Metric Tons if it exists
      const steelKG = dataToChart['Steel (Kgs)'];
      if (steelKG) {
        const steelMT = parseFloat(steelKG / 1000); // Convert to Metric Tons
        chartData.push(['Steel (MT)', steelMT,`${colors[3]}`]);
        // Remove 'Steel (Kgs)' if needed
        chartData = chartData.filter(item => item[0] !== 'Steel (Kgs)');
      }
    
      // Step 5: Output the final chartData
      console.log('chartData::', chartData);
      setData(chartData); // Assuming setData is a function to update your chart data
    }
    
  }, [resourceQuantities])

  return (
    <div className='w-full h-full'>

      <Chart chartType={chart.chartType} data={data} options={chart.options} width={chart.width} height={chart.height} resourceQuantities={resourceQuantities} />
    </div>
  )
}

export default ChartComponent

// data: [
//   ["Category", "Hours"],
//   ["Steel", 2],
//   ["Concrete", 5],
//   ["Formwork", 2],
//   ["Bricks- Red Clay", 4],
//   ["Plaster", 3]
// ],
import Chart from 'react-google-charts'

const ChartComponent = ({chart}) => {
  return (
    <div className='w-full h-full'>
      <Chart chartType={chart.chartType} data={chart.data} options={chart.options} width={chart.width} height={chart.height}/>
    </div>
  )
}

export default ChartComponent
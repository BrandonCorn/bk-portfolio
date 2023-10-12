import { 
  Chart as ChartJs, 
  RadialLinearScale, 
  PointElement, 
  LineElement, 
  Filler, 
  Tooltip, 
  Legend,
  ChartOptions,
  ChartData
} from 'chart.js';

import { Radar } from 'react-chartjs-2';


ChartJs.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);


interface LineProps {
  options: ChartOptions<'radar'>;
  data: ChartData<'radar'>
}


const RadarChart = ({ data } : { data: LineProps }) => {
  
  return <Radar options={data.options} data={data.data} />
}

export default RadarChart;
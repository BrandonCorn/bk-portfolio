import {
  Chart as ChartJs,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  Plugin,
} from "chart.js";

import { Radar, Line } from "react-chartjs-2";
import * as ChartUtils from "@/services/chartService/chartUtils";
import { useEffect } from "react";

ChartJs.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export interface RadarProps {
  options: ChartOptions<"radar">;
  data: ChartData<"radar">;
  plugins: Plugin<"radar">[];
}

export function getLineColor(ctx: any) {
  return ChartUtils.color(ctx.datasetIndex);
}

const RadarChart = ({ data }: { data: RadarProps }) => {
  return (
    <div className="sm:h-[350px] sm:w-[350px] md:h-[600px] md:w-[600px] lg:h-[800px] lg:w-[800px]">
      <Radar options={data.options} data={data.data} plugins={data.plugins} />
    </div>
  );
};

export default RadarChart;

"use client";
import { Plugin } from "chart.js";
import RadarChart, {
  RadarProps,
  getLineColor,
} from "@/components/atoms/RadarChart";
import { FaStar, FaHeart, FaSmile, FaThumbsUp, FaCircle } from "react-icons/fa";

const data = {
  labels: [
    "Typescript",
    "Node.js",
    "Express.js",
    "React",
    "Next.js",
    "Java",
    "AWS",
    "Jest",
  ],
  datasets: [
    {
      label: "Typescript",
      data: [80, 0, 0, 0, 0, 0, 0, 0],
      fill: false,
      borderColor: getLineColor,
      borderWidth: 5,
    },
    {
      label: "Node.js",
      data: [0, 80, 0, 0, 0, 0, 0, 0],
      fill: false,
      borderColor: getLineColor,
      borderWidth: 5,
    },
    {
      data: [0, 0, 80, 0, 0, 0, 0, 0],
      fill: false,
      borderColor: getLineColor,
      borderWidth: 5,
    },
    {
      data: [0, 0, 0, 80, 0, 0, 0, 0],
      fill: false,
      borderColor: getLineColor,
      borderWidth: 5,
    },
    {
      data: [0, 0, 0, 0, 80, 0, 0, 0],
      fill: false,
      borderColor: getLineColor,
      borderWidth: 5,
    },
    {
      data: [0, 0, 0, 0, 0, 80, 0, 0],
      fill: false,
      borderColor: getLineColor,
      borderWidth: 5,
    },
    {
      data: [0, 0, 0, 0, 0, 0, 80, 0],
      fill: false,
      borderColor: getLineColor,
      borderWidth: 5,
    },
    {
      data: [0, 0, 0, 0, 0, 0, 0, 80],
      fill: false,
      borderColor: getLineColor,
      borderWidth: 5,
    },
  ],
};

const options = {
  color: "white",
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      bodyFont: {
        size: 18,
      },
    },
  },
  scales: {
    radialLinear: {
      pointLabels: {
        font: {
          size: 16,
        },
      },
    },
    r: {
      ticks: {
        display: false,
      },
    },
  },
  responsive: true,
  maintainAspectRatio: true,
};

type ImageLabels = {
  [key: string]: string;
};

const imageLabels: ImageLabels = {
  Typescript: "../../public/next.svg",
};

// const imagePlugin: Plugin<"radar"> = {
//   id: "image_plugin", // Unique string ID for your custom plugin
//   afterDraw: (chart) => {
//     let ctx = chart.ctx;

//     let labels;
//     if (chart.config.data.labels) {
//       labels = chart.config.data.labels as string[];
//       labels.forEach((label, index) => {
//         let imgSrc = imageLabels[label];
//         const imgWidth = 40;
//         const imgHeight = 40;

//         let labelPosition = chart.getDatasetMeta(0).data[index];
//         const x = labelPosition.x;
//         const y = labelPosition.y;
//       });
//     }
//   },
// };

const customIcons = [FaStar, FaHeart, FaSmile, FaThumbsUp, FaCircle];

const radarData: RadarProps = {
  data,
  options,
  plugins: [],
};

export const ExperienceWeb = () => {
  return (
    <div className="flex h-fit w-fit mx-auto justify-center text-2xl">
      <RadarChart data={radarData} />{" "}
    </div>
  );
};

{
  /* <RadarChart data={radarData} /> */
}

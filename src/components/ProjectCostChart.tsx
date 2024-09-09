import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

// Register the components needed for the chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const arabicToPersian = (num: string) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return num.replace(
    /\d/g,
    (digit) => persianDigits[digit as unknown as number]
  );
};

// Function to format numbers with commas
const formatNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Combine formatting and numeral conversion
const formatPersianNumber = (num: number) => {
  return arabicToPersian(formatNumber(num));
};

// Define the type for the props
interface ProjectCostChartProps {
  data: number[];
  labels: string[];
}

const ProjectCostChart: React.FC<ProjectCostChartProps> = ({
  data,
  labels,
}) => {
  const formattedData = data.map((num) => parseFloat(formatPersianNumber(num)));
  console.log(formattedData);
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || "";
            const value = context.raw as number;
            return `${label}: ${formatPersianNumber(value)}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "نام پروژه",
          font: {
            family: "ESTEDAD", // Change font family for legend
          },
        },
        ticks: {
          font: {
            family: "ESTEDAD", // Change font family for x-axis labels
            size: 12, // Optional: change the font size
          },
        },
      },

      y: {
        title: {
          display: true,
          text: "هزینه (ریال)",
          font: {
            family: "ESTEDAD", // Change font family for y-axis title
            size: 12, // Optional: change the font size
          },
        },
        ticks: {
          callback: (value: string | number) => {
            // Convert value to number if it's a string
            const numericValue =
              typeof value === "string" ? parseFloat(value) : value;
            return formatPersianNumber(numericValue);
          },
          font: {
            family: "ESTEDAD", // Change font family for y-axis labels
            size: 12, // Optional: change the font size
          },
        },
        beginAtZero: true,
      },
    },

    hover: {
      mode: "index", // Hover mode: affects all elements at index
      intersect: false,
    },
  };
  const chartData: ChartData<"bar"> = {
    labels,
    datasets: [
      {
        label: "ریال",
        data,
        backgroundColor: "#42a5f5",
        borderColor: "#1e88e5",
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={chartData} options={options} />;
};

export default ProjectCostChart;

import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
// Define the props interface
interface ProjectStatusChartProps {
  statusData: number[];
}

const ProjectOpeningStatusChart: React.FC<ProjectStatusChartProps> = ({
  statusData,
}) => {
  console.log(statusData);
  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      legend: {
        position: "right",
        labels: {
          font: {
            family: "ESTEDAD", // Change font family for legend}
          },
        },
      },

      title: {
        display: false,
        text: "وضعیت پروژه‌ها",
        font: {
          family: "ESTEDAD", // Change font family for legend
        },
        color: "black", // Change legend text color
      },
    },
    hover: {
      mode: "index", // Hover mode: affects all elements at index
      intersect: false,
    },
  };
  const data: ChartData<"doughnut", number[], string> = {
    labels: ["خاتمه یافته", "فسخ شده", "معلق", "شروع نشده", "در حال اجرا"],
    datasets: [
      {
        label: "تعداد پروژه",
        data: statusData,
        backgroundColor: [
          "#00b050",
          "#ff7e79",
          "#ffcc53",
          "#afafaf",
          "#7030a0",
        ],
        borderColor: ["#00b050", "#ff7e79", "#ffcc53", "#afafaf", "#7030a0"],
        hoverOffset: 10,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full h-full">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ProjectOpeningStatusChart;

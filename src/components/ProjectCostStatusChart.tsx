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

const ProjectCostStatusChart: React.FC<ProjectStatusChartProps> = ({
  statusData,
}) => {
  console.log(statusData);
  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    aspectRatio: 1,

    maintainAspectRatio: false,
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
        text: "وضعیت مالی پروژه‌ها",
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
    labels: ["بیشتر از بودجه", "کمتر از بودجه", "مطابق بودجه"],
    datasets: [
      {
        label: "تعداد پروژه",
        data: statusData,
        backgroundColor: ["#df1212", "#33cc33", "#02fed4"],
        borderColor: ["#df1212", "#33cc33", "#02fed4"],
        hoverOffset: 10,
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} options={options} />;
};

export default ProjectCostStatusChart;

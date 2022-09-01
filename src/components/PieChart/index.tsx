import { Pie } from "react-chartjs-2";

export function PieChart({ chartPieData, optionsPieChart }) {
  return <Pie data={chartPieData} options={optionsPieChart} />;
}

import { HeadsetData } from "../../components/HeadsetData";
import { PieChart } from "../../components/PieChart";
import Sidebar from "../../components/Sidebar";
import { Container, Content } from "./style";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  Filler,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(ArcElement, ChartDataLabels, Filler, Tooltip, Legend);

export default function Sales() {
  const datapoints = HeadsetData.map((item) => item.sales);

  const pieChart = {
    labels: [
      "Asus Rog Strix Go 2.4",
      "Audeze Penrose",
      "Bang & Olufsen Beoplay Portal",
      "Corsair Virtuoso RGB Wireless",
      "Corsair Virtuoso RGB Wireless SE",
      "Corsair Virtuoso RGB Wireless SE",
      "JBL Quantum 800",
      "JBL Quantum 810",
      "Razer Barracuda X",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: datapoints,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(85, 61, 6, 0.5)",
          "rgba(106, 240, 73, 0.5)",
          "rgba(0, 138, 115, 0.5)",
          "rgba(212, 22, 22, 0.5)",
          "rgba(192, 36, 192, 0.5)",
          "rgba(153, 58, 66, 0.5)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  // ACHAR UMA MANEIRA DE PEGAR O VALOR NO ARRAY PARA %
  // function totalSum(total, datapoint) {
  //   return total + datapoint;
  // }
  // const totalValue = datapoints.reduce(totalSum, 0);

  // const percentageValue = ((datapoints / totalValue) * 100).toFixed(1);
  // console.log(datapoints, "ola");
  // console.log(percentageValue);

  const config = {
    type: "pie",
    options: {},
    plugins: [ChartDataLabels],
  };
  return (
    <>
      <Sidebar />
      <Container>
        <Content>
          <PieChart chartPieData={pieChart} optionsPieChart={config} />
        </Content>
      </Container>
    </>
  );
}

import { HeadsetData } from "../../components/HeadsetData";
import { RadarChart } from "../../components/RadarChart";
import Sidebar from "../../components/Sidebar";
import { Container, Content } from "./style";

export default function Compare() {
  const radarData = {
    labels: [
      "Design",
      "Qualidade Sonora",
      "Microfone",
      "Energia",
      "Conectividade",
      "Recuros",
    ],
    datasets: HeadsetData.map((item) => {
      return {
        label: item.title,
        data: [
          item.design,
          item.quality,
          item.microphone,
          item.energy,
          item.connectivity,
          item.resources,
        ],
        backgroundColor: item.backgroundColor,
        borderColor: item.borderColor,
      };
    }),
  };

  return (
    <>
      <Sidebar />
      <Container>
        <Content>
          <RadarChart chartRadarData={radarData} />
        </Content>
      </Container>
    </>
  );
}

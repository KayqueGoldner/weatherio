import { Droplets, Eye, Thermometer, Waves } from "lucide-react";
import InfoItem from "@/components/info-item";
import SectionSubItem from "@/components/section/section-subitem";
import Title from "@/components/title";
import AirQuality from "@/components/main/air-quality";
import SunCycle from "@/components/main/sun-cycle";
import { 
  WeatherData,
  AirQualityData
} from "@/types";

const HighlightsWeather = ({
  data,
  airQuality
}: {
  data: WeatherData,
  airQuality: AirQualityData
}) => {
  const {
    visibility,
    main: {
      humidity,
      pressure,
      feels_like
    }
  } = data;

  return (
    <>
      <Title
        title="Destaques De Hoje"
        className="mb-4"
      />
      <SectionSubItem className="mb-4">
        <AirQuality airQuality={airQuality!} />
      </SectionSubItem>
      <SectionSubItem  className="mb-4">
        <SunCycle currentWeather={data!} />
      </SectionSubItem>
      <div className="grid gap-3 grid-cols-2">
        <SectionSubItem>
          <InfoItem
            icon={<Droplets />}
            title="Umidade"
            info={`${humidity}%`}
          />
        </SectionSubItem>
        <SectionSubItem>
          <InfoItem
            icon={<Waves />}
            title="Pressão"
            info={`${pressure}hPa`}
          />
        </SectionSubItem>
        <SectionSubItem>
          <InfoItem
            icon={<Eye />}
            title="Visibilidade"
            info={`${(visibility! / 1000).toFixed()}km`}
          />
        </SectionSubItem>
        <SectionSubItem>
          <InfoItem
            icon={<Thermometer />}
            title="Sensação"
            info={`${feels_like.toFixed()}°C`}
          />
        </SectionSubItem>
      </div>
    </>
  );
}
 
export default HighlightsWeather;
import SectionItem from "@/components/section/section-item";
import WeatherListCard from "@/components/weather-list-card";
import WindListCard from "@/components/wind-list-card";

const HourlyForecast = ({
  unix,
  timezone,
  icon,
  info,
  title
}: {
  unix: number;
  timezone: number;
  icon: string;
  info: {
    weather: number;
    wind: number;
    windSpeed: number;
  },
  title?: string;
}) => {
  return (
    <>
      <SectionItem 
        className="px-5 py-6 rounded-2xl mb-3"
        title={title}
      >
        <WeatherListCard
          unix={unix}
          timezone={timezone}
          icon={icon}
          weather={info.weather}
        />
      </SectionItem>

      <SectionItem 
        className="px-5 py-6 rounded-2xl"
      >
        <WindListCard
          unix={unix}
          timezone={timezone}
          windSpeed={info.windSpeed}
          wind={info.wind}
        />
      </SectionItem>
    </>
  );
}
 
export default HourlyForecast;
import { returnTime } from "@/utils/utils";
import Image from "next/image";

const WeatherListCard = ({
  unix,
  timezone,
  icon,
  weather
}: {
  unix: number;
  timezone: number;
  icon: string;
  weather: number;
}) => {
  return (
    <div className="flex flex-col gap-y-3 items-center">
      <h3>{returnTime(unix, timezone)}</h3>
      <Image 
        src={`/weather_icons/${icon}.png`} 
        alt="weather icon"
        width={50}
        height={50}
      />
      <p className="text-base">{weather.toFixed()}°C</p>
    </div>
  );
}
 
export default WeatherListCard;
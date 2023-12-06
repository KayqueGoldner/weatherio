import { returnMpstToKmh, returnTime, returnWindSpeed } from "@/utils/utils";
import Image from "next/image";

const WindListCard = ({
  unix,
  timezone,
  windSpeed,
  wind
}: {
  unix: number;
  timezone: number;
  windSpeed: number;
  wind: number;
}) => {
  return (
    <div className="flex flex-col gap-y-3 items-center">
      <h3>{returnTime(unix, timezone)}</h3>
      <Image 
        src={`/weather_icons/direction.png`} 
        alt="direction icon"
        width={50}
        height={50}
        style={{ transform: `${returnWindSpeed(windSpeed)}` }}
      />
      <p className="text-base">{returnMpstToKmh(wind).toFixed()} km/h</p>
    </div>
  );
}
 
export default WindListCard;
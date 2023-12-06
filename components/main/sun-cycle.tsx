import { Moon, Sun } from "lucide-react";

import { WeatherData } from "@/types";
import { returnTime } from "@/utils/utils";

const SunCycle = ({currentWeather}: { currentWeather: WeatherData }) => {
  const {
    timezone,
    sys: {
      sunrise,
      sunset
    }
  } = currentWeather;

  return (
    <>
      <h1 className="text-base text-zinc-500">Nascer & Pôr Do Sol</h1>
      <div className="flex justify-center items-center gap-x-5 lg:gap-x-8 xl:gap-x-14 gap-y-5 flex-wrap mt-5">
        <div className="text-center">
          <h3 className="text-zinc-500 text-sm mb-1 font-medium">NASCER</h3>
          <div className="flex items-center gap-x-2">
            <Sun />
            <p className="text-xl lg:text-2xl">{returnTime(sunrise, timezone)}</p>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-zinc-500 text-sm mb-1 font-medium">PÔR</h3>
          <div className="flex items-center gap-x-2">
            <Moon />
            <p className="text-xl lg:text-2xl">{returnTime(sunset, timezone)}</p>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default SunCycle;
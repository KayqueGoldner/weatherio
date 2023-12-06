import { Wind } from "lucide-react";

import AqiButton from "@/components/aqi_button";
import { AirQualityData } from "@/types";

const AirQuality = ({
  airQuality
}: { airQuality: AirQualityData }) => {
  const {
    list: [{
      components: {
        pm2_5,
        so2,
        no2,
        o3
      },
      main: {
        aqi
      }
    }]
  } = airQuality;

  return (
    <>
      <div className="flex gap-x-3 flex-wrap items-center">
        <h1 className="text-base text-zinc-500">Índice De Qualidade Do Ar</h1>
        <AqiButton
          aqiNumber={aqi}
        />
      </div>
      <div className="mt-5 flex gap-x-3 items-center">
        <div className="mr-3 hidden lg:block">
          <Wind />
        </div>
        <ul className="flex flex-col xs:flex-row justify-around items-start w-full">
          <li className="text-left sm:text-center">
            <h3 className="text-sm text-zinc-500 mb-1 font-medium">PM2.5</h3>
            <p className="text-xl lg:text-2xl">{pm2_5}</p>
          </li>
          <li className="text-left sm:text-center">
            <h3 className="text-sm text-zinc-500 mb-1 font-medium">SO2</h3>
            <p className="text-xl lg:text-2xl">{so2}</p>
          </li>
          <li className="text-left sm:text-center">
            <h3 className="text-sm text-zinc-500 mb-1 font-medium">NO2</h3>
            <p className="text-xl lg:text-2xl">{no2}</p>
          </li>
          <li className="text-left sm:text-center">
            <h3 className="text-sm text-zinc-500 mb-1 font-medium">O3</h3>
            <p className="text-xl lg:text-2xl">{o3}</p>
          </li>
        </ul>
      </div>
    </>
  );
}
 
export default AirQuality;
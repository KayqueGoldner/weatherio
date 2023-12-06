import Image from "next/image";

import { ForecastData } from "@/types";
import SectionItem from "@/components/section/section-item";
import { returnDate } from "@/utils/utils";
import Title from "@/components/title";

const ForecastWeather = ({
  forecast
}: { forecast: ForecastData }) => {
  const { list } = forecast;

  return (
    <>
      <Title 
        title="Previsão Para Os Próximos Dias"
        className="leading-9"
      />
      <SectionItem>
        <ul className="flex flex-col gap-y-5">
          {list
            .filter((item, i) => i % 8 === 0)
            .slice(1, 8)
            .map((item, index) => {
              const {
                dt,
                weather: [{
                  icon,
                  description
                }],
                main: {
                  temp_max
                }
              } = item;

              return (
                <li 
                  className="flex flex-col xs:flex-row justify-start xs:justify-between gap-x-3 items-start xs:items-center" 
                  key={index} 
                  title={description}
                >
                  <div className="flex gap-x-2 items-center">
                    <Image
                      src={`/weather_icons/${icon}.png`} 
                      width={40}
                      height={40}
                      alt="weather icon"
                    />
                    <p className="text-xl leading-none">{temp_max.toFixed() === "0" ? "0" : temp_max.toFixed()}°C</p>
                  </div>
                  <p className="text-sm">{returnDate(dt)}</p>
                </li>
          )})}
        </ul>
      </SectionItem>
    </>
  );
}
 
export default ForecastWeather;
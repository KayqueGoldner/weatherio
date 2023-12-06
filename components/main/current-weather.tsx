import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

import { WeatherData } from "@/types";
import { returnDate } from "@/utils/utils";
import Title from "@/components/title";

const CurrentWeather = ({
  data
}: { data: WeatherData }) => {
  const {
    name,
    sys: {
      country
    },
    main: {
      temp
    },
    weather: [{
      icon,
      description
    }],
    dt
  } = data;

  return (
    <>
      <Title title="Agora" />
      <div className="flex items-center gap-x-6 mt-4 mb-1">
        <Title
          title={`${temp.toFixed()}°C`}
          className="text-6xl"
        />
        <Image 
          src={`/weather_icons/${icon}.png`}
          width={60}
          height={60}
          placeholder="blur"
          blurDataURL={`/weather_icons/${icon}.png`}
          alt="weather icon"
        />
      </div>
      <p className="text-sm">{description}</p>
      <hr className="border-zinc-500/20 border-0 border-b-2 my-4" />
      <div className="flex gap-x-3 items-center mb-3">
        <Calendar size={19} />
        <p className="text-zinc-500 text-sm font-medium">{returnDate(dt)}</p>
      </div>
      <div className="flex gap-x-3 items-center">
        <MapPin size={19} />
        <p className="text-zinc-500 text-sm font-medium">{name}, {country}</p>
      </div>
    </>
  );
}
 
export default CurrentWeather;
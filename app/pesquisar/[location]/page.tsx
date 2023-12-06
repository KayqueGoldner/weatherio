'use client';
 

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { fetchData } from "@/utils/getFetchData";
import SectionItem from "@/components/section/section-item";
import CurrentWeather from "@/components/main/current-weather";
import ForecastWeather from "@/components/main/forecast-weather";
import Slider from "@/components/slider";
import HourlyForecast from "@/components/main/hourly-forecast";
import SkeletonLoading from "@/components/skeleton";
import { 
  AirQualityData,
  ForecastData,
  WeatherData,
} from "@/types";
import HighlightsWeather from "@/components/main/highlights-weather";


const Pesquisar = () => {
  const [data, setData] = useState<WeatherData>();
  const [forecast, setForecast] = useState<ForecastData>();
  const [airQuality, setAirQuality] = useState<AirQualityData>();
  const [loading, setLoading] = useState<Boolean>(true);

  const searchParams = useSearchParams();
  const lat = searchParams.get("lat") || "";
  const lon = searchParams.get("lon") || "";

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchData({ lat, lon });
        setData(res.data);
        setForecast(res.forecast);
        setAirQuality(res.air);
      } catch (error) {
        console.log("[PESQUISAR_FETCH]", error);
      } finally {
        setLoading(false);
      }
    }
  
    if(lat && lon) getData();
  }, [lat, lon]);

  if(loading) return <SkeletonLoading />;

  return (
    <main className="grow md:grid grid-container pt-28">
      <section className="h-max flex flex-col gap-y-10 md:sticky md:top-[100px] md:left-0 mb-5 md:mb-0">
        <SectionItem className="p-7">
          <CurrentWeather 
            data={data!}
          />
        </SectionItem>
        <div>
          <ForecastWeather 
            forecast={forecast!}
          />
        </div>
      </section>  
      <section className="overflow-hidden">
        <SectionItem>
          <HighlightsWeather
            data={data!}
            airQuality={airQuality!}
          />
        </SectionItem>
        <div className="mt-6">
          <h1 className="leading-10 text-lg">Previsão Para As Próximas Horas</h1>
          <Slider>
            {forecast!.list.slice(0, 9).map((item, index) => {
              const {
                dt,
                weather: [{ icon, description }],
                main: { temp },
                wind: { speed, deg },
              } = item;

              return (
                <li className="shrink-0 list-none" key={index}>
                  <HourlyForecast 
                    unix={dt}
                    timezone={data!.timezone}
                    icon={icon}
                    info={{
                      weather: temp,
                      wind: speed,
                      windSpeed: deg
                    }}
                    title={description}
                  />
                </li>
            )})}
          </Slider>
        </div>
      </section>
    </main>
  );
}
 
export default Pesquisar;
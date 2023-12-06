import Link from "next/link";
import Image from "next/image";

import openWeatherLogo from "@/public/openweather.png";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center gap-2 flex-wrap px-2 py-7">
      <h1 className="text-xs">Developed by Kayque Goldner.</h1>
      <Link href="https://openweathermap.org" target="_blank" title="https://openweathermap.org">
        <Image
          src={openWeatherLogo}
          alt="OpenWeather Logo"
        />
      </Link>
    </footer>
  );
}
 
export default Footer;
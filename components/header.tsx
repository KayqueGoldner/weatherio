"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { MapPin } from "lucide-react";

import logo from "@/public/logo.png";
import SearchBar from "@/components/search";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        router.push(`/pesquisar/search?lat=${latitude}&lon=${longitude}`);
      });
    } else {
      alert("A geolocalização não é suportada por este navegador.");
    }
  }

  return (
    <header 
      className="w-full fixed inset-x-auto z-10 flex items-center gap-x-2 py-4 px-5 bg-primary max-w-[1400px]"
    >
      <Link href="/" className="shrink-0 sm:p-1">
        <Image 
          src={logo} 
          alt="logo weatherio"
          priority
          className="w-[200px] lg:w-[240px]"
        />
      </Link>

      <div className="flex items-center gap-x-2.5 w-full justify-end">
        {pathname !== "/" && (
          <SearchBar />
        )}
        <button 
          className="btn-border flex-shrink-0 flex items-center px-4 py-4 lg:px-7 gap-x-3 md:cursor-pointer cursor-default"
          onClick={handleUserLocation}
        >
          <MapPin color="#fff" size={20} />
          <span 
            className="hidden lg:block text-base"
          >
            Minha Localização
          </span>
        </button>
      </div>
    </header>
  );
}
 
export default Header;
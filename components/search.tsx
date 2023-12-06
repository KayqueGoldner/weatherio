"use client";


import { useEffect, useState } from "react";
import { Search, ArrowLeft, MapPin } from "lucide-react";
import Link from "next/link";

import { fetchSearch } from "@/utils/getFetchData";
import { ICity } from "@/types";

interface SearchBarProps {
  classNames?: string;
  mobile?: boolean;
}

const SearchBar = ({
  classNames,
  mobile = true
}: SearchBarProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [data, setData] = useState<any>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const res = async () => {
      const response = await fetchSearch(query);
      setData(await response);
    };
    if(query) {
      res();
    }
  }, [query]);

  return (
    <div className={`w-full flex gap-x-2 grow ${classNames || "justify-end lg:justify-around"}`}>
      <button
        type="button"
        className={`border-2 ${mobile ? "md:hidden" : "hidden"} btn-border p-4 rounded-full cursor-default`}
        onClick={() => setSearchOpen(true)}
      >
        <Search color="#fff" size={20} />
      </button>
      {searchOpen ? (
        <div className="bg-zinc-900 h-screen w-full absolute top-0 left-0 z-10 transition-all duration-700">
          <div className="flex border-b border-zinc-700">
            <button 
              type="button"
              className="flex justify-center items-center px-5 py-4 cursor-default"
              onClick={() => setSearchOpen(false)}
            >
              <ArrowLeft color="#fff" />
            </button>
            <input 
              type="text" 
              placeholder="Pesquisar cidade"
              className="bg-transparent outline-none text-lg w-full placeholder-neutral-500"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
          </div>
          <ul>
            {query && data?.map((item: ICity) => (
              <li 
                key={item.lat} 
                className="hover:bg-zinc-800/80 transition"
                onClick={() => {
                  setQuery("");
                  setSearchOpen(false);
                }}
              >
                <Link 
                  href={`/pesquisar/search?lat=${item.lat}&lon=${item.lon}`} 
                  className="flex items-center gap-x-5 px-5 py-2"
                >
                  <div>
                    <MapPin color="#fff" />
                  </div>
                  <div>
                    <p className="text-zinc-300 text-lg leading-6">{item.name}</p>
                    <p className="text-zinc-500 text-[15px] leading-5">
                      {item.state} - {item.country}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={`relative ${mobile ? "hidden md:block" : "block"} grow max-w-[700px]`}>
          <div className="flex items-center gap-x-3 ps-5 w-full border-2 btn-border rounded-[200px] focus-within:bg-surface">
            <Search color="#fff" size={22} />
            <input 
              type="text" 
              className="block w-full h-[55px] rounded-r-full px-2 text-base bg-transparent outline-none text-md placeholder-neutral-500"
              placeholder="Pesquisar cidade"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
          </div>
          <ul className="absolute top-[110%] left-0 w-full rounded-xl overflow-hidden bg-surface shadow-lg">
            {query && data?.map((item: ICity) => (
              <li 
                key={item.lat} 
                className="hover:bg-zinc-800/80 transition"
                onClick={() => {
                  setQuery("");
                  setSearchOpen(false);
                }}
              >
                <Link 
                  href={`/pesquisar/search?lat=${item.lat}&lon=${item.lon}`} 
                  className="flex items-center gap-x-5 px-5 py-2"
                >
                  <div>
                    <MapPin color="#fff" />
                  </div>
                  <div>
                    <p className="text-zinc-300 text-lg leading-6">{item.name}</p>
                    <p className="text-zinc-500 text-[15px] leading-5">
                      {item.state} - {item.country}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
 
export default SearchBar;
import { NextResponse } from "next/server";

const api_key = process.env.NEXT_PUBLIC_API_KEY;

export const fetchSearch = async (query: string) => {
  try {
    const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${api_key}`);
    if(!res.ok) {
      throw {
        message: "Failed to fetch",
        statusText: res.statusText,
        status: res.status
      }
    }
    return await res.json();
  } catch(error) {
    throw new Error("Requisição não pôde ser concluída.");
  }
}


export const fetchData = async ({ lat, lon }: { lat: string; lon: string; }) => {
  try {
    const locationData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}&lang=pt_br`, { next: { revalidate: 1800 } });
    const forecastData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}&lang=pt_br`, { next: { revalidate: 1800 } })
    const airData = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}&lang=pt_br`, { next: { revalidate: 1800 } });
  
    if(!locationData.ok || !forecastData.ok || !airData.ok) {
      throw new NextResponse("Requisição não pôde ser concluída", { status: 400 });
    }
    return {
      data: await locationData.json(),
      forecast: await forecastData.json(),
      air: await airData.json()
    };
  } catch(error) {
    throw new NextResponse("Requisição não pôde ser concluída", { status: 400 });
  }
}
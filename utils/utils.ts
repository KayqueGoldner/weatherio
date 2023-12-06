export const returnDate = (dt: number): string => {
  const weekDays: string[] = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  const monthNames: string[] = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  let date: Date = new Date(dt * 1000);
  let weekDay: string = weekDays[date.getDay()];
  let monthNameIndex: number = Number(date.toLocaleDateString().slice(3, 5)) - 1;
  let monthName: string = monthNames[monthNameIndex];
  return `${weekDay}, ${date.toLocaleDateString().slice(0, 2) < '10' ? date.toLocaleDateString().slice(1, 2) : date.toLocaleDateString().slice(0, 2)} de ${monthName}`;
}

export const returnTime = (timeUnix: number, timezone: number) => {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
}

export const returnMpstToKmh = (mps: number | string): number => {
  const mph = Number(mps) * 3600;
  return mph / 1000;
}

export const returnWindSpeed = (speed: number | string): string => {
  return `rotate(${Number(speed) - 180}deg)`;
}

export function getAqiText(aqiValue: number) {
  switch (aqiValue) {
    case 1:
      return {
        level: "Boa",
        message: "Respire fundo e desfrute do ar puro - a qualidade do ar está boa!",
      };
    case 2:
      return {
        level: "Razoável",
        message: "Respire com tranquilidade, a qualidade do ar está razoável.",
      };
    case 3:
      return {
        level: "Moderada",
        message: "Respire com tranquilidade, a qualidade do ar está moderada.",
      };
    case 4:
      return {
        level: "Ruim",
        message: "Cuidado! A qualidade do ar está ruim, evite atividades ao ar livre e proteja sua saúde.",
      };
    case 5:
      return {
        level: "Muito Ruim",
        message: "A qualidade do ar está perigosa - é altamente recomendado ficar em ambientes internos e reduzir a exposição a poluentes atmosféricos.",
      };
    default:
      return null;
  }
}
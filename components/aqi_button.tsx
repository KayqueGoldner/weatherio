import { cn } from "@/utils/mergeClasses";
import { getAqiText } from "@/utils/utils";

const AqiButton = ({
  aqiNumber
}: {
  aqiNumber: number;
}) => {
  const aqi = getAqiText(aqiNumber);

  return (
    <button
      className={cn(
        "px-4 py-1.5 text-sm font-medium rounded-full cursor-help",
        aqiNumber === 5 && "bg-aqi-5 text-on-aqi-5",
        aqiNumber === 4 && "bg-aqi-4 text-on-aqi-4",
        aqiNumber === 3 && "bg-aqi-3 text-on-aqi-3",
        aqiNumber === 2 && "bg-aqi-2 text-on-aqi-2",
        aqiNumber === 1 && "bg-aqi-1 text-on-aqi-1",
      )}
      title={aqi?.message}
    >
      {aqi?.level}
    </button>
  );
}
 
export default AqiButton;
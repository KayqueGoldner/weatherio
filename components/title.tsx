import { cn } from "@/utils/mergeClasses";

const Title = ({
  title,
  className
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h1 className={cn(
      "text-lg capitalize",
      className
    )}>
      {title}
    </h1>
  );
}
 
export default Title;
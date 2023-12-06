import { cn } from "@/utils/mergeClasses";

const SectionSubItem = ({
  className,
  children
}: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={cn(
      "bg-black-alpha-10 rounded-3xl p-5",
      className
    )}>
      {children}
    </div>
  );
}
 
export default SectionSubItem;
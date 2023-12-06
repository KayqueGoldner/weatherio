import { cn } from "@/utils/mergeClasses";

const SectionItem = ({
  className,
  title,
  children
}: {
  className?: string;
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <div 
      className={cn(
        "bg-surface rounded-3xl px-5 py-6",
        className
      )}
      title={title}
    >
      {children}
    </div>
  );
};

export default SectionItem;

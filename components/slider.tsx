const Slider = ({
  children
}: { 
  children: React.ReactNode;
}) => {
  return (
    <div className="pb-3 overflow-x-auto">
      <ul className="flex gap-3">
        {children}
      </ul>
    </div>
  );
}
 
export default Slider;
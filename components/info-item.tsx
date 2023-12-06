import Title from "@/components/title";

const InfoItem = ({
  icon,
  title,
  info,
}: {
  icon: React.ReactNode;
  title: string;
  info: any;
}) => {
  return (
    <>
      <Title
        title={title}
        className="text-base text-zinc-500"
      />
      <div className="flex justify-between items-center mt-5">
        <div className="hidden sm:block">
          {icon}
        </div>
        <p className="text-xl lg:text-2xl">{info}</p>
      </div>
    </>
  );
}
 
export default InfoItem;
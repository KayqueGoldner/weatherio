const SkeletonLoading = () => {
  return (
    <div className="md:grid grid-container pt-28">
      <div className="flex flex-col gap-y-12 justify-start">
        <div className="animate-pulse bg-surface h-[300px] rounded-3xl loading-skeleton"></div>
        <div className="animate-pulse bg-surface h-[300px] rounded-3xl loading-skeleton"></div>
      </div>
      <div className="animate-pulse bg-surface h-screen rounded-3xl loading-skeleton"></div>
    </div>
  );
}
 
export default SkeletonLoading;
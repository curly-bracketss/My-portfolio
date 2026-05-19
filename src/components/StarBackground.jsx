export const StarBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0 bg-background transition-colors duration-200">
      {/* Subtle grid mesh */}
      <div className="absolute inset-0 grid-bg opacity-70" />
      
      {/* Very soft, organic lighting highlights (non-neon) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/[0.02] blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/[0.02] blur-[120px]" />
    </div>
  );
};

export const StarBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-10 top-20 h-1 w-1 rounded-full bg-primary" />
        <div className="absolute left-1/3 top-10 h-1.5 w-1.5 rounded-full bg-primary" />
        <div className="absolute right-20 top-24 h-1 w-1 rounded-full bg-primary" />
        <div className="absolute right-1/4 top-1/3 h-1.5 w-1.5 rounded-full bg-primary" />
        <div className="absolute left-1/4 bottom-24 h-1 w-1 rounded-full bg-primary" />
        <div className="absolute right-1/3 bottom-16 h-1 w-1 rounded-full bg-primary" />
      </div>
    </div>
  );
};

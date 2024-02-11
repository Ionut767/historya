export default function DefTitle({
  children,
  subtitle,
  size
}: {
  children: React.ReactNode;
  subtitle?: string;
  size?: number;
}) {
  return (
    <div style={{ fontFamily: "'Gilda Display', serif" }}>
      <h1 className={`m-10 mb-0 ${size? `text-${size}xl` : `text-6xl`} group text-white text-center relative`}>
        {children}
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-red-700 origin-left transform scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-500" />
      </h1>
      {subtitle && (
        <p className=" mb-10 text-gray-800 font-extrabold">{subtitle}</p>
      )}
    </div>
  );
}

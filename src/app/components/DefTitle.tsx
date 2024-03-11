export default function DefTitle({
  children,
  subtitle,
  size,
  alwaysShow,
}: {
  children: React.ReactNode;
  subtitle?: string;
  size?: number;
  alwaysShow?: boolean;
}) {
  return (
    <div style={{ fontFamily: "'Gilda Display', serif" }}>
      <h1
        className={` mb-0 ${
          size ? `text-${size}xl` : `text-6xl`
        } group text-white text-center relative`}
      >
        {children}
        <span
          className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-red-700 origin-left transform scale-x-0 ${
            alwaysShow
              ? "scale-x-100"
              : "group-hover:scale-x-100 group-focus:scale-x-100"
          } transition-transform duration-500`}
        />
      </h1>
      {subtitle && (
        <p className=" mb-10 text-gray-100 font-extrabold">{subtitle}</p>
      )}
    </div>
  );
}

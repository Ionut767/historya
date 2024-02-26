import DefTitle from "../components/DefTitle";
export default function DefText({
  titlesize,
  title,
  subtitle,
  children,
  id,
  alwaysShow,
}: {
  titlesize?: number;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  id?: string;
  alwaysShow?: boolean;
}) {
  return (
    <section
      className=" w-full text-center flex flex-col items-center"
      style={{ fontFamily: "'Gilda Display', serif" }}
      id={`${id}`}
    >
      <DefTitle
        subtitle={subtitle}
        alwaysShow={alwaysShow}
        size={titlesize ? titlesize : 4}
      >
        {title}
      </DefTitle>
      <p className=" text-lg  lg:w-3/6 w-5/6 text-gray-500">{children}</p>
    </section>
  );
}

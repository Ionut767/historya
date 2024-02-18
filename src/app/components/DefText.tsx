import DefTitle from "../components/DefTitle";
import Ev from "../components/Ev";
export default function DefText({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className=" w-full text-center flex flex-col items-center"
      style={{ fontFamily: "'Gilda Display', serif" }}
    >
      <DefTitle subtitle={subtitle} size={4}>
        {title}
      </DefTitle>
      <p className=" text-lg  lg:w-3/6 w-5/6 text-gray-500">{children}</p>
    </section>
  );
}

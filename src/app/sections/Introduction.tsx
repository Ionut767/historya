import DefTitle from "../components/DefTitle";
import Ev from "../components/Ev";
export default function Introduction() {
  return (
    <section
      className=" w-full text-center flex flex-col items-center"
      style={{ fontFamily: "'Gilda Display', serif" }}
    >
      <DefTitle subtitle="- XIV -" size={4}>
        APARIȚIE ȘI URMĂRI
      </DefTitle>
      <p className=" text-lg  lg:w-3/6 w-5/6 text-gray-500">
        <Ev i b>
          Renașterea italiană
        </Ev>{" "}
        a fost o perioadă remarcabilă în istoria culturală, evidențiindu-se prin
        inovații în{" "}
        <Ev i>
          pictură, arhitectură, sculptură, literatură, muzică, filozofie și
          știință
        </Ev>
        . Italia a devenit lider european în aceste domenii până la sfârșitul{" "}
        <Ev i> secolului al XV-lea </Ev>, marcând epoca cu{" "}
        <Ev i b>
          Pacea lui Lodi (1454-1494)
        </Ev>{" "}
        între statele italiene. Această perioadă de înflorire a adus creații
        artistice excepționale și a influențat profund cultura europeană.{" "}
        <Ev
          b
          c
          lnk={{
            out: false,
            link: "/aparitie-si-evenimente",
          }}
        >
          Citește mai mult...
        </Ev>
      </p>
    </section>
  );
}

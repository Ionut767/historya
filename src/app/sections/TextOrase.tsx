import DefTitle from "../components/DefTitle";
import Ev from "../components/Ev";
export default function TextOrase() {
  return (
    <section
      className=" w-full text-center flex flex-col items-center"
      style={{ fontFamily: "'Gilda Display', serif" }}
    >
      <DefTitle subtitle="- Dezvoltare și Cultură -" size={4}>
        ORAȘE RENASCENTISTE ITALIENE
      </DefTitle>
      <p className=" text-lg  lg:w-3/6 w-5/6 text-gray-500">
        <Ev i b>
          Renașterea italiană{" "}
        </Ev>
        a fost o perioadă notabilă de schimbare și progres, cu orașe precum{" "}
        <Ev i>Florența și Roma</Ev> în centrul acestei evoluții. Aceste orașe au
        devenit{" "}
        <Ev i> centre pentru inovații în artă, arhitectură și comerț </Ev>,
        marcând trecerea de la Evul Mediu la Epoca Modernă. Au fost sursa unor
        opere de artă și arhitectură revoluționare, precum și centre de comerț
        și finanțe, care au influențat profund cultura europeană.
      </p>
    </section>
  );
}

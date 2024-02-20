import TestImage from "@/media/Codul-lui-Michelangelo-Capela-Sixtina.png";
import TestImage2 from "@/media/_The_School_of_Athens__by_Raffaello_Sanzio_da_Urbino.jpg";
import TestImage3 from "@/media/Michelangelo's_Pieta_5450_cropncleaned.jpg";
import Ev from "@/app/components/Ev";
import DefTitle from "@/app/components/DefTitle";
import DefSection from "@/app/components/DefSection";
export default function Page() {
  return (
    <main
      className=" flex flex-col justify-center items-center p-3"
      style={{ fontFamily: "'Gilda Display', serif" }}
    >
      <section className=" w-full h-[15vh] flex items-center justify-center border-gray-500 border-b-[1px]">
        <DefTitle>APARIȚIE ȘI URMĂRI</DefTitle>
      </section>
      <section className="w-full lg:w-10/12">
        <DefSection
          title={"Apariția artei în perioada Renașteri"}
          subtitle={"- Italia -"}
          imagelink={TestImage}
          imgTitle="Scena Creației, în care Dumnezeu este reprezentat într-un creier uman - Michelangelo"
        >
          <Ev i>Apariția artei în perioada Renașterii</Ev> a fost un moment
          crucial în
          <Ev i> istoria culturii și artei europene</Ev>, extinzându-se
          aproximativ între <Ev i> secolele XIV și XVI</Ev>. Renașterea a fost
          caracterizată de o redescoperire a valorilor și idealurilor clasice
          ale Antichității greco-romane și a avut un impact semnificativ asupra
          dezvoltării artei, arhitecturii, științei și filosofiei, apărând
          datorită unui ansamblu complex de factori culturali, sociali și
          economici, Italia fiind punctul de plecare a acestui moment.
          <br />
          <br />
          <Ev i sb size={1}>
            &quot; În viaţă, frumuseţea dispare. În artă, nu. &quot; <br />-
            Leonardo Da Vinci (1452 - 1519)
          </Ev>
        </DefSection>
        <DefSection
          title={"Dezvoltarea Artei Renascentiste Italiene"}
          subtitle={"- Comerț și Prosperitate Economică -"}
          imagelink={TestImage2}
          imgTitle="Școala de la Atena-Sanzio - Raffaello Sanzio da Urbino"
          reverse
        >
          <Ev i>Dezvoltarea și creșterea comerțului</Ev> au avut un mare impact
          economic asupra orașelor italiene și asupra artei renascentiste
          italiene. Orașe precum <Ev i>Florența, Veneția și Milano</Ev> au
          devenit puncte remarcabile ale dezvoltării culturale, însemnând atât o
          <Ev i>dezvoltare economică fabuloasă pe plan financiar</Ev>, cât și o
          dezvoltare remarcabilă pe plan artistic și cultural.{" "}
          <Ev i sb>
            Mecentul
          </Ev>
          , sprijinul financiar oferit de familii bogate și de elitele politice,
          a jucat un rol crucial în stimularea și dezvoltarea creativității
          artistice. Aceste condiții au dus la o dezvoltare impresionantă a
          artiștilor, astfel orașele italiene devenind adevărate centre
          culturale. Această dezvoltare a avut un mare impact al Renașterii
          italiene pe plan artistic și cultural, ducând astfel la remarcabile
          opere de artă și la un mare impact asupra istoriei culturii europene.
        </DefSection>
        <DefSection
          title={"Redescoperirea Antichității"}
          subtitle={"- Perioada Redescoperirii -"}
          imagelink={TestImage3}
          imgTitle={"La Pietà di Michelangelo"}
        >
          <Ev i>Dezvoltarea Artei Renascentiste Italiene</Ev> a reprezentat o
          redescoperire profundă a valorilor clasice ale{" "}
          <Ev i>Antichității greco-romane</Ev> între{" "}
          <Ev i>secolele XIV și XVI</Ev>. Artiștii și intelectualii s-au dedicat
          studiului operei antice,{" "}
          <Ev i>integrând perspectivele filozofice și estetice</Ev> în creațiile
          lor. Acest proces a condus la o reînviere a idealurilor clasice,
          marcând un moment definitoriu în evoluția culturii europene. Prin
          integrarea acestor elemente în creațiile lor,
          <Ev i>
            {" "}
            artiștii renascentiști au adus un suflu nou în lumea artistică,
            marcând un moment esențial în evoluția culturii europene.
          </Ev>
          <br />
          <br />
          <Ev i sb size={1}>
            &quot;Problema pe care o au oamenii nu este că ţintesc prea sus şi
            eşuează, ci că ţintesc prea jos şi reuşesc.&quot; <br />-
            Michelangelo Buonarroti (1475 - 1564)
          </Ev>
        </DefSection>
      </section>
    </main>
  );
}

import PicturesSlider from "./components/PicturesSlider";
import Orase from "./sections/Orase";
import Banner from "./sections/Banner";
import DefText from "./components/DefText";
import Ev from "./components/Ev";

export default function Home() {
  return (
    <main>
      <Banner />
      <DefText title="APARIȚIE ȘI URMĂRI" subtitle="- XIV -">
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
      </DefText>
      <PicturesSlider hasAvatar={true} typeOfBar={"bar"} />
      <DefText
        title="ORAȘE RENASCENTISTE ITALIENE"
        subtitle="- Dezvoltare și Cultură -"
      >
        <Ev i b>
          Renașterea italiană{" "}
        </Ev>
        a fost o perioadă notabilă de schimbare și progres, cu orașe precum{" "}
        <Ev i>Florența și Roma</Ev> în centrul acestei evoluții. Aceste orașe au
        devenit{" "}
        <Ev i> centre pentru inovații în artă, arhitectură și comerț </Ev>,
        marcând trecerea de la Evul Mediu la Epoca Modernă. Au fost sursa unor
        opere de artă și arhitectură revoluționare, precum și centre de comerț
        și finanțe, care au influențat profund cultura europeană prin
        complexitatea și importanța sa.
      </DefText>
      <Orase />
      <DefText
        title="Marile Personalități Renascentiste Italiene"
        subtitle="- Importanță, Opere, Viață -"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, numquam
        sunt quos, voluptatum, quidem cumque voluptate tempore quae voluptates
        soluta doloremque.
      </DefText>
      <PicturesSlider hasAvatar={false} typeOfBar={"nums"} />
    </main>
  );
}

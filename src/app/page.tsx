import PicturesSlider from "./components/PicturesSlider";
import Orase from "./sections/Orase";
import Banner from "./sections/Banner";
import DefText from "./components/DefText";
import Ev from "./components/Ev";

const data = {
  author: [
    {
      name: "Leonardo Da Vinci",
      image:
        "https://revistamagazin.ro/wp-content/uploads/2023/03/leonardo-da-vinci-.webp",
      age: 67,
      birthdate: "15 Aprilie 1452",
      description: "None",
    },
    {
      name: "Michelangelo di Lodovico Buonarroti Simoni",
      image:
        "https://www.historyhit.com/app/uploads/2021/06/Michelangelo-Cover-Image.jpg?x64254",
      age: 60,
      birthdate: "6 Martie 1475",
      description: "None",
    },
    {
      name: "Raffaello Sanzio",
      image:
        "https://cdn.thecollector.com/wp-content/uploads/2019/12/Self-Portrait-and-painting-by-Raphael.jpg",
      age: 37,
      birthdate: "6 Aprilie 1483",
      description: "None",
    },
    {
      name: "Donato di Niccolò di Betto Bardi",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-51246627.jpg",
      age: 80,
      birthdate: "1464",
      description: "None",
    },
  ],
};
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
        <Ev i b>
          Renașterea italiană
        </Ev>{" "}
        a produs artiști remarcabili precum <Ev i>Leonardo Da Vinci</Ev> care
        este cunoscut pentru “Mona Lisa” și "Cina cea de Taină",{" "}
        <Ev i>Michelangelo</Ev> care este faimos pentru “David”, “Pieta” și
        frescele de pe tavanul Capelei Sixtine și <Ev i>Raphael</Ev> este
        renumit pentru "Școala din Atena", acești artiști au revoluționând arta
        prin introducerea perspectivă, a realismului și temelor umaniste.
      </DefText>
      <PicturesSlider hasAvatar={false} typeOfBar={"bar"} />
    </main>
  );
}

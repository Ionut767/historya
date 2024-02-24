"use client";
import PicturesSlider from "./components/PicturesSlider";
import Orase from "./sections/Orase";
import Banner from "./sections/Banner";
import DefText from "./components/DefText";
import Ev from "./components/Ev";
import { useEffect, useState } from "react";
import { Author, Oras } from "./types";
import { getArtists, getCitys } from "./servercomponents/actions";
export default function Home() {
  const [artists, setArtists] = useState<Author[]>([]);
  const [orase, setOrase] = useState<Oras[]>([]);
  const [loadingArtists, setLoadingArtists] = useState<boolean>(true);
  const [loadingOrase, setLoadingOrase] = useState<boolean>(true);
  useEffect(() => {
    getArtists().then((data: any) => {
      setArtists(data);
      setLoadingArtists(false);
    });
    getCitys().then((data: any) => {
      setOrase(data);
      setLoadingOrase(false);
    });
  }, []);

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
      <PicturesSlider
        loadingState={loadingArtists}
        hasAvatar={true}
        typeOfBar={"bar"}
        sliderdata={artists}
      />
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
      <Orase dataOrase={orase} loadingState={loadingOrase} />
      <DefText
        title="Marile Personalități Renascentiste Italiene"
        subtitle="- Importanță, Opere, Viață -"
      >
        <Ev i b>
          Renașterea italiană
        </Ev>{" "}
        a produs artiști remarcabili precum <Ev i>Leonardo Da Vinci</Ev> care
        este cunoscut pentru &quot;Mona Lisa&quot; și &quot;Cina cea de
        Taină&quot;, <Ev i>Michelangelo</Ev> care este faimos pentru
        &quot;David&quot;, &quot;Pieta&quot; și frescele de pe tavanul Capelei
        Sixtine și <Ev i>Raphael</Ev> este renumit pentru &quot;Școala din
        Atena&quot;, acești artiști au revoluționând arta prin introducerea
        perspectivă, a realismului și temelor umaniste.
      </DefText>
      <PicturesSlider
        loadingState={loadingArtists}
        hasAvatar={false}
        typeOfBar={"bar"}
        sliderdata={artists}
      />
    </main>
  );
}

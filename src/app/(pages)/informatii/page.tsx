"use client";

import DefTitle from "@/app/components/DefTitle";
import Ev from "@/app/components/Ev";

export default function Informatii() {
  return (
    <div
      className="container flex justify-center flex-col"
      style={{ fontFamily: "'Gilda Display', serif" }}
    >
      <DefTitle size={4} alwaysShow>
        Informații website
      </DefTitle>
      <div className=" mx-5 flex justify-center flex-col text-gray-300">
        <h2 className="text-2xl font-bold m-5">SCOPUL ACESTUI WEBSITE</h2>
        <ul className="list-disc m-3 sm:ml-10">
          <li>
            <p>
              Acest website a fost creat cu scopul de a participa la concursul
              &quot;Istorie și Societate în Dimensiune Virtuală&quot;. Tema
              aleasă pentru acest concurs este o perioadă fascinantă în istoria
              artei care a avut un impact profund asupra evoluției culturii și
              societății.
            </p>
          </li>
          <li>
            <p>
              Renașterea italiană a fost o perioadă de reînnoire și renaștere a
              interesului pentru știință, artă, literatură și filosofie. A fost
              o perioadă în care oamenii au început să privească lumea cu o nouă
              perspectivă, să exploreze și să experimenteze în moduri noi și
              inovatoare.
            </p>
          </li>
          <li>
            <p>
              Prin acest website, dorim să aducem în prim-plan frumusețea și
              complexitatea artei Renașterii italiene, să explorăm contribuțiile
              sale semnificative la dezvoltarea artei și să evidențiem influența
              sa asupra lumii contemporane. Vom explora operele de artă
              semnificative ale acestei perioade, artistii care le-au creat și
              contextul istoric în care acestea au fost realizate.
            </p>
          </li>
          <li>
            <p>
              Sperăm că prin acest website, vizitatorii vor avea ocazia să se
              conecteze cu arta Renașterii italiene, să înțeleagă mai bine
              importanța și impactul acesteia și să se inspire din frumusețea și
              creativitatea acestei perioade remarcabile din istoria umanității.
            </p>
          </li>
        </ul>
        <h2 className="text-2xl font-bold m-5">TEHNOLOGIILE UTILIZATE</h2>
        <ul className="list-disc m-3 sm:ml-10">
          <li>
            <p>
              NextJS - este un cadru de lucru React pentru construirea de
              aplicații JavaScript. Este flexibil, extensibil și funcționează
              excelent atât pentru aplicațiile cu o singură pagină cât și pentru
              randarea pe partea de server
            </p>
          </li>
          <li>
            <p>
              Typescript - este un superset al JavaScript-ului cu tipizare
              statică care se compilează în JavaScript simplu. Oferă clase,
              module și interfețe pentru a ajuta la construirea de componente
              robuste.
            </p>
          </li>
          <li>
            <p>
              TailwindCSS - este un cadru CSS bazat pe utilități care oferă
              clase de utilități de nivel scăzut pentru a construi design-uri
              personalizate.
            </p>
          </li>
          <li>
            <p>
              Git - este un sistem gratuit și open source de control al
              versiunilor distribuite conceput pentru a gestiona totul, de la
              proiecte mici până la foarte mari, cu viteză și eficiență
            </p>
          </li>
          <li>
            <p>
              NodeJS - este un mediu de execuție JavaScript open-source,
              cross-platform, care rulează pe motorul V8 și execută codul
              JavaScript în afara unui browser web
            </p>
          </li>
          <li>
            <p>
              BunJS - este un mediu de execuție JavaScript modern, similar cu
              Node.js și Deno. Este scris în Go și poate fi folosit pentru a
              construi aplicații de partea serverului rapide și fiabile
            </p>
          </li>
          <li>
            <p>
              MongoDatabase - este un program de bază de date orientat pe
              documente, disponibil la sursă, cross-platform. Clasificat ca un
              program de bază de date NoSQL, MongoDB folosește documente
              asemănătoare cu JSON cu scheme opționale
            </p>
          </li>
          <li>
            <p>
              Google Drive - este un serviciu de stocare și sincronizare a
              fișierelor dezvoltat de Google. Permite utilizatorilor să stocheze
              fișiere în cloud, să partajeze fișiere și să editeze documente,
              foi de calcul și prezentări cu colaboratori
            </p>
          </li>
        </ul>
        <h2 className="text-2xl font-bold m-5">COD WEBSITE</h2>
        <ul className="list-disc m-3 sm:ml-10">
          <li>
            <p>
              Acesta este un proiect de tip &quot;OPEN SOURCE&quot; ce poate fi
              accessat si folosit de către oricine, accesând{" "}
              <Ev
                b
                l
                lnk={{
                  out: true,
                  link: "https://github.com/Ionut767/historya",
                }}
              >
                acest
              </Ev>
              link către proiectul sursă postat public pe{" "}
              <Ev l lnk={{ out: true, link: "https://github.com/" }}>
                github.com
              </Ev>
            </p>
          </li>
          <li>
            <p>
              Pentru mai multe detalii sau proiecte, vezi profilul de pe github{" "}
              <Ev l lnk={{ out: true, link: "https://github.com/Ionut767" }}>
                Ionut767
              </Ev>
            </p>
          </li>
        </ul>
        <h2 className="text-2xl font-bold m-5">SURSE-BIBLIOGRAFIE</h2>
        <ul className="list-disc m-3 sm:ml-10">
          <li>
            <Ev
              b
              lnk={{
                out: true,
                link: "https://ro.wikipedia.org/wiki/Rena%C8%99terea_italian%C4%83",
              }}
            >
              Wikipedia
            </Ev>
          </li>
          <li>
            <Ev
              b
              lnk={{
                out: true,
                link: "https://www.shezen.ro/renasterea-italiana-pictura/",
              }}
            >
              Shezen
            </Ev>
          </li>
          <li>
            <Ev
              b
              lnk={{
                out: true,
                link: "https://www.fundatiacaleavictoriei.ro/arta-renasterii-italiene-sandro-botticelli-leonardo-da-vinci-michelangelo-buonarroti/",
              }}
            >
              Fundatiacaleavictoriei
            </Ev>
          </li>
          <li>
            <Ev
              b
              lnk={{
                out: true,
                link: "https://bucurestiivechisinoi.ro/2015/07/arta-renasterii-italiene-botticelli-leonardo-da-vinci-michelangelo-10-12-august/",
              }}
            >
              Bucurestiivechisinoi
            </Ev>
          </li>
          <li>
            <Ev
              b
              lnk={{
                out: true,
                link: "https://www.britannica.com/list/10-famous-artworks-by-leonardo-da-vinci",
              }}
            >
              Britannica
            </Ev>
          </li>
          <li>
            <Ev
              b
              lnk={{
                out: true,
                link: "https://www.worldhistory.org/collection/120/a-gallery-of-50-renaissance-paintings/",
              }}
            >
              Worldhistory
            </Ev>
          </li>
        </ul>
      </div>
    </div>
  );
}

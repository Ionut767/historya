import DefTitle from "@/app/components/DefTitle";
import Ev from "@/app/components/Ev";

export default function PrivacyPolicy() {
  return (
    <div
      className="container flex justify-center flex-col"
      style={{ fontFamily: "'Gilda Display', serif" }}
    >
      <DefTitle size={4} alwaysShow>
        Politica și Confidențialitate
      </DefTitle>
      <div className=" mx-5 flex justify-center flex-col text-gray-300">
        <h2 className="text-2xl font-bold m-5">SCOPUL ACESTUI WEBSITE</h2>
        <ul className="list-disc m-3 sm:ml-10">
          <li>
            <p>
              Acest website a fost creat cu scopul de a participa la concursul
              "Istorie și Societate în Dimensiune Virtuală". Tema aleasă pentru
              acest concurs este "ARTA RENAȘTERII ITALIENE", o perioadă
              fascinantă în istoria artei care a avut un impact profund asupra
              evoluției culturii și societății.
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
        <h2 className="text-2xl font-bold m-5">
          PRELUCRAREA DATELOR PERSONALE
        </h2>
        <ul className="list-disc m-3 sm:ml-10">
          <li>
            <p>
              Prin completarea oricărui formular sau test de pe acest website,
              vă oferiți acordul ca datele dvs. personale să fie prelucrate,
              colectate, procesate și stocate în baza de date a website-ului, în
              conformitate cu Regulamentul UE 2016/679 privind protecția
              persoanelor fizice în ceea ce privește prelucrarea datelor cu
              caracter personal și privind libera circulație a acestor date
              „GDPR”.
            </p>
          </li>
          <li>
            <p>
              Acest acord se aplică tuturor datelor personale furnizate de dvs.,
              inclusiv numele, vârsta și orice alte informații relevante
              necesare pentru a vă oferi serviciile noastre. Vă asigurăm că vom
              stoca doar datele esențiale, necesare pentru a vă oferi serviciile
              noastre, și că acestea vor fi tratate cu cea mai mare
              confidențialitate și respectând toate regulile privind protecția
              datelor personale. De asemenea, vom lua toate măsurile necesare
              pentru a preveni accesul neautorizat sau utilizarea
              necorespunzătoare a acestor date.
            </p>
          </li>
          <li>
            <p>
              Ne dorim să oferim o experiență utilizatorilor noștri cât mai
              plăcută și eficientă pe acest website, iar pentru a atinge acest
              obiectiv, strângem anumite date generate de utilizatori în timp ce
              navighează pe site-ul nostru. Aceste date includ identificatorul
              unic al utilizatorului și scorul acestuia obținute prin
              interacțiunea cu testul de verificare a cunoștințelor deținut de
              acest website. Folosim aceste date pentru a îmbunătăți
              funcționarea și design-ul website-ului, precum și pentru a oferi o
              experiență personalizată utilizatorilor noștri. De exemplu, aceste
              date ne permit să analizăm modul în care utilizatorii navighează
              pe site-ul nostru, astfel încât să putem identifica și rezolva
              orice probleme de funcționare sau de accesibilitate.
            </p>
          </li>
          <li>
            <p>
              Este important de menționat că, în niciun caz, aceste date nu vor
              fi afișate sau distribuite către terți, fără consimțământul
              explicit al utilizatorilor. Ne respectăm utilizatorii noștri și
              dorim să le asigurăm că toate informațiile lor personale vor fi
              tratate cu respect și confidențialitate.
            </p>
          </li>
        </ul>
        <h2 className="text-2xl font-bold m-5">DMCA</h2>
        <p className="m-3 italic">
          Toate datele și imaginile afișate pe acest website sunt utilizate
          exclusiv în scopuri educaționale și informative. Ne străduim să
          furnizăm informații corecte și actualizate, dar nu ne asumăm
          responsabilitatea pentru orice erori sau omisii. Pentru a vă asigura
          că aveți acces la sursele originale și informații complete, vă rugăm
          să consultați lista de surse afișată la linkul de mai jos.
        </p>
        <p className="m-3 italic">
          <Ev b l lnk={{ out: false, link: "/informatii" }}>
            LINK SURSE WEBSITE
          </Ev>
        </p>
        <h2 className="text-2xl font-bold m-5">COD WEBSITE</h2>
        <p className="m-3 italic">
          Acest proiect a fost creat de{" "}
          <Ev b l lnk={{ out: true, link: "https://github.com/Ionut767" }}>
            Ionut767
          </Ev>{" "}
          , toate drepturile sunt rezervate.
        </p>
        <ul className="list-disc m-3 sm:ml-10">
          <li>
            <p>
              Acesta este un proiect de tip "OPEN SOURCE" ce poate fi accessat
              si folosit de către oricine, accesând{" "}
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
      </div>
    </div>
  );
}

import PicturesSlider from "./components/PicturesSlider";
import Orase from "./sections/Orase";
import Banner from "./sections/Banner";
import Introduction from "./sections/Introduction";

export default function Home() {
  return (
    <main>
      <Banner />
      <Introduction />
      <PicturesSlider />
      <Orase />
    </main>
  );
}

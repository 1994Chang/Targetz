import Client from "./comp/client/client";
import Contact from "./comp/contact/contact";
import FooterSection from "./comp/footer/footer";
import HeroSection from "./comp/heroSection/heroSection";
import Reviews from "./comp/reviews/reviews";
import Service from "./comp/service/service";
import Stats from "./comp/stats/stats";

function App() {
  return (
    <>
      <HeroSection/>
      <Stats/>
      <Service/>
      <Client/>
      <Reviews/>
      <Contact/>
      <FooterSection/>
    </>
  );
}

export default App;

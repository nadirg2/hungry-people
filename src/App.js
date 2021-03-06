import { Main, AboutUs, OurTeam, Book, Specialties, Menu, Events, Gallery, Contact, Footer } from "./components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Main />
        <AboutUs />
        <OurTeam />
        <Book />
        <Carousel autoPlay showArrows={false} showStatus={false} transitionTime={300} interval={4000}>
          <Specialties />
          <Specialties />
          <Specialties />
        </Carousel>
        <Menu/>
        <Events/>
        <Gallery/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
// TODO: https://www.npmjs.com/package/react-scrollable-anchor
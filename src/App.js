import { Main, AboutUs, OurTeam, Book } from "./components";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Main />
        <AboutUs/>
        <OurTeam/>
        <Book/>
      </div>
    </div>
  );
}

export default App;

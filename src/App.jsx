import ButtonGradient from "./assets/svg/ButtonGradient";
import Benifits from "./components/Benifits";
// import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Colaboration from "./components/Colaboration";
//import "./App.css";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benifits />
        <Colaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;

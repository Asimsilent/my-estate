import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import './App.css'
import Companies from "./components/companies/Companies";
import Residencies from "./components/residencies/Residencies";
import Values from "./components/values/Values";
import Contact from "./components/contact/Contact";
import GetStarted from "./components/getstarted/GetStarted";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Values/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;

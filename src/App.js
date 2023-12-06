import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Client from "./Components/Client";
import Feature from "./Components/Features";
import Services from "./Components/Services";
import Cta from "./Components/Cta";
import Project from "./Components/Projects";
import Count from "./Components/Counts";
import Testimonials from "./Components/Testimonials";
import Team from "./Components/Team";

function App() {
  return (
    <div className="container">
      <div className="header-section">
        <Header></Header>
      </div>
      <div className="about">
        <About></About>
      </div>
      <div className="client-slider">
        <Client></Client>
      </div>

      <div className="feature">
        <Feature></Feature>
      </div>

      <div className="services">
        <Services></Services>
      </div>

      <div className="cta">
        <Cta></Cta>
      </div>

       <div className="project">
        <Project></Project>
       </div>

       <div className="count">
         <Count></Count>
       </div>

       <div className="testimonials">
        <Testimonials></Testimonials>
       </div>

       <div className="team">
        <Team></Team>
       </div>
    </div>
  );
}

export default App;

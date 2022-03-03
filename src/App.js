import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AboutMe from './aboutme/about';
import Footer from './footer/footer';
import HeroCv from './heroCv/HeroCv';
import PortoFolio from './portoFolio/portofolio';
import Skills from './skills/skills';

function App() {
  return (
    <div className="App">
      <HeroCv />
      <AboutMe/>
      <Skills />
      <PortoFolio />
      <Footer/>
    </div>
  );
}

export default App;

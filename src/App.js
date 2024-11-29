import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SoftSkills from './components/SoftSkills';
import SocialMediaWidget from './components/SocialMediaWidget';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <SoftSkills />
      <Contact />
      <Footer />
      <SocialMediaWidget/>
    </div>
  );
}

export default App;

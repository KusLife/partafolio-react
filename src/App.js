import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import SoftSkills from './components/SoftSkills/SoftSkills';
import SocialMediaWidget from './components/SocialMediaWidget/SocialMediaWidget';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <SoftSkills />
      <Contact />
      <Footer />
      <SocialMediaWidget />
    </div>
  );
}

export default App;

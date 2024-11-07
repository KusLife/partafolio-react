import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;

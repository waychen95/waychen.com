import './App.css';
import './components/Navbar';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App;

import './App.css';
import './components/Navbar';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Project />
    </>
  )
}

export default App;

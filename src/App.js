import './App.css';
import './components/Navbar';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  )
}

export default App;

import About from './About/About';
import Home from './Home/Home';
import NavBar from './Navbar/Navbar';
import Contact from './Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;


import {Route, useLocation, Routes} from "react-router-dom";
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Home from "./Components/Home";

function App() {
  const location=useLocation();
  return (
    <div className="App">
     
      <NavBar/>
      <Routes>
        <Route exact path="/projects" element={<Projects/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;

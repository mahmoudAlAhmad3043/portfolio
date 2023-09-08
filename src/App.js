import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Signature from "./components/Signature";
import Slid from "./components/Slid";
import Works from "./components/Works";


function App() {
  return (
    <div id="app" className="App relative">
      <Nav />
      <Home/>
      <About/>
      <Experience/>
      <Works/> 
      <Footer/>
      <Signature/>
      <Slid/> 
    </div>
  );
}

export default App;

// npm install gh-pages --save-dev
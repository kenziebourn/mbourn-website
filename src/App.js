import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Experience";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";


function App() {
  return (
    <div>
      <div>
      <NavBar/>
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
        </div>
    </div>
  );
}

export default App;

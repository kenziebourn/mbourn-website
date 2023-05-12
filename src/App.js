import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div>
      <div className='bg-black'>
      <NavBar/>
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
      <SocialLinks/>
        </div>
    </div>
  );
}

export default App;

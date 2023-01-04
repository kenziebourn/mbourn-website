import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <div className='bg-[url("https://wallpapercave.com/wp/wp4615518.jpg")] w-full'>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
      <SocialLinks />
      </div>
    </div>
  );
}

export default App;

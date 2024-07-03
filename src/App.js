import Navbar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Projects from "./components/Projects/project";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About/>
      <Projects/>
      <Contact/> 
      <Footer/>
     </>
  );
}

export default App;

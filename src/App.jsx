import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Hero from "./sections/Hero";
import Contact from "./Contact";
const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Hero />
      <Navbar />
      <About /> 
      <Projects />
      <Contact />
    </main>
  );
};

export default App;

import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <Hero />
      <AboutMe />
      {/* <Projects /> */}
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}

export default App;

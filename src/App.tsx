import { MotionConfig } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Updates from "./components/Updates";
import Claim from "./components/Claim";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain min-h-screen bg-ink text-paper">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Updates />
          <Claim />
          <About />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  );
}

export default App;

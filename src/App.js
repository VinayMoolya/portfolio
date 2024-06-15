import "./App.css";
import "animate.css";
import { Home, Navbar } from "./components";
import { Skills, WorkEx, Projects, Contact } from "./container";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <Home />
      <WorkEx />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

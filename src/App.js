import "./App.css";
import Header from "./components/header/Header.js";
import Home from "./components/article/box1/Home.js";
import About from "./components/article/box2/About.js";
import Services from "./components/article/box3/Services.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
    </div>
  );
}

export default App;

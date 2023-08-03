import "./App.css";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  Whatgpt4,
  Header,
} from "./containers";
import { CTA, Brand, NavBar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <Whatgpt4 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

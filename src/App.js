import DrawerAppBar from "./components/navbar";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contacts from "./components/contact";
import Skills from "./components/skills";
export default function App() {
  return (
    <div className="App">
      <DrawerAppBar />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Contacts" element={<Contacts />}></Route>
        <Route exact path="/Skills" element={<Skills />}></Route>
      </Routes>
    </div>
  );
}

import { useState } from "react";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import "./App.scss";
import Brands from "./components/brands/Brands";
import Process from "./components/process/Process";
import Company from "./components/company/Company";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Hero />
      <Brands />
      <Process />
      <Company />
    </>
  );
}

export default App;

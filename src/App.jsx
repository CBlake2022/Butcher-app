import { useState } from "react";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import "./App.scss";
import Brands from "./components/brands/Brands";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Hero />
      <Brands />
    </>
  );
}

export default App;

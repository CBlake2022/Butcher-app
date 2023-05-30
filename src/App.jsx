import { useState } from "react";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";

import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Hero />
    </>
  );
}

export default App;

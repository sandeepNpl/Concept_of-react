import Heading from "./components/Heading";
import { Section } from "./components/Section";
import Counter from "./components/Counter";

import {useState} from 'react'
function App() {
  return (
    <>
      <Heading title={"Hello"} />
      <Section title={"Nothing"}>MY subheading</Section>
      <Counter setCount={setCount}>
    </>
  );
}

export default App;

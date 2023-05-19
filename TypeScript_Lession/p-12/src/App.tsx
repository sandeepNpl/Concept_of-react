import { Heading } from "./components/Heading";
import { Section } from "./components/Section";
import { Counter } from "./components/Counter";
import List from "./components/List";

import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(1);

  return (
    <>
      <Heading title={"Hello"} />
      <Section> WelCome</Section>
      <Counter setCount={setCount}>This is Count {count}</Counter>
      <List
        items={["cofee", "Tea", "Water"]}
        render={(items: string) => <span className="gold">{items}</span>}
      />
    </>
  );
}

export default App;

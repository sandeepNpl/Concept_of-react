import React from "react";
import { useState, useEffect } from "react";
import MyComponent from "./MyComponent";
import axios from "axios";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [count, setCount] = useState(0);
  const [numFact, setNumFact] = useState("");
  useEffect(() => {
    // ComponentDidMount

    // fetch(`http://numbersapi.com/${count}`)
    //   .then((response) => response.text())
    //   .then((data) => setNumFact(data));

    axios.get(`http://numbersapi.com/${count}`).then((response) => {
        setNumFact(response.data);
    });

    // add event listener
    // document title
    // cleanUp function

    return () => {
      console.log("component will in un mount");
    };
  }, [count]);

  return (
    <div>
      {numFact}
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>InC</button>
      <br /> <br />
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
};

export default App;

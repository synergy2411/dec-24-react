import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import DemoClassBased from "./components/playground/DemoClassBased";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <h1>Hello React!</h1>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => setCounter(counter + 1)}
      >
        {counter}
      </button>

      <hr />

      {counter <= 3 && <DemoClassBased counter={counter} />}
      {/* <Expenses /> */}
    </div>
  );
}

export default App;

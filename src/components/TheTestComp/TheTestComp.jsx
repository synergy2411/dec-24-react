import { useState } from "react";

function TheTestComp() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="container">
      <h1>Test component works.</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <p>Toggle is true</p>}
      {!toggle && <p>Toggle is false</p>}
    </div>
  );
}

export default TheTestComp;

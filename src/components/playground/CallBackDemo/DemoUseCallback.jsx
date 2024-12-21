import { useState } from "react";
import DemoChild from "./DemoChild";

const DemoUseCallback = () => {
  const [toggle, setToggle] = useState(true);

  console.log("Parent Loaded");

  return (
    <>
      <div className="text-center">
        <h1>Use Callback Demo</h1>
        <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
          Toggle
        </button>

        <DemoChild toggle={true} />
      </div>
    </>
  );
};

export default DemoUseCallback;

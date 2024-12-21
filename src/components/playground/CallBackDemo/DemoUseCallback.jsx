import { useState, useCallback } from "react";
import DemoChild from "./DemoChild";

const DemoUseCallback = () => {
  const [toggle, setToggle] = useState(true);

  const demoFn = useCallback(() => console.log("Who's this?"), []);

  console.log("Parent Loaded");

  return (
    <>
      <div className="text-center">
        <h1>Use Callback Demo</h1>
        <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
          Toggle
        </button>

        <DemoChild toggle={true} demoFn={demoFn} />
      </div>
    </>
  );
};

export default DemoUseCallback;

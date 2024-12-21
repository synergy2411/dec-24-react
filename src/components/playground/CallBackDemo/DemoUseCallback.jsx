import { useState, useCallback, useMemo } from "react";
import DemoChild from "./DemoChild";

const DemoUseCallback = () => {
  const [toggle, setToggle] = useState(true);

  const demoFn = useCallback(() => console.log("Who's this?"), []);

  const marks = useMemo(() => {
    return [99, 98, 96, 95, 90];
  }, []);

  const memoFn = useMemo(() => () => console.log("Memoized Function"), []);

  console.log("Parent Loaded");

  return (
    <>
      <div className="text-center">
        <h1>Use Callback Demo</h1>
        <button className="btn btn-primary" onClick={() => setToggle(!toggle)}>
          Toggle
        </button>

        <DemoChild toggle={true} demoFn={demoFn} marks={marks} />
      </div>
    </>
  );
};

export default DemoUseCallback;

import { memo } from "react";

const DemoChild = ({ toggle, demoFn, marks }) => {
  console.log("Child Loaded");

  console.log("Marks : ", marks);

  return (
    <>
      <h2>Demo Child Loaded</h2>

      <button className="btn btn-secondary" onClick={demoFn}>
        Call Demo
      </button>
      {toggle && <p>This paragraph will dynamically appear.</p>}
    </>
  );
};

export default memo(DemoChild);

// memo - performs referential equality
// () => {} === () => {}

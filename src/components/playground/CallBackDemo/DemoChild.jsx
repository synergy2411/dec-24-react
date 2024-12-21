import { memo } from "react";

const DemoChild = ({ toggle }) => {
  console.log("Child Loaded");

  return (
    <>
      <h2>Demo Child Loaded</h2>
      {toggle && <p>This paragraph will dynamically appear.</p>}
    </>
  );
};

export default memo(DemoChild);

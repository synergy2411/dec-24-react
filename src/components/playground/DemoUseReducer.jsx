import { useReducer } from "react";

function reducerFn(state, action) {
  if (action.type === "INCREMENT") {
    return { counter: state.counter + 1 };
  }
  return state;
}

const DemoUseReducer = () => {
  const [state, dispatch] = useReducer(reducerFn, { counter: 0 });

  return (
    <div className="text-center">
      <h1>Use Reducer Demo</h1>
      <p className="display-4">Counter: {state.counter}</p>
      <br />
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increase
      </button>
    </div>
  );
};

export default DemoUseReducer;

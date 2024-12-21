import { useReducer } from "react";

function reducerFn(state, action) {
  if (action.type === "INCREMENT") {
    return { ...state, counter: state.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...state, counter: state.counter - 1 };
  } else if (action.type === "ADD_COUNTER") {
    return { ...state, counter: state.counter + action.payload };
  } else if (action.type === "STORE_RESULT") {
    return { ...state, result: [state.counter, ...state.result] };
  } else if (action.type === "DELETE_RESULT") {
    //   state.result.splice(action.payload, 1)         // Changing state mutably - NOT GOOD

    return {
      ...state,
      result: state.result.filter((val, idx) => idx !== action.payload),
    };
  }

  return state;
}

const DemoUseReducer = () => {
  const [state, dispatch] = useReducer(reducerFn, { counter: 0, result: [] });

  return (
    <div className="text-center">
      <h1>Use Reducer Demo</h1>
      <p className="display-4">Counter: {state.counter}</p>
      <br />
      <div className="mb-4">
        <button
          className="btn btn-primary"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increase
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrease
        </button>
        <button
          className="btn btn-info"
          onClick={() => dispatch({ type: "ADD_COUNTER", payload: 10 })}
        >
          Add (10)
        </button>
      </div>
      <br />
      <div className="row">
        <div className="offset-4 col-4">
          <div className="d-grid">
            <button
              className="btn btn-warning"
              onClick={() => dispatch({ type: "STORE_RESULT" })}
            >
              Store Result
            </button>
          </div>
          <br />
          <ul className="list-group">
            {state.result.map((r, i) => (
              <li
                className="list-group-item mb-2"
                key={i}
                onClick={() => dispatch({ type: "DELETE_RESULT", payload: i })}
              >
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DemoUseReducer;

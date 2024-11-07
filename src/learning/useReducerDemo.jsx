import React, { useReducer } from "react";

const initialState = { count: 0, text: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "updateText":
      return { ...state, text: action.payload };
    default:
      throw new Error("Unknown action");
  }
};

export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>
        Count: {state.count} {state.text}
      </p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>

      <input
        value={state.text}
        onChange={(e) =>
          dispatch({ type: "updateText", payload: e.target.value })
        }
      />
    </div>
  );
}

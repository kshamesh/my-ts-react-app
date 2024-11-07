import React, { useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET":
      return { username: "", email: "", telephone: "" };
    default:
      return state;
  }
};

const FormComponent = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    username: "",
    telephone: "",
    email: "",
  });

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <input
        name="username"
        value={formState.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        name="email"
        value={formState.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="telephone"
        value={formState.telephone}
        onChange={handleChange}
        placeholder="Telephone"
      />
      <button onClick={handleReset}>Reset</button>
      <div>
        <strong>State:</strong> {JSON.stringify(formState)}
      </div>
    </div>
  );
};

export default FormComponent;

import React, { useState } from "react";

const ToggleText = () => {
  const [isTextVisible, setIsTextVisible] = useState<boolean>(true);

  const toggleText = () => {
    setIsTextVisible((prevIsTextVisible) => !prevIsTextVisible);
  };

  return (
    <div>
      <h2>Toggle Text</h2>
      <h2>Learn React</h2>
      <button onClick={toggleText}>Toggle</button>
      {isTextVisible && <p>This text can be toggled on and off.</p>}
    </div>
  );
};

export default ToggleText;

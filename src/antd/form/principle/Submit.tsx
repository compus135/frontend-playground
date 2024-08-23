import React from "react";

const Submit = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Submit;

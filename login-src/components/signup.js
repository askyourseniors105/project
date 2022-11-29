import React, { useRef } from "react";

const Signup = () => {

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <h2>WELCOME!</h2>
      </form>
    </div>
  );
};

export default Signup;

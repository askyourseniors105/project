import React, { useRef } from "react";

const Signin = () => {

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <h2>WELCOME BACK!</h2>
      </form>
    </div>
  );
};

export default Signin;

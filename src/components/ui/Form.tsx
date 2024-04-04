import React, { useRef } from 'react';

function UncontrolledForm() {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  function handleSubmit() {

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={nameInputRef} />
      </label>
      <label>
        Email:
        <input type="email" ref={emailInputRef} />
      </label>
      <label>
        Password:
        <input type="password" ref={passwordInputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

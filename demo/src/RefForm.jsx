import React, { useEffect, useRef, useState } from "react";

function RefForm() {
  const nameRef = useRef();
  const passRef = useRef();
  const formRef = useRef();
  const [credentials, setCredentials] = useState([]);

  useEffect(() => {
    nameRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const nm = nameRef.current.value;
    const pss = passRef.current.value;

    setCredentials((prevCredentials) => [...prevCredentials, { name: nm, password: pss }]);
    formRef.current.reset();
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <label htmlFor="username">USERNAME</label>
      <input ref={nameRef} type="text" placeholder="username" />
      <label htmlFor="password">PASSWORD</label>
      <input ref={passRef} type="password" placeholder="password" />
      <button>SUBMIT</button>
      <div>
        <ul>
          {credentials.map((credential) => (
            <li>
              <strong>Username:</strong> {credential.name}, <strong>Password:</strong> {credential.password}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}

export default RefForm;
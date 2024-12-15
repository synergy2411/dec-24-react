import { useRef } from "react";

const Auth = () => {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Username : ", usernameInputRef.current.value);
    console.log("Password : ", passwordInputRef.current.value);
  };

  const usernamerBlurHandler = () => {
    console.log(usernameInputRef.current.value);
  };
  return (
    <form onSubmit={submitHandler}>
      {/* username */}
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          name="username"
          id="username"
          placeholder=""
          ref={usernameInputRef}
          onBlur={usernamerBlurHandler}
        />
        <label htmlFor="username">Username</label>
      </div>

      {/* password */}
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          placeholder=""
          ref={passwordInputRef}
        />
        <label htmlFor="password">Password</label>
      </div>
      {/* button */}
      <div className="row">
        <div className="col">
          <div className="d-grid">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>
        </div>
        <div className="col">
          <div className="d-grid">
            <button className="btn btn-secondary">Reset</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Auth;

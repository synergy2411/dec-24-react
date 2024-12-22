import { useDispatch, useSelector } from "react-redux";
import { userLogin, userRegistration } from "../../store/auth/auth-slice";
import { useRef } from "react";

function AuthPage() {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const dispatch = useDispatch();

  const { isLoading, errorMessage, message, token } = useSelector(
    (store) => store.authReducer
  );

  console.log("TOKEN : ", token);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      userLogin({
        email: usernameInputRef.current.value,
        password: passwordInputRef.current.value,
      })
    );
  };
  return (
    <form onSubmit={submitHandler}>
      {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
      {message && <p className="alert alert-success">{message}</p>}

      {/* username */}
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          name="username"
          id="username"
          placeholder=""
          ref={usernameInputRef}
        />
        <label htmlFor="username">Email</label>
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
            <button
              disabled={isLoading}
              className="btn btn-primary"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
        <div className="col">
          <div className="d-grid">
            <button
              className="btn btn-secondary"
              disabled={isLoading}
              onClick={() =>
                dispatch(
                  userRegistration({
                    email: usernameInputRef.current.value,
                    password: passwordInputRef.current.value,
                  })
                )
              }
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AuthPage;

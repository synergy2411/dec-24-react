import { useRef, useContext } from "react";
import AuthContext from "../../context/auth-context";
import AuthLogout from "./AuthLogout";
import { useDispatch } from "react-redux";
import { userRegistration } from "../../store/auth/auth-slice";

const Auth = () => {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const dispatch = useDispatch();

  const context = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    // /login endpoint
    if (
      usernameInputRef.current.value.trim() !== "" &&
      passwordInputRef.current.value.trim() !== ""
    ) {
      // Assuming the user is Verified user
      console.log("Username : ", usernameInputRef.current.value);
      console.log("Password : ", passwordInputRef.current.value);
      context.setIsLoggedIn(true);
    }
    return;
  };

  const usernamerBlurHandler = () => {
    console.log(usernameInputRef.current.value);
  };
  return (
    <>
      <h4>User is {context.isLoggedIn ? "" : " NOT "}logged in!</h4>

      {context.isLoggedIn && <AuthLogout />}
      {!context.isLoggedIn && (
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
                <button
                  className="btn btn-secondary"
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
      )}
    </>
  );
};

export default Auth;

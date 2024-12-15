const Auth = () => {
  return (
    <form>
      {/* username */}
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          name="username"
          id="username"
          placeholder=""
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
        />
        <label htmlFor="password">Password</label>
      </div>
      {/* button */}
      <div className="row">
        <div className="col">
          <div className="d-grid">
            <button className="btn btn-primary">Login</button>
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

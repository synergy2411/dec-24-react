import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import DemoClassBased from "./components/playground/DemoClassBased";
import Auth from "./components/playground/auth";
import DemoUseEffect from "./components/playground/DemoUseEffect";
import AuthContext from "./context/auth-context";

function App() {
  return (
    <div className="container">
      <h1>Hello React!</h1>

      <hr />

      {/* <DemoUseEffect /> */}
      {/* <Auth /> */}
      {/* {counter <= 3 && <DemoClassBased counter={counter} />} */}
      <AuthContext.Provider value={{ isLoggedIn: true }}>
        <Expenses />
      </AuthContext.Provider>
    </div>
  );
}

export default App;

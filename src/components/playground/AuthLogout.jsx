import { useContext } from "react";
import AuthContext from "../../context/auth-context";

export default function AuthLogout() {
  const context = useContext(AuthContext);

  return (
    <button
      onClick={() => context.setIsLoggedIn(false)}
      className="btn btn-outline-danger px-4 py-2 mb-4"
    >
      Logout
    </button>
  );
}

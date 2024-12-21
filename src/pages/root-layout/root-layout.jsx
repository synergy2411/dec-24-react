import { Outlet } from "react-router-dom";
import MainNavigation from "../../components/MainNavigation/MainNavigation";

function RootLayoutPage() {
  return (
    <div className="container">
      <MainNavigation />

      <Outlet />
    </div>
  );
}

export default RootLayoutPage;

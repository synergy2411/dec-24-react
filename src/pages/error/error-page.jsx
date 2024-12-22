import { Link, useRouteError } from "react-router-dom";
import MainNavigation from "../../components/MainNavigation/MainNavigation";

function ErrorPage() {
  const { data, status } = useRouteError();

  let message = "Oops! Something went wrong.";
  let statusCode = 404;

  if (data && data.message) {
    message = data.message;
    statusCode = status;
  }
  return (
    <div className="container">
      <MainNavigation />
      <div className="text-center mb-4">
        <p className="display-2">{message}</p>
        <p className="display-5">Error Code - {statusCode}</p>
        <p>
          Click <Link to="/courses">here</Link> to navigate back
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;

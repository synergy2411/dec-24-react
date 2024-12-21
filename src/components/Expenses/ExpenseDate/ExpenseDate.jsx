import AuthContext from "../../../context/auth-context";

const ExpenseDate = ({ createdAt }) => {
  const day = createdAt.toLocaleString("en-US", { day: "numeric" });
  const month = createdAt.toLocaleString("en-US", { month: "long" });
  const year = createdAt.getFullYear();

  return (
    <AuthContext.Consumer>
      {(context) => {
        const createdDate = context.isLoggedIn ? (
          <p>
            Created At: {month} {day}, {year}
          </p>
        ) : null;
        return createdDate;
      }}
    </AuthContext.Consumer>
  );
};

export default ExpenseDate;

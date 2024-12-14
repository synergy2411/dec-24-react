import ExpenseDate from "../ExpenseDate/ExpenseDate";

const ExpenseItem = ({ id, title, amount, createdAt }) => {
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-header">
          <h5>{title.toUpperCase()}</h5>
        </div>
        <div className="card-body">
          <p>Amount : {amount}</p>
          <ExpenseDate createdAt={createdAt} />
          {/* <p>Created At: {createdAt.toISOString()}</p> */}
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;

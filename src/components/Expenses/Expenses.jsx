import React from "react";

function Expenses() {
  let expense = {
    id: "e001",
    title: "pot the plants",
    amount: 99,
    createdAt: new Date("Dec 1, 2024"),
  };

  return (
    <>
      <h1 className="text-center">My Expenses</h1>
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-header">
              <h5>{expense.title.toUpperCase()}</h5>
            </div>
            <div className="card-body">
              <p>Amount : {expense.amount}</p>
              <p>Created At: {expense.createdAt.toISOString()}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expenses;

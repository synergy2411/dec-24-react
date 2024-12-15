import { useState } from "react";
import { v4 } from "uuid";
import classes from "./ExpenseForm.module.css";

const ExpenseForm = ({ onCloseForm, addExpense }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredCreatedAt, setEnteredCreatedAt] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let newExpense = {
      id: v4(),
      title: enteredTitle,
      amount: +enteredAmount,
      createdAt: new Date(enteredCreatedAt),
    };
    addExpense(newExpense);
  };

  return (
    <div className={classes["backdrop"]}>
      <div className={classes["my-dialog"]}>
        <h1 className="text-center">Add Expense Form</h1>
        <form onSubmit={submitHandler}>
          {/* title */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              placeholder=""
              value={enteredTitle}
              onChange={(e) => setEnteredTitle(e.target.value)}
            />
            <label htmlFor="title">Title</label>
          </div>
          {/* amount */}
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              name="amount"
              id="amount"
              placeholder=""
              min="0.5"
              step="0.5"
              value={enteredAmount}
              onChange={(e) => setEnteredAmount(e.target.value)}
            />
            <label htmlFor="amount">Amount</label>
          </div>
          {/* date */}
          <div className="form-floating mb-3">
            <input
              type="date"
              className="form-control"
              name="creaedAt"
              id="creaedAt"
              placeholder=""
              min="2022-04-01"
              max="2025-03-31"
              value={enteredCreatedAt}
              onChange={(e) => setEnteredCreatedAt(e.target.value)}
            />
            <label htmlFor="creaedAt">Creaed At</label>
          </div>
          {/* button */}
          <div className="row">
            <div className="col">
              <div className="d-grid">
                <button className="btn btn-primary" type="submit">
                  Add
                </button>
              </div>
            </div>
            <div className="col">
              <div className="d-grid">
                <button className="btn btn-secondary" onClick={onCloseForm}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;

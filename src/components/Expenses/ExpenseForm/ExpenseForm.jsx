import { useState } from "react";
import { v4 } from "uuid";
import classes from "./ExpenseForm.module.css";

const ExpenseForm = ({ onCloseForm, addExpense }) => {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    createdAt: "",
  });

  const [titleError, setTitleError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let newExpense = {
      id: v4(),
      ...expense,
    };
    addExpense(newExpense);
  };

  const titleBlurHandler = (e) => {
    if (e.target.value.trim() === "") {
      setTitleError("Title can not be empty");
      return;
    }
    if (e.target.value.length < 6) {
      setTitleError("Title should have atleast 6 characters");
      return;
    }
    setTitleError("");
  };

  const changeHandler = (e) => {
    if (e.target.name === "title") {
      setExpense((prevExpense) => ({
        ...prevExpense,
        title: e.target.value,
      }));
    }
    if (e.target.name === "amount") {
      setExpense((prevExpense) => ({
        ...prevExpense,
        amount: +e.target.value,
      }));
    }
    if (e.target.name === "createdAt") {
      setExpense((prevExpense) => ({
        ...prevExpense,
        createdAt: new Date(e.target.value),
      }));
    }
  };
  return (
    <div className={classes["backdrop"]}>
      <div className={classes["my-dialog"]}>
        <h1 className="text-center">Add Expense Form</h1>
        {titleError !== "" && (
          <p className="alert alert-danger">{titleError}</p>
        )}
        <form onSubmit={submitHandler}>
          {/* title */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              placeholder=""
              value={expense.title}
              onChange={changeHandler}
              onBlur={titleBlurHandler}
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
              value={expense.amount}
              onChange={changeHandler}
            />
            <label htmlFor="amount">Amount</label>
          </div>
          {/* date */}
          <div className="form-floating mb-3">
            <input
              type="date"
              className="form-control"
              name="createdAt"
              id="creaedAt"
              placeholder=""
              min="2022-04-01"
              max="2025-03-31"
              value={expense.createdAt}
              onChange={changeHandler}
            />
            <label htmlFor="creaedAt">Creaed At</label>
          </div>
          {/* button */}
          <div className="row">
            <div className="col">
              <div className="d-grid">
                <button
                  disabled={titleError !== ""}
                  className="btn btn-primary"
                  type="submit"
                >
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

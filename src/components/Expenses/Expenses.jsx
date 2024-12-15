import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";

const INITIAL_EXPENSES = [
  {
    id: "e001",
    title: "pot the plants",
    amount: 99,
    createdAt: new Date("Dec 1, 2024"),
  },
  {
    id: "e002",
    title: "renew card insurance",
    amount: 199,
    createdAt: new Date("Oct 20, 2023"),
  },
  {
    id: "e003",
    title: "Shopping",
    amount: 49,
    createdAt: new Date("Aug 13, 2022"),
  },
];

function Expenses() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const [isLoaded, setIsLoaded] = useState(false);

  const deleteExpense = (expenseId) => {
    console.log("ID : ", expenseId);
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== expenseId)
    );
  };

  const addExpense = (expense) =>
    setExpenses((prevExpense) => [expense, ...prevExpense]);

  const onCloseForm = () => setIsLoaded(false);

  return (
    <>
      <h1 className="text-center">My Expenses</h1>

      <div className="row mb-4">
        <div className="col-4 offset-4">
          <div className="d-grid">
            <button
              className="btn btn-primary"
              onClick={() => setIsLoaded(!isLoaded)}
            >
              {isLoaded ? "Hide Form" : "Show Form"}
            </button>
          </div>
        </div>
        <div className="col-4">
          <ExpenseFilter />
        </div>
      </div>
      {isLoaded && <ExpenseForm onCloseForm={onCloseForm} />}

      <div className="row">
        {expenses.map((expense) => (
          <ExpenseItem {...expense} deleteExpense={deleteExpense} />
        ))}
      </div>
    </>
  );
}

export default Expenses;

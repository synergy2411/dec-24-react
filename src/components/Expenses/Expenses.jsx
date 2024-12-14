import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

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

  const deleteExpense = (expenseId) => {
    console.log("ID : ", expenseId);
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== expenseId)
    );
  };

  return (
    <>
      <h1 className="text-center">My Expenses</h1>
      <div className="row">
        {expenses.map((expense) => (
          <ExpenseItem {...expense} deleteExpense={deleteExpense} />
        ))}
      </div>
    </>
  );
}

export default Expenses;

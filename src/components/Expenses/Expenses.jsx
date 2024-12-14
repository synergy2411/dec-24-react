import React from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

function Expenses() {
  let expenses = [
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

  return (
    <>
      <h1 className="text-center">My Expenses</h1>
      <div className="row">
        {expenses.map((expense) => (
          <ExpenseItem {...expense} />
        ))}
      </div>
    </>
  );
}

export default Expenses;

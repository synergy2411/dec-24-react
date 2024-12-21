import React, { useEffect, useState } from "react";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

// const INITIAL_EXPENSES = [
//   {
//     id: "e001",
//     title: "pot the plants",
//     amount: 99,
//     createdAt: new Date("Dec 1, 2024"),
//   },
//   {
//     id: "e002",
//     title: "renew card insurance",
//     amount: 199,
//     createdAt: new Date("Oct 20, 2023"),
//   },
//   {
//     id: "e003",
//     title: "Shopping",
//     amount: 49,
//     createdAt: new Date("Aug 13, 2022"),
//   },
// ];

function Expenses() {
  const [expenses, setExpenses] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch("http://localhost:3030/expenses");
        const expenses = await response.json();
        setExpenses(
          expenses.map((exp) => ({
            ...exp,
            createdAt: new Date(exp.createdAt),
          }))
        );
      } catch (err) {
        console.log(err);
      }
    };
    // setTimeout(() => {
    // http polling
    fetchExpenses();
    // }, 500);
  }, []);

  const deleteExpense = async (expenseId) => {
    console.log("ID : ", expenseId);
    try {
      await fetch(`http://localhost:3030/expenses/${expenseId}`, {
        method: "DELETE",
      });
      setExpenses((prevExpenses) =>
        prevExpenses.filter((expense) => expense.id !== expenseId)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const addExpense = async (expense) => {
    try {
      const response = await fetch("http://localhost:3030/expenses", {
        method: "POST",
        body: JSON.stringify(expense),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const newExpense = await response.json();

      setExpenses((prevExpense) => [
        { ...newExpense, createdAt: new Date(newExpense.createdAt) },
        ...prevExpense,
      ]);
      onCloseForm();
    } catch (err) {
      console.log(err);
    }
  };

  const onCloseForm = () => setIsLoaded(false);

  const onSelectYear = (selYear) => {
    setSelectedYear(selYear);
  };

  let filteredExpenses = expenses;

  if (selectedYear !== "") {
    filteredExpenses = expenses.filter(
      (expense) => expense.createdAt.getFullYear() === +selectedYear
    );
  }

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
          <ExpenseFilter
            onSelectYear={onSelectYear}
            selectedYear={selectedYear}
          />
        </div>
      </div>
      {isLoaded && (
        <ExpenseForm onCloseForm={onCloseForm} addExpense={addExpense} />
      )}

      <div className="row">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            {...expense}
            deleteExpense={deleteExpense}
          />
        ))}
      </div>
    </>
  );
}

export default Expenses;

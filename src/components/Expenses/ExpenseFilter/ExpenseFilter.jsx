const ExpenseFilter = () => {
  return (
    <select className="form-control">
      <option value="">Select All</option>
      <option value="2022">2022</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
    </select>
  );
};

export default ExpenseFilter;

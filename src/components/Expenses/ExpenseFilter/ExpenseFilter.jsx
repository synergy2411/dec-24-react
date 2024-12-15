const ExpenseFilter = ({ onSelectYear, selectedYear }) => {
  return (
    <select
      className="form-control"
      onChange={(event) => onSelectYear(event.target.value)}
      value={selectedYear}
    >
      <option value="">Select All</option>
      <option value="2022">2022</option>
      <option value="2023">2023</option>
      <option value="2024">2024</option>
    </select>
  );
};

export default ExpenseFilter;

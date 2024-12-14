const ExpenseForm = () => {
  return (
    <>
      <h1 className="text-center">Add Expense Form</h1>
      <form>
        {/* title */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            placeholder=""
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
          />
          <label htmlFor="creaedAt">Creaed At</label>
        </div>
        {/* button */}
        <div className="row">
          <div className="col">
            <div className="d-grid">
              <button className="btn btn-primary">Add</button>
            </div>
          </div>
          <div className="col">
            <div className="d-grid">
              <button className="btn btn-secondary">Reset</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;

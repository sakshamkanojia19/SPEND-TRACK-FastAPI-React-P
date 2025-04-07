
import React, { useState, useEffect } from "react";
import api from "./api";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    description: "",
    is_income: false,
    date: "",
  });

  const fetchTransactions = async () => {
    const response = await api.get("/transactions/");
    setTransactions(response.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await api.post("/transactions/", formData);
    fetchTransactions();
    setFormData({
      amount: "",
      category: "",
      description: "",
      is_income: false,
      date: "",
    });
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            SPEND TRACK
          </a>
        </div>
      </nav>

      <div className="container">
        <div className="card shadow border-0 rounded-4 p-4">
          <h4 className="text-center mb-4">Add Transaction</h4>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Amount
              </label>
              <input
                type="number"
                name="amount"
                id="amount"
                className="form-control"
                onChange={handleInputChange}
                value={formData.amount}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                className="form-control"
                onChange={handleInputChange}
                value={formData.category}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                className="form-control"
                onChange={handleInputChange}
                value={formData.description}
              />
            </div>

            <div className="form-check form-switch mb-3">
              <input
                type="checkbox"
                name="is_income"
                id="is_income"
                className="form-check-input"
                onChange={handleInputChange}
                checked={formData.is_income}
              />
              <label htmlFor="is_income" className="form-check-label">
                Is Income?
              </label>
            </div>

            <div className="mb-4">
              <label htmlFor="date" className="form-label">
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="form-control"
                onChange={handleInputChange}
                value={formData.date}
                required
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
    
    <div className="card shadow border-0 rounded-4 p-4 m-4">

           <table className="table table-striped table-bordered table-hover">
             <thead>
              <tr>
                <th>Amount</th>
                <th>Category</th>
                <th>Description</th>
                <th>Income?</th>
                <th>Date</th>
              </tr>
             </thead>
             <tbody>
              {transactions.map((transaction)=>(
                <tr key={transaction.id}>
                  <td>{transaction.amount}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.is_income ? "Yes" : "No"}</td>
                  <td>{transaction.date}</td>
                </tr>
              ))}
             </tbody>
           </table>
    </div>

      </div>
    </>
  );
};

export default App;


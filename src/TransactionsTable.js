import React from 'react';
import './TransactionsTable.css'; // Make sure to create a TransactionsTable.css file for styles
import Pagination from './Pagination';

const TransactionsTable = () => {
  // Hardcoded data for the table
  const transactions = [
    { orderId: "#281209", orderDate: "7 July, 2023", orderAmount: "₹1,278.23", transactionFees: "₹22" },
    { orderId: "#281209", orderDate: "7 July, 2023", orderAmount: "₹1,278.23", transactionFees: "₹22" },
    { orderId: "#281209", orderDate: "7 July, 2023", orderAmount: "₹1,278.23", transactionFees: "₹22" },
    { orderId: "#281209", orderDate: "7 July, 2023", orderAmount: "₹1,278.23", transactionFees: "₹22" },
    { orderId: "#281209", orderDate: "7 July, 2023", orderAmount: "₹1,278.23", transactionFees: "₹22" },
    { orderId: "#281209", orderDate: "7 July, 2023", orderAmount: "₹1,278.23", transactionFees: "₹22" },
    { orderId: "#281209", orderDate: "7 July, 2023", orderAmount: "₹1,278.23", transactionFees: "₹22" },
    { orderId: "#281209", orderDate: "7 July, 2023", orderAmount: "₹1,278.23", transactionFees: "₹22" },
    { orderId: "#281209", orderDate: "7 July, 2023", orderAmount: "₹1,278.23", transactionFees: "₹22" },
    { orderId: "#281209", orderDate: "7 July, 2023", orderAmount: "₹1,278.23", transactionFees: "₹22" },
    { orderId: "#281209", orderDate: "7 July, 2023", orderAmount: "₹1,278.23", transactionFees: "₹22" },
    { orderId: "#281209", orderDate: "7 July, 2023", orderAmount: "₹1,278.23", transactionFees: "₹22" },
    { orderId: "#281209", orderDate: "7 July, 2023", orderAmount: "₹1,278.23", transactionFees: "₹22" },
    { orderId: "#281209", orderDate: "7 July, 2023", orderAmount: "₹1,278.23", transactionFees: "₹22" },
    { orderId: "#281209", orderDate: "7 July, 2023", orderAmount: "₹1,278.23", transactionFees: "₹22" },
    { orderId: "#281209", orderDate: "7 July, 2023", orderAmount: "₹1,278.23", transactionFees: "₹22" },
    { orderId: "#281209", orderDate: "7 July, 2023", orderAmount: "₹1,278.23", transactionFees: "₹22" },
    { orderId: "#281209", orderDate: "7 July, 2023", orderAmount: "₹1,278.23", transactionFees: "₹22" },
    { orderId: "#281209", orderDate: "7 July, 2023", orderAmount: "₹1,278.23", transactionFees: "₹22" },
  ];

  return (
    <div className="transactions-table-container">
      <div className="transactions-header">
        Transactions | This Month
      </div>
      <div className='table'>
      <div className="table-filters">
          <input type="text" placeholder="Search by order ID..." />
          <button className="sort-button">Sort ↓</button>
        </div>
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Order date</th>
            <th style={{textAlign: 'right'}}>Order amount</th>
            <th style={{textAlign: 'right'}}>Transaction fees</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td id='blue-color'>{transaction.orderId}</td>
              <td>{transaction.orderDate}</td>
              <td style={{textAlign: 'right'}}>{transaction.orderAmount}</td>
              <td style={{textAlign: 'right'}}>{transaction.transactionFees}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <Pagination />
      </div>
      </div>
    </div>
  );
};

export default TransactionsTable;

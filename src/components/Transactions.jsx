import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8004/payment/transactions/')
      .then(response => {
        setTransactions(response.data.transactions);
      })
      .catch(error => {
        console.error('Error fetching transactions:', error);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Payment Time</th>
            <th>Payment Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.payment_time}>
              <td>{transaction.payment_time}</td>
              <td>{transaction.payment_amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;

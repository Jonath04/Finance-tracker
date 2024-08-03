import React from 'react';

const TransactionList = () => {
  const transactions = [
    { amount: 100, category: 'Food', date: '2024-08-01', description: 'Groceries' },
    { amount: 50, category: 'Transport', date: '2024-08-02', description: 'Bus fare' }
  ];

  return (
    <div>
      <h3>Transactions</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.date} - {transaction.category} - ${transaction.amount} - {transaction.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
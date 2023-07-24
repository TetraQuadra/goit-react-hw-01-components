import React from 'react';
import PropTypes from 'prop-types';

function TransactionHistory({ transactions }) {
  return (
    <table
      style={{
        fontSize: '18px',
        width: 400,
        textAlign: 'center',
      }}
    >
      <thead
        style={{
          height: 30,
        }}
      >
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr
            key={id}
            style={{
              height: 25,
              borderBottom: '1px solid gray',
            }}
          >
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};

export default TransactionHistory;

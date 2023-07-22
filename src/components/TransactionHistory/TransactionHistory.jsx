import PropTypes from 'prop-types';
import parseTransactions from './parseTransactions';

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

function TransactionHistory(transactions) {
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
      <tbody>{parseTransactions(transactions)}</tbody>
    </table>
  );
}

export default TransactionHistory;

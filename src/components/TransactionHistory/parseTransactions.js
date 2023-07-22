const parseTransactions = ({ transactions }) => {
  return transactions.map(({ id, type, amount, currency }) => (
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
  ));
};

export default parseTransactions;

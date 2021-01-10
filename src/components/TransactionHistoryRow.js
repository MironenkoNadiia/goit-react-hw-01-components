import PropTypes from 'prop-types';

function TransactionHistoryRow({ id, type, amount, currency }) {
  return (
    <tr key={id} className>
      <td className>{type}</td>
      <td className>{amount}</td>
      <td className>{currency}</td>
    </tr>
  );
}

TransactionHistoryRow.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryRow;
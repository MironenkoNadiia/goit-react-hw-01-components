import PropTypes from 'prop-types';
import TransactionHistoryRow from './TransactionHistoryRow';

function TransactionHistory({ items }) {
  return (
    <table className>
      <thead className>
        <tr>
          <th class>Type</th>
          <th className>Amount</th>
          <th className>Currency</th>
        </tr>
      </thead>

      <tbody className>{items.map(TransactionHistoryRow)}</tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
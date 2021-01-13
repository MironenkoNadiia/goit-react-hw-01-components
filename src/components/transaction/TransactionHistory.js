import PropTypes from 'prop-types';
import TransactionHistoryRow from '../transaction/TransactionHistoryRow';
import styled from 'styled-components';

const Throw = styled.th`
  padding: 20px 50px;
  border: 2px solid grey;
`;

const TBody = styled.tbody`
  padding: 20px;
`;

function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <Throw>Type</Throw>
          <Throw>Amount</Throw>
          <Throw>Currency</Throw>
        </tr>
      </thead>

      <TBody>{items.map(TransactionHistoryRow)}</TBody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;

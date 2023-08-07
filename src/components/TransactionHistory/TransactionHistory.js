import {
  TransactionTable,
  HeadRowTable,
  HeadCellTable,
  TransactionTableRow,
  TransactionTableData,
} from './TransactionHistory.styled';

export const TransactionHistoryCard = ({ transactions }) => {
  return (
    <TransactionTable>
      <thead>
        <HeadRowTable>
          <HeadCellTable>Type</HeadCellTable>
          <HeadCellTable>Amount</HeadCellTable>
          <HeadCellTable>Currency</HeadCellTable>
        </HeadRowTable>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <TransactionTableRow id={transaction.id}>
            <TransactionTableData>{transaction.type}</TransactionTableData>
            <TransactionTableData>{transaction.amount}</TransactionTableData>
            <TransactionTableData>{transaction.currency}</TransactionTableData>
          </TransactionTableRow>
        ))}
      </tbody>
    </TransactionTable>
  );
};

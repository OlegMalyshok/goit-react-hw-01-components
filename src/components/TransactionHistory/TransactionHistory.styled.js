import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid black;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 80px;
`;

export const HeadRowTable = styled.tr`
  text-transform: uppercase;
`;

export const HeadCellTable = styled.th`
  background-color: #dbfcd6;
  color: black;
  padding: 10px 0;
  width: 150px;
`;

export const TransactionTableRow = styled.tr`
  border: 3px solid black;
`;
export const TransactionTableData = styled.td`
  padding: 10px 0;
  border: 1px solid lightgray;
  background-color: white;
`;

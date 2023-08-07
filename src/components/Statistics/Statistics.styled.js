import styled from 'styled-components';

export const ContainerStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto 0;
  width: 300px;
  height: 100%;
  cursor: pointer;
  border: 1px solid #e9eef3;
  border-radius: 8px;
  background-color: #f1f1e2;
`;

export const TitleStats = styled.h2`
  color: #282817;
  font-size: 25px;
  margin: 20px auto;
  text-align: center;
`;

export const List = styled.ul`
  margin: 10px 0;
  padding: 0px;
  display: flex;
`;

export const StatLi = styled.li`
  display: flex;
  gap: 10px;
  padding: 5px;
  flex-direction: column;
  font-size: 20px;
  font-weight: 600;
  padding: 9px;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: ${props => {
    switch (props.dataId) {
      case 'id-1':
        return `#6AFF1A`;
      case 'id-2':
        return `#1AFFC4`;
      case 'id-3':
        return `#1A2FFF`;
      case 'id-4':
        return `#FF1AE3`;
      case 'id-5':
        return `#FFCB1A`;
      default:
        return `transparent`;
    }
  }};
`;

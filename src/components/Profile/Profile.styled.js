import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto 0;
  width: 300px;
  height: 100%;
  cursor: pointer;
  border: 1px solid #e9eef3;
  border-radius: 8px;
  background-color: #a7fe23;
`;

export const Image = styled.img`
  border: 3px solid #fefe23;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-top: 30px;
  margin-bottom: 0;
`;

export const UserName = styled.h2`
  font-size: 30px;
  margin-bottom: 0;
`;

export const UserTag = styled.p`
  color: #8585ad;
  margin-top: 10px;
`;

export const UserLocation = styled.p`
  color: #8585ad;
  margin: 10px;
`;

export const UserStats = styled.ul`
  background-color: #60dfd3;
  align-items: center;
    border-top: 1px solid #ddd;
    display: flex;
    justify-content: center;
    width: 100%;
    margin:0px auto;
    padding: 0px;
    :last-child{
        border-right: none;
`;

export const UserStatsList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 15px;

  border-right: 1px solid #dddddd;
`;

export const UserStatsSpan = styled.span`
  font-size: 12px;
  margin-bottom: 5px;
`;

export const UserStatsValue = styled.span`
  font-weight: 700;
`;

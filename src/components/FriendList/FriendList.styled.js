import styled from 'styled-components';

export const FriendList = styled.ul`
  margin: 50px 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FriendListItem = styled.li`
  margin: 0 auto 25px;
  display: flex;

  align-items: center;
  gap: 15px;
  width: 200px;
  outline: 2px solid gray;
  border-radius: 10px;
`;

export const FriendListStatus = styled.span`
  padding: 5px;
`;

export const FriendListName = styled.p`
  font-size: 20px;
  display: inline-block;
`;

export const FriendListOnline = styled.span`
  background: #28b62c;
  display: inline-block;
  width: 1em;
  height: 1em;
  border-radius: 50%;
`;

export const FriendListOffline = styled.span`
  background: #ff0000;
  display: inline-block;
  width: 1em;
  height: 1em;
  border-radius: 50%;
`;

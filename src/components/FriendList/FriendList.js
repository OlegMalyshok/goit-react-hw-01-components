import {
  FriendList,
  FriendListItem,
  FriendListStatus,
  FriendListName,
  FriendListOnline,
  FriendListOffline,
} from './FriendList.styled';

export const FriendsListCard = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(friend => (
        <FriendListItem id={friend.id}>
          <FriendListStatus>
            {friend.isOnline ? <FriendListOnline /> : <FriendListOffline />}
          </FriendListStatus>
          <img src={friend.avatar} alt={friend.name} width="48" />
          <FriendListName>{friend.name}</FriendListName>
        </FriendListItem>
      ))}
    </FriendList>
  );
};

import {
  Container,
  UserTag,
  UserLocation,
  Image,
  UserName,
  UserStats,
  UserStatsList,
  UserStatsSpan,
  UserStatsValue,
} from './Profile.styled';

export const ProfileCard = props => {
  return (
    <Container>
      <Image src={props.items.avatar} alt="user avatar" />
      <UserName>{props.items.username}</UserName>
      <UserTag>@{props.items.tag}</UserTag>
      <UserLocation>{props.items.location}</UserLocation>
      <UserStats>
        <UserStatsList>
          <UserStatsSpan>followers</UserStatsSpan>{' '}
          <UserStatsValue>{props.items.stats.followers}</UserStatsValue>
        </UserStatsList>
        <UserStatsList>
          <UserStatsSpan>views</UserStatsSpan>{' '}
          <UserStatsValue>{props.items.stats.views}</UserStatsValue>
        </UserStatsList>
        <UserStatsList>
          <UserStatsSpan>likes</UserStatsSpan>{' '}
          <UserStatsValue>{props.items.stats.likes}</UserStatsValue>
        </UserStatsList>
      </UserStats>
    </Container>
  );
};

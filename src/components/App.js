import { ProfileCard } from './Profile/Profile';
import { StatisticsCard } from './Statistics/Statistics';
import { FriendsListCard } from './FriendList/FriendList';
import { TransactionHistoryCard } from './TransactionHistory/TransactionHistory';
import userData from '../user.json';
import statisticsData from '../data.json';
import friendsData from '../friends.json';
import transactionsData from '../transactions.json';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <ProfileCard items={userData} />
      <StatisticsCard stats={statisticsData} />
      <StatisticsCard title="UPLOAD STATS" stats={statisticsData} />
      <FriendsListCard friends={friendsData} />
      <TransactionHistoryCard transactions={transactionsData} />
      <GlobalStyle />
    </div>
  );
};

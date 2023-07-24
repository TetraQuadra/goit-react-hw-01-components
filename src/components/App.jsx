import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './Friends/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import data from '../data/data.json';

export const App = () => {
  return (
    <div
      style={{
        padding: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

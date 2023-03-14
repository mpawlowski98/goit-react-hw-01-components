import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

import { Profile } from './Task1/Profile';
import { Statistics } from './Task2/Statistics';
import { FriendList, FriendListItem } from './Task3/FriendList';
import { TransactionHistory } from './Task4/Transactions';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList>
        <FriendListItem friends={friends} />
      </FriendList>
      <TransactionHistory items={transactions} />;
    </>
  );
};

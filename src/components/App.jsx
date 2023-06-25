import { useState } from 'react';
import FriendsList from './FriendsList';
import FormAddFriend from './FormAddFriend';
import Button from './Button';
import FormSplitBill from './FormSplitBill';

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  // const [friends, setFriends] = useState(initialFriends);

  const handleShowAddFriend = () => setShowAddFriend(show => !show);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />

        {showAddFriend && <FormAddFriend />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? 'Close' : 'Add Friend'}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

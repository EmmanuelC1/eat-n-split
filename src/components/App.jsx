import { useState } from 'react';
import FriendsList from './FriendsList';
import FormAddFriend from './FormAddFriend';
import Button from './Button';
import FormSplitBill from './FormSplitBill';

export default function App() {
  const [addFriendIsOpen, setAddFriendIsOpen] = useState(false);

  const handleAddFriendIsOpen = () => setAddFriendIsOpen(isOpen => !isOpen);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />

        {addFriendIsOpen ? (
          <FormAddFriend onClose={handleAddFriendIsOpen} />
        ) : (
          <Button onClick={handleAddFriendIsOpen}>Add Friend</Button>
        )}
      </div>
      <FormSplitBill />
    </div>
  );
}

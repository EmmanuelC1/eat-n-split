import { useState } from 'react';
import Button from './Button';

export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState('');
  const [yourExpense, setYourExpense] = useState('');
  const friendExpense = bill ? bill - yourExpense : '';
  const [whosPaying, setWhosPaying] = useState('user');

  const handleExpenses = yourExpense => {
    setYourExpense(yourExpense);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!bill || !yourExpense) return;

    onSplitBill(whosPaying === 'user' ? friendExpense : -yourExpense);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={e => setBill(Number(e.target.value))}
      />

      <label>🙋🏻‍♂️ Your Expense</label>
      <input
        type="text"
        value={yourExpense}
        onChange={e =>
          handleExpenses(
            Number(e.target.value) > bill ? yourExpense : Number(e.target.value)
          )
        }
      />

      <label>👫🏻 {selectedFriend.name}'s Expense</label>
      <input type="text" value={friendExpense} disabled />

      <label>🤑 Who's paying the bill?</label>
      <select value={whosPaying} onChange={e => setWhosPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

import Button from './Button';

export default function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with BLANK</h2>

      <label>💰 Bill Value</label>
      <input type="text" />

      <label>🙋🏻‍♂️ Your Expense</label>
      <input type="text" />

      <label>👫🏻 BLANK's Expense</label>
      <input type="text" disabled />

      <label>🤑 Who's paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">BLANK</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

import Button from './Button';

export default function FormAddFriend({ onClose }) {
  return (
    <>
      <form className="form-add-friend">
        <label>👫🏻 Friend Name</label>
        <input type="text" />

        <label>🌄 Image URL</label>
        <input type="text" />

        <Button>Add</Button>
      </form>
      <Button onClick={onClose}>Close</Button>
    </>
  );
}

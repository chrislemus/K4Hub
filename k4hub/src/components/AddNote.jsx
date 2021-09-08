import { useState } from 'react';
import axios from 'axios';
export default function AddNote() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    setStatus('fetching');
    e.preventDefault();
    axios.post('http://localhost');
  };

  return (
    <form className="add-note-form" onSubmit={handleSubmit}>
      <label htmlFor="new-note-field">Add Note</label>
      <input id="new-note-field" />
      <input type="submit" disabled={status === 'fetching'} />
    </form>
  );
}

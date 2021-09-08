import { useState } from 'react';
import axios from 'axios';
import { createNote } from '../services';
export default function AddNote() {
  const [status, setStatus] = useState('idle');
  const [input, setInput] = useState('');
  const handleSubmit = async (e) => {
    setStatus('fetching');
    e.preventDefault();
    axios.post('http://localhost');
    const date = new Date().toJSON();
    createNote(input, date);
    setStatus('idle');
    setInput('');
  };

  return (
    <form className="add-note-form" onSubmit={handleSubmit}>
      <label htmlFor="new-note-field">Add Note</label>
      <input
        id="new-note-field"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input type="submit" disabled={status === 'fetching'} />
    </form>
  );
}

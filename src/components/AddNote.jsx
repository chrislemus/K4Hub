import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { createNote } from '../services';
export default function AddNote() {
  const queryClient = useQueryClient();
  const [input, setInput] = useState('');

  const { mutate, status } = useMutation(
    (e) => {
      e.preventDefault();
      const date = new Date().toJSON();
      createNote(input, date);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('notes');
        setInput('');
      },
    }
  );

  return (
    <form className="add-note-form" onSubmit={mutate}>
      <label htmlFor="new-note-field">Add Note</label>
      <input
        id="new-note-field"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" disabled={status === 'loading'}>
        add note
      </button>
    </form>
  );
}

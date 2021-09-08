import { useEffect, useState } from 'react';
import axios from 'axios';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

export default function NotesList() {
  const [notesList, setNotesList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await axios
        .get('http://localhost:3004/notes')
        .then(({ data }) => setNotesList(data));
    }
    fetchData();
  }, []);

  const renderedNotes = notesList.map((note) => (
    <NoteItem key={note.id} note={note} />
  ));

  return (
    <div className="notes-list">
      <AddNote />
      {notesList.length > 0 ? renderedNotes : <p>no notes</p>}
    </div>
  );
}

import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import AddNote from './AddNote';

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

  const renderedNotes = notesList.map(({ id, content, date }) => (
    <div key={id} className="box">
      <p>{content}</p>
      <span className="note-date">
        {format(new Date(date), 'MMM Lo	y - h:mmb')}
      </span>
    </div>
  ));

  return (
    <div className="notes-list">
      <AddNote />
      {notesList.length > 0 ? renderedNotes : <p>no notes</p>}
    </div>
  );
}

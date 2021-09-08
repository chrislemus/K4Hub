import AddNote from './AddNote';
import NoteItem from './NoteItem';
import { fetchNotes } from '../services';
import { useQuery } from 'react-query';

export default function NotesList() {
  const { data } = useQuery('notes', fetchNotes);
  const notesList = data || [];

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

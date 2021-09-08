import { format } from 'date-fns';
import { deleteNote } from '../services';

export default function NoteItem({ note }) {
  const { id, content, date } = note;
  const formattedDate = format(new Date(date), 'MMM Lo	y - h:mmb');
  return (
    <div key={id} className="box note-item">
      <p>{content}</p>
      <span className="note-item-date">{formattedDate}</span>
      <button onClick={() => deleteNote(id)} className="note-item-delete-btn">
        delete
      </button>
    </div>
  );
}

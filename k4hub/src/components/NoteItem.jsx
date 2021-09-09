import { format } from 'date-fns';
import { deleteNote } from '../services';
import { useMutation, useQueryClient } from 'react-query';
export default function NoteItem({ note }) {
  const queryClient = useQueryClient();
  const { id, content, date } = note;
  const formattedDate = format(new Date(date), "M-d-y 'at' h:mmb");
  const { mutate, status } = useMutation(deleteNote, {
    onSuccess: () => {
      queryClient.invalidateQueries('notes');
    },
  });

  return (
    <div key={id} className="box note-item">
      <p>{content}</p>
      <span className="note-item-date">{formattedDate}</span>
      <button
        onClick={() => mutate(id)}
        className="note-item-delete-btn"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'deleting' : 'delete'}
      </button>
    </div>
  );
}

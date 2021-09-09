import NotesList from '../NotesList';
import { screen, render } from '../../test-utils/testing-library-utils';
import userEvent from '@testing-library/user-event';

// import { screen, render } from '@testing-library/react';
test('all notes display the correct content', async () => {
  render(<NotesList />);
  const notes = await screen.findAllByText(/^note/i);
  expect(notes).toHaveLength(3);
  const notesContent = notes.map((n) => n.textContent);
  expect(notesContent).toEqual(['note 1', 'note 2', 'note 3']);
});
test('notes dates are formatted correctly', async () => {
  render(<NotesList />);
  const dates = await screen.findAllByText(/at/gi);
  expect(dates).toHaveLength(3);
  const datesTextList = dates.map((d) => d.textContent);
  expect(datesTextList).toEqual([
    '9-8-2021 at 7:01PM',
    '9-3-2000 at 7:03PM',
    '9-10-2020 at 7:01PM',
  ]);
});

test('delete button deletes a note', async () => {
  render(<NotesList />);
  const deleteBtns = await screen.findAllByRole('button', { name: 'delete' });
  userEvent.click(deleteBtns[0]);

  //TODO: add marker for when POST resolves
});

test('new note is added successfully', async () => {
  //TODO
});

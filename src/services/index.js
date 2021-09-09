import axios from 'axios';
const baseURL = 'http://localhost:3004';

export const axiosApi = axios.create({ baseURL });

export const fetchNotes = async () => {
  const res = await axiosApi.get('/notes');
  return res.data;
};

export const createNote = async (content, date) => {
  const res = await axiosApi.post('/notes', {
    content,
    date,
  });
  return res.data;
};
export const deleteNote = async (id) => {
  const res = await axiosApi.delete(`/notes/${id}`);
  return res.data;
};

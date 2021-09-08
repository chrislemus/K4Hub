import axios from 'axios';
const baseURL = 'http://localhost:3004/api';

export const axiosApi = axios.create({ baseURL });

const fetchNotes = async (query, pageLimit, page) => {
  const res = await axiosApi.get(
    `/invoices?query=${query}&limit=${pageLimit}&page=${page}`
  );
  return res.data;
};

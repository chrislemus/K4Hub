import { rest } from 'msw';
const url = 'http://localhost:3004';
export const handlers = [
  rest.get('http://localhost:3004/notes', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          content: 'note 1',
          date: '2021-09-08T23:01:12.932Z',
          id: 1,
        },
        {
          content: 'note 2',
          date: '2000-09-03T23:03:12.932Z',
          id: 2,
        },
        {
          content: 'note 3',
          date: '2020-09-10T23:01:12.932Z',
          id: 3,
        },
      ])
    );
  }),
  rest.delete('http://localhost:3004/notes/1', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          content: 'note 2',
          date: '2000-09-03T23:03:12.932Z',
          id: 2,
        },
        {
          content: 'note 3',
          date: '2020-09-10T23:01:12.932Z',
          id: 3,
        },
      ])
    );
  }),
];

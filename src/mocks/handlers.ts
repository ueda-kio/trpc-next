import { http, HttpResponse } from 'msw';

export const handlers = [
  http.all('http://localhost:3000/api/hello', () => {
    console.log('Mock!');
    return HttpResponse.json({ name: 'mock data' });
  }),
];

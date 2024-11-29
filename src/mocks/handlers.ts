import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://localhost:3000/api/hello', ({ request }) => {
    console.log('Mock!', JSON.stringify(request, null, 2));
    return HttpResponse.json({ name: 'mock data' });
  }),
];

import { http, HttpResponse } from 'msw';
import { getPostsFixture } from './fixture';

export const mockGetPosts = () =>
  http.get('https://jsonplaceholder.typicode.com/posts', () => {
    return HttpResponse.json(getPostsFixture);
  });

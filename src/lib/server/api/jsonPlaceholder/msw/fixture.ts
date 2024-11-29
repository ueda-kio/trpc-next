import { ZodiosResponseByPath } from '@zodios/core';
import { jsonPlaceholderApi } from '..';

export const getPostsFixture: ZodiosResponseByPath<typeof jsonPlaceholderApi.api, 'get', '/posts'> = [
  {
    id: 1,
    title: 'title',
    body: 'body',
    useId: 1,
  },
  {
    id: 1,
    title: 'title',
    body: 'body',
    useId: 1,
  },
  {
    id: 1,
    title: 'title',
    body: 'body',
    useId: 1,
  },
  {
    id: 1,
    title: 'title',
    body: 'body',
    useId: 1,
  },
];

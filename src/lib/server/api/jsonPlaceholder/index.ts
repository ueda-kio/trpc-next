import { createApiClient } from '../dist/jsonPlaceholder';

const path = 'https://jsonplaceholder.typicode.com/';

export const jsonPlaceholderApi = createApiClient(path);

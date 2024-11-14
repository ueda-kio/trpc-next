import { router } from '../trpc';
import { getHelloRouter } from './hello';

export const appRouter = router({
  hello: getHelloRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

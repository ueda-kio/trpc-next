import { procedure, router } from '@/server/trpc';
import { z } from 'zod';

export const getHello = procedure
  .input(
    z.object({
      text: z.string(),
    })
  )
  .query(async (opts) => {
    return {
      greeting: `hello ${opts.input.text}`,
    };
  });

export const getHelloRouter = router({ getHello });

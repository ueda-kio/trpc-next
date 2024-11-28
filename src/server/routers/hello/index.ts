import { GetHelloResponse } from '@/pages/api/hello.api';
import { procedure, router } from '@/server/trpc';
// import { z } from 'zod';

export const getHello = procedure
  // .input(
  //   z.object({
  //     text: z.string(),
  //   })
  // )
  .query(async () => {
    const res = await fetch('http://localhost:3000/api/hello');
    const json = (await res.json()) as GetHelloResponse;
    return {
      greeting: `hello ${json.name}`,
    };
  });

export const getHelloRouter = router({ getHello });

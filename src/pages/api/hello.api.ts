// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSession } from '@/lib/getSession';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const session = await getSession(req, res);
  session.accessDate = new Date();

  res.status(200).json({ name: 'John Doe' });
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export type GetHelloResponse = {
  name: string;
};

export default async function handler(_: NextApiRequest, res: NextApiResponse<GetHelloResponse>) {
  res.status(200).json({ name: 'product data' });
}

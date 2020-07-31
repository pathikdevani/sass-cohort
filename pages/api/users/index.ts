import { NextApiRequest, NextApiResponse } from 'next'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ data: 'This is just simple test API' });
}

export default handler

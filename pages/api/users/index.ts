import { NextApiRequest, NextApiResponse } from 'next'

const handler = (_req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({ data: 'This is just simple test API' })
}

export default handler

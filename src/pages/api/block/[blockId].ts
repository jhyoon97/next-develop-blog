import type { NextApiRequest, NextApiResponse } from "next";

// services
import notionServices from "services/notion";

type Request = Omit<NextApiRequest, "query"> & {
  query: {
    blockId: string;
  };
};

export default async (req: Request, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { blockId } = req.query;

    const response = await notionServices.getBlock(blockId);

    res.status(200).json(response);
  }
};

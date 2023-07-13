import type { NextApiRequest, NextApiResponse } from "next";

// services
import notionServices from "services/notion";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { postId } = req.query;

    const response = await notionServices.getPage(postId as string);

    res.status(200).json(response);
  }
};

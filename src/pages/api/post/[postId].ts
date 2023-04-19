import type { NextApiRequest, NextApiResponse } from "next";

// utils
import { getPage } from "utils/notion";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { postId } = req.query;

    const page = await getPage(postId as string);

    res.status(200).json(page);
  }
};

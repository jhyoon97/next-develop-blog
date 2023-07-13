import type { NextApiRequest, NextApiResponse } from "next";

// utils
import notionServices from "services/notion";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const response = await notionServices.getList();

    res.status(200).json(response);
  }
};

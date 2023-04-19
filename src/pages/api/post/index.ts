import type { NextApiRequest, NextApiResponse } from "next";

// utils
import { getList } from "utils/notion";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const data = await getList();

    res.status(200).json(data);
  }
};

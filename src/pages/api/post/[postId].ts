import type { NextApiRequest, NextApiResponse } from "next";

// services
import notionServices from "services/notion";

type Request = Omit<NextApiRequest, "query"> & {
  query: {
    postId: string;
  };
};

export default async (req: Request, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { postId } = req.query;

    const response = await notionServices.getPage(postId);

    res.status(200).json(response);
  }
};

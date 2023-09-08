import getMetaData from "metadata-scraper";

// types
import type { NextApiRequest, NextApiResponse } from "next";

type Request = Omit<NextApiRequest, "query"> & {
  query: {
    url: string;
  };
};

export default async (req: Request, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { url } = req.query;

    const response = await getMetaData(url);

    res.status(200).json(response);
  }
};

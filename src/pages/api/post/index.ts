import type { NextApiRequest, NextApiResponse } from "next";
import dayjs from "dayjs";

// utils
import { getList } from "utils/notion";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { results } = await getList({
      database_id: process.env.NEXT_PUBLIC_DATABASE as string,
      sorts: [
        {
          property: "날짜",
          direction: "descending",
        },
      ],
    });

    const response = results.map((item) => {
      return {
        id: item.id,
        title: (item.properties["이름"] as any).title[0].plain_text,
        createdAt: dayjs(item.created_time).format("YYYY-MM-DD HH:mm:ss"),
      };
    });

    res.status(200).json(response);
  }
};

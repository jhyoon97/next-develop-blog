import dayjs from "dayjs";

// config
import config from "config";

// types
import type { NotionDatabasesQueryResponse, APIPostListResponse } from "@types";

import client from "./client";

export default async (): Promise<APIPostListResponse> => {
  try {
    const response = (await client.databases.query({
      database_id: config.notion.databaseId,
      sorts: [
        {
          timestamp: "created_time",
          direction: "descending",
        },
      ],
    })) as NotionDatabasesQueryResponse;

    const data = [];

    for (let i = 0; i < response.results.length; i += 1) {
      const item = response.results[i];

      data.push({
        id: item.id,
        title: (item.properties["이름"] as any).title[0].plain_text,
        createdAt: dayjs(item.created_time).format("YYYY-MM-DD HH:mm:ss"),
      });
    }

    return data;
  } catch (err) {
    return Promise.reject(err);
  }
};

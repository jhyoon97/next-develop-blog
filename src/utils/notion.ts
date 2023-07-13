import { Client } from "@notionhq/client";
import dayjs from "dayjs";

// types
import type { NotionDatabasesQueryResponse, APIPostListResponse } from "@types";

// config
import config from "config";

const notionClient = new Client({
  auth: config.notion.apiKey,
});

export const getList = async (): Promise<APIPostListResponse> => {
  const { results } = (await notionClient.databases.query({
    database_id: config.notion.databaseId as string,
    sorts: [
      {
        property: "날짜",
        direction: "descending",
      },
    ],
  })) as NotionDatabasesQueryResponse;

  const data = [];

  for (let i = 0; i < results.length; i += 1) {
    const item = results[i];

    data.push({
      id: item.id,
      title: (item.properties["이름"] as any).title[0].plain_text,
      createdAt: dayjs(item.created_time).format("YYYY-MM-DD HH:mm:ss"),
    });
  }

  return data;
};

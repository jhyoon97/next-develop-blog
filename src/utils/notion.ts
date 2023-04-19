import { Client } from "@notionhq/client";
import { NotionCompatAPI } from "notion-compat";
import dayjs from "dayjs";

// types
import type { ExtendedRecordMap } from "notion-types";
import type { NotionDatabasesQueryResponse, APIPostListResponse } from "@types";

const notionClient = new Client({
  auth: process.env.NEXT_PUBLIC_API_KEY,
});

const notionCompatClient = new NotionCompatAPI(notionClient);

export const getList = async (): Promise<APIPostListResponse> => {
  const { results } = (await notionClient.databases.query({
    database_id: process.env.NEXT_PUBLIC_DATABASE as string,
    sorts: [
      {
        property: "날짜",
        direction: "descending",
      },
    ],
  })) as NotionDatabasesQueryResponse;

  const data = results.map((item) => {
    return {
      id: item.id,
      title: (item.properties["이름"] as any).title[0].plain_text,
      createdAt: dayjs(item.created_time).format("YYYY-MM-DD HH:mm:ss"),
    };
  });

  return data;
};

export const getPage = async (pageId: any): Promise<ExtendedRecordMap> => {
  const data = await notionCompatClient.getPage(pageId);

  return data;
};

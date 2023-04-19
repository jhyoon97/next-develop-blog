import { Client } from "@notionhq/client";
import { NotionCompatAPI } from "notion-compat";

// types
import type { QueryDatabaseParameters } from "@notionhq/client/build/src/api-endpoints";
import type { NotionDatabasesQueryResponse } from "@types";

const notionClient = new Client({
  auth: process.env.NEXT_PUBLIC_API_KEY,
});

const notionCompatClient = new NotionCompatAPI(notionClient);

export const getPage = async (pageId: string, ...args: any[]) => {
  const response = await notionCompatClient.getPage(pageId, ...args);

  return response;
};

export const getList = async (
  params: QueryDatabaseParameters
): Promise<NotionDatabasesQueryResponse> => {
  const response = (await notionClient.databases.query(
    params
  )) as NotionDatabasesQueryResponse;

  return response;
};

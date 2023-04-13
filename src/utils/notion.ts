import { Client } from "@notionhq/client";
import { NotionCompatAPI } from "notion-compat";

const notion = new NotionCompatAPI(
  new Client({
    auth: process.env.NEXT_PUBLIC_API_KEY,
  })
);

export const getPage = async (pageId: string) => {
  const response = await notion.getPage(pageId);

  return response;
};

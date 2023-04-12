import { NotionAPI } from "notion-client";

const notion = new NotionAPI({
  authToken: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});

export const getPage = async (pageId: string) => {
  const response = await notion.getPage(pageId);

  return response;
};

import dayjs from "dayjs";

// types
import type {
  PageObjectResponse,
  ListBlockChildrenResponse,
  BlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { APIPostResponse } from "@types";

import client from "./client";

export default async (pageId: any): Promise<APIPostResponse> => {
  const response = (await client.pages.retrieve({
    page_id: pageId,
  })) as PageObjectResponse;
  const childrenResponse = (await client.blocks.children.list({
    block_id: pageId,
  })) as ListBlockChildrenResponse;

  return {
    title: (response.properties["이름"] as any).title[0].plain_text,
    createdAt: dayjs(response.created_time).format("YYYY-MM-DD"),
    hasTableOfContents: !!(
      childrenResponse.results as BlockObjectResponse[]
    ).find((item) => item.type === "table_of_contents"),
    blocks: childrenResponse.results as BlockObjectResponse[],
  };
};

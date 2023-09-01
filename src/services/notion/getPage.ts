import dayjs from "dayjs";

// types
import type {
  PageObjectResponse,
  BlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { APIPostResponse } from "@types";

import client from "./client";

export default async (pageId: string): Promise<APIPostResponse> => {
  try {
    const pageResponse = (await client.pages.retrieve({
      page_id: pageId,
    })) as PageObjectResponse;
    const childrenResponse = await client.blocks.children.list({
      block_id: pageId,
    });

    return {
      title: (pageResponse.properties["이름"] as any).title[0].plain_text,
      createdAt: dayjs(pageResponse.created_time).format("YYYY-MM-DD"),
      hasTableOfContents: !!(
        childrenResponse.results as BlockObjectResponse[]
      ).find((item) => item.type === "table_of_contents"),
      blocks: (childrenResponse.results as BlockObjectResponse[]).filter(
        (item) => item.type !== "table_of_contents"
      ),
    };
  } catch (err) {
    return Promise.reject(err);
  }
};

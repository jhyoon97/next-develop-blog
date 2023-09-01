import dayjs from "dayjs";

// utils
import notionUtils from "utils/notion";

// types
import type { APIPostResponse } from "@types";
import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import client from "./client";

export default async (pageId: string): Promise<APIPostResponse> => {
  try {
    const pageResponse = await client.pages.retrieve({
      page_id: pageId,
    });
    const contentResponse = await client.blocks.children.list({
      block_id: pageId,
    });

    if ("properties" in pageResponse) {
      return {
        title: notionUtils.getPageTitle(pageResponse),
        createdAt: dayjs(pageResponse.created_time).format("YYYY-MM-DD"),
        hasTableOfContents: !!contentResponse.results.find(
          (item) => "type" in item && item.type === "table_of_contents"
        ),
        blocks: contentResponse.results.filter(
          (item) => "type" in item && item.type !== "table_of_contents"
        ) as BlockObjectResponse[],
      };
    }

    throw new Error("getPage: no PartialPageResponse");
  } catch (err) {
    return Promise.reject(err);
  }
};

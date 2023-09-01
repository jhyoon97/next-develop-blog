import dayjs from "dayjs";

// utils
import notionUtils from "utils/notion";

// services
import notionServices from "services/notion";

// types
import type { APIPostResponse } from "@types";
import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import client from "./client";

export default async (pageId: string): Promise<APIPostResponse> => {
  try {
    const pageResponse = await client.pages.retrieve({
      page_id: pageId,
    });
    const contentResponse = await notionServices.getBlockChildren(pageId);

    if ("properties" in pageResponse) {
      const pageData = {
        title: notionUtils.getPageTitle(pageResponse),
        createdAt: dayjs(pageResponse.created_time).format("YYYY-MM-DD"),
        hasTableOfContents: !!contentResponse.find(
          (item) => item.type === "table_of_contents"
        ),
        blocks: await notionUtils.deepFetchAllChildren(
          contentResponse.filter(
            (item): item is BlockObjectResponse =>
              item.type !== "table_of_contents"
          )
        ),
      };

      return pageData;
    }

    throw new Error("getPage: no PartialPageResponse");
  } catch (err) {
    return Promise.reject(err);
  }
};

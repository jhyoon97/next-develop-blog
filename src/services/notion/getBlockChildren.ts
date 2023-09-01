import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

import client from "./client";

export default async (blockId: string): Promise<Array<BlockObjectResponse>> => {
  try {
    const children = await client.blocks.children.list({
      block_id: blockId,
    });

    return children.results as Array<BlockObjectResponse>;
  } catch (err) {
    return Promise.reject(err);
  }
};

import { Client } from "@notionhq/client";

// config
import config from "config";

const notionClient = new Client({
  auth: config.notion.apiKey,
});

export default notionClient;

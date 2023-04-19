// types
import type {
  QueryDatabaseResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type NotionDatabasesQueryResponse = Omit<
  QueryDatabaseResponse,
  "results"
> & {
  results: Array<PageObjectResponse>;
};

export type APIPostListResponse = {
  id: string;
  title: string;
  createdAt: string;
}[];

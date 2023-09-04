// types
import type {
  QueryDatabaseResponse,
  PageObjectResponse,
  BlockObjectResponse,
  RichTextItemResponse,
  ParagraphBlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
  ToggleBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

type ApiColor =
  | "default"
  | "gray"
  | "brown"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "red"
  | "gray_background"
  | "brown_background"
  | "orange_background"
  | "yellow_background"
  | "green_background"
  | "blue_background"
  | "purple_background"
  | "pink_background"
  | "red_background";

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

export interface HasChildrenParagraph
  extends Omit<ParagraphBlockObjectResponse, "paragraph"> {
  paragraph: {
    rich_text: Array<RichTextItemResponse>;
    color: ApiColor;
    children: Array<HasChildrenBlockObject>;
  };
}

export interface HasChildrenBulletedList
  extends Omit<BulletedListItemBlockObjectResponse, "bulleted_list_item"> {
  bulleted_list_item: {
    rich_text: Array<RichTextItemResponse>;
    color: ApiColor;
    children: Array<HasChildrenBlockObject>;
  };
}

export interface HasChildrenNumberedList
  extends Omit<NumberedListItemBlockObjectResponse, "numbered_list_item"> {
  numbered_list_item: {
    rich_text: Array<RichTextItemResponse>;
    color: ApiColor;
    children: Array<HasChildrenBlockObject>;
  };
}

export interface HasChildrenToggle
  extends Omit<ToggleBlockObjectResponse, "toggle"> {
  toggle: {
    rich_text: Array<RichTextItemResponse>;
    color: ApiColor;
    children: Array<HasChildrenBlockObject>;
  };
}

export type HasChildrenBlockObject =
  | BlockObjectResponse
  | HasChildrenParagraph
  | HasChildrenBulletedList
  | HasChildrenNumberedList
  | HasChildrenToggle;

export type APIPostResponse = {
  title: string;
  createdAt: string;
  hasTableOfContents: boolean;
  blocks: HasChildrenBlockObject[];
};

// NotionRenderer/RichText
export interface RichTextGroup {
  groupType: "code" | "link";
  richText: Array<RichTextItemResponse | RichTextGroup>;
}

export type ProcessedRichTextItem = RichTextItemResponse | RichTextGroup;

export type ProcessedRichTextArray = Array<ProcessedRichTextItem>;

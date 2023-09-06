// types
import type {
  BlockObjectResponse,
  RichTextItemResponse,
  ParagraphBlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
  ToggleBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

// "@notionhq/client/build/src/api-endpoints"에서 export하고 있지 않아서 정의함
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

// api/getList
export type APIPostListResponse = {
  id: string;
  title: string;
  createdAt: string;
}[];

// api/getPage
export type APIPostResponse = {
  title: string;
  createdAt: string;
  hasTableOfContents: boolean;
  blocks: HasChildrenBlockObject[];
};

// children 추가
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

// NotionRenderer
export interface BlockGroup {
  groupType: "bulleted_list_item" | "numbered_list_item";
  blocks: Array<HasChildrenBlockObject>;
}

export type ProcessedBlock = HasChildrenBlockObject | BlockGroup;

export type ProcessedBlockArray = Array<ProcessedBlock>;

// NotionRenderer/RichText
export interface RichTextGroup {
  groupType: "code" | "link";
  richText: Array<RichTextItemResponse | RichTextGroup>;
}

export type ProcessedRichTextItem = RichTextItemResponse | RichTextGroup;

export type ProcessedRichTextArray = Array<ProcessedRichTextItem>;

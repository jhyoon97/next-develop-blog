// types
import type {
  ProcessedBlock,
  BlockGroup,
  ProcessedRichTextItem,
  RichTextGroup,
} from "types/notion";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

const contains = <T extends string>(
  list: ReadonlyArray<T>,
  value: string
): value is T => {
  return list.some((item) => item === value);
};

const isBlockGroup = (item: ProcessedBlock): item is BlockGroup => {
  return item && "groupType" in item;
};

const isRichTextGroup = (
  item: ProcessedRichTextItem
): item is RichTextGroup => {
  return item && "groupType" in item;
};

const isRichTextItemResponse = (
  item: ProcessedRichTextItem
): item is RichTextItemResponse => {
  return item && "annotations" in item;
};

export default {
  contains,
  isBlockGroup,
  isRichTextGroup,
  isRichTextItemResponse,
};

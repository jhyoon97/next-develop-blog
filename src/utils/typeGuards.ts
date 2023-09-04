// types
import type { ProcessedRichTextItem, RichTextGroup } from "@types";
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

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
  isRichTextGroup,
  isRichTextItemResponse,
};

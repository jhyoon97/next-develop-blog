/* eslint-disable react/no-array-index-key */
/*
컴포넌트 구조
RichText
ㄴ Code
    ㄴ Link
        ㄴ Span
    ㄴ Span
ㄴ Link
    ㄴ Span
ㄴ Span
*/
import { useMemo } from "react";

// types
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

import Span from "./Span";
import Anchor from "./Anchor";
import Code from "./Code";

interface Props {
  richText: Array<RichTextItemResponse>;
}

interface LinkRichTextGroupInCode {
  groupType: "link";
  richText: Array<RichTextItemResponse>;
}

type RichTextGroupItem = RichTextItemResponse | LinkRichTextGroupInCode;

interface RichTextGroup {
  groupType: "code" | "link";
  richText: Array<RichTextGroupItem>;
}

export type NestedRichTextItem = RichTextItemResponse | RichTextGroup;

type NestedRichText = Array<NestedRichTextItem>;

const groupingLink = (array: Array<NestedRichTextItem | RichTextGroupItem>) => {
  // href 값이 같은 블록들을 그룹핑하는 함수
  return array.reduce<Array<NestedRichTextItem | RichTextGroupItem>>(
    (acc, item, index, arr) => {
      if (
        "href" in item &&
        item.href &&
        (item.annotations.code ===
          (arr[index + 1] as RichTextItemResponse)?.annotations?.code ||
          index + 1 === arr.length)
      ) {
        const lastAccItem = acc[acc.length - 1];

        if (
          lastAccItem &&
          "groupType" in lastAccItem &&
          item.href === (arr[index - 1] as RichTextItemResponse)?.href
        ) {
          // 그룹과 href값이 같은 경우에만 포함
          const newAcc = [...acc];

          (newAcc[newAcc.length - 1] as RichTextGroup).richText.push(item);

          return newAcc;
        }

        if (
          "href" in item &&
          item.href === (arr[index + 1] as RichTextItemResponse)?.href
        ) {
          // 다음 아이템의 href값과 일치하면 그룹 생성
          return acc.concat({ groupType: "link", richText: [item] });
        }

        return acc.concat(item);
      }

      return acc.concat(item);
    },
    []
  );
};

const RichText = ({ richText }: Props) => {
  const nestedRichText = useMemo<NestedRichText>(() => {
    const groupByCode = richText.reduce<NestedRichText>(
      (acc, item, index, arr) => {
        if (item.annotations.code) {
          const lastAccItem = acc[acc.length - 1];

          if (lastAccItem && "groupType" in lastAccItem) {
            const newAcc = [...acc];

            (newAcc[newAcc.length - 1] as RichTextGroup).richText.push(item);

            return newAcc;
          }

          if (arr[index + 1]?.annotations.code) {
            return acc.concat({ groupType: "code", richText: [item] });
          }
        }

        return acc.concat(item);
      },
      []
    );

    const groupByLink = groupingLink(groupByCode);

    const groupByLinkInCode = groupByLink.map((item) => {
      if ("groupType" in item && item.groupType === "code") {
        return {
          groupType: item.groupType,
          richText: groupingLink(item.richText),
        } as RichTextGroup;
      }

      return item;
    });

    return groupByLinkInCode;
  }, [richText]);

  return (
    <>
      {nestedRichText.map((item, index) => {
        return (() => {
          if (
            ("annotations" in item && item.annotations.code) ||
            ("groupType" in item && item.groupType === "code")
          ) {
            return <Code key={index} nestedRichTextItem={item} />;
          }

          if (
            ("href" in item && item.href) ||
            ("groupType" in item && item.groupType === "link")
          ) {
            return <Anchor key={index} nestedRichTextItem={item} />;
          }

          if ("annotations" in item) {
            return <Span key={index} richTextItem={item} />;
          }

          return null;
        })();
      })}
    </>
  );
};

export default RichText;

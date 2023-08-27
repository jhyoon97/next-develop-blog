import { useMemo, Fragment } from "react";
import { css, useTheme } from "@emotion/react";

// types
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import type { SerializedStyles, Theme } from "@emotion/react";

interface Props {
  richText: Array<RichTextItemResponse>;
}

interface RichTextItemProps {
  css?: SerializedStyles;
  href?: string;
}

interface LinkRichTextInCode {
  groupType: "link";
  richText: Array<RichTextItemResponse>;
}

interface RichTextGroup {
  groupType: "code" | "link";
  richText: Array<RichTextItemResponse | LinkRichTextInCode>;
}

type NestedRichText = Array<RichTextItemResponse | RichTextGroup>;

const spanText = (theme: Theme, richTextItem: RichTextItemResponse) => css`
  font-style: ${richTextItem.annotations.italic ? "italic" : "inherit"};
  font-weight: ${richTextItem.annotations.bold ? "bold" : "inherit"};
  text-decoration: ${(() => {
    const decorations = [];

    if (richTextItem.annotations.underline) {
      decorations.push("underline");
    }
    if (richTextItem.annotations.strikethrough) {
      decorations.push("line-through");
    }
    return decorations.join(" ") || "unset";
  })()};
`;
const codeText = (theme: Theme, richTextItem: RichTextItemResponse) => css`
  padding: 1px 4px;
  background: ${theme.codeBg};
  color: ${theme.code};
  border-radius: 4px;
`;
const linkText = (theme: Theme, richTextItem: RichTextItemResponse) => css`
  color: ${theme.link};
  border-bottom: 1px solid ${theme.link};

  &:hover {
    color: ${theme.linkHover};
    border-bottom-color: ${theme.linkHover};
  }
`;

const RichText = ({ richText }: Props) => {
  const theme = useTheme();

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

    const groupByLink = groupByCode.reduce<NestedRichText>(
      (acc, item, index, arr) => {
        if (
          "href" in item &&
          item.href &&
          item.annotations.code ===
            (arr[index + 1] as RichTextItemResponse)?.annotations.code
        ) {
          // 코드로 감싸져있지 않은 링크
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

    const groupByLinkInCode = groupByLink.map((item) => {
      if ("groupType" in item && item.groupType === "code") {
        // 코드 내의 링크
        return {
          ...item,
          richText: item.richText.reduce((acc, item, index, arr) => {
            if (
              "href" in item &&
              item.href &&
              item.annotations.code ===
                (arr[index + 1] as RichTextItemResponse)?.annotations.code
            ) {
              // 코드로 감싸져있지 않은 링크
              const lastAccItem = acc[acc.length - 1];

              if (
                lastAccItem &&
                "groupType" in lastAccItem &&
                item.href === (arr[index - 1] as RichTextItemResponse)?.href
              ) {
                // 그룹과 href값이 같은 경우에만 포함
                const newAcc = [...acc];

                (newAcc[newAcc.length - 1] as RichTextGroup).richText.push(
                  item
                );

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
          }, []),
        };
      }

      return item;
    });

    return groupByLinkInCode;
  }, [richText]);

  console.log(nestedRichText);

  return (
    <>
      {richText.map((richTextItem, richTextIndex) => {
        const richTextItemProps: RichTextItemProps = {};
        const WrapperTag = (() => {
          if (richTextItem.annotations.code) {
            richTextItemProps.css = codeText(theme, richTextItem);
            return "code";
          }
          if (richTextItem.href) {
            richTextItemProps.css = linkText(theme, richTextItem);
            richTextItemProps.href = richTextItem.href;
            return "a";
          }
          if (
            richTextItem.annotations.bold ||
            richTextItem.annotations.italic ||
            richTextItem.annotations.strikethrough ||
            richTextItem.annotations.underline ||
            richTextItem.annotations.color !== "default"
          ) {
            richTextItemProps.css = spanText(theme, richTextItem);
            return "span";
          }
          return Fragment;
        })();

        return (
          <WrapperTag
            // eslint-disable-next-line react/no-array-index-key
            key={richTextIndex}
            {...richTextItemProps}
          >
            {richTextItem.plain_text}
          </WrapperTag>
        );
      })}
    </>
  );
};

export default RichText;

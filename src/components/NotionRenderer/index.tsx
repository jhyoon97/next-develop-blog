import { css } from "@emotion/react";
import { useMemo } from "react";

// utils
import utils from "utils";
import typeGuards from "utils/typeGuards";

// types
import type {
  BlockGroup,
  HasChildrenBlockObject,
  ProcessedBlockArray,
  HasChildrenBulletedList,
  HasChildrenNumberedList,
} from "@types";
import {
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

import BulletedList from "./BulletedList";
import NumberedList from "./NumberedList";
import HeadingLevel1 from "./HeadingLevel1";
import HeadingLevel2 from "./HeadingLevel2";
import HeadingLevel3 from "./HeadingLevel3";
import Code from "./Code";
import Image from "./Image";
import Paragraph from "./Paragraph";
import Bookmark from "./Bookmark";

interface Props {
  blocks: HasChildrenBlockObject[];
  depth?: number;
}

const box = (depth: number) => css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: ${depth > 1 ? 1.5 : 0}rem;
  width: 100%;
`;

// 그룹핑이 필요한 블록 타입
const needGroupingTypes = ["bulleted_list_item", "numbered_list_item"];

const NotionRenderer = ({ blocks, depth = 1 }: Props) => {
  const processedBlockArray = useMemo<ProcessedBlockArray>(() => {
    return blocks.reduce<ProcessedBlockArray>((acc, item) => {
      if (typeGuards.contains(needGroupingTypes, item.type)) {
        // 그룹핑이 필요한 블록인 경우 (ol, ul 등)
        const lastAccItem = utils.getLastItem(acc);

        if (
          lastAccItem &&
          typeGuards.isBlockGroup(lastAccItem) &&
          lastAccItem.groupType === item.type
        ) {
          // 누산 중인 배열 마지막 아이템이 그룹상태이고, 현재 아이템과 타입이 같다면 그룹에 포함
          lastAccItem.blocks.push(item);

          return acc;
        }

        // 누산 중인 배열 마지막 아이템이 그룹상태가 아닌 경우 새로운 그룹 생성
        return acc.concat({
          groupType: item.type,
          blocks: [item],
        } as BlockGroup);
      }

      return acc.concat(item);
    }, []);
  }, [blocks]);

  return (
    <div css={box(depth)}>
      {processedBlockArray.map((item) =>
        (() => {
          if (typeGuards.isBlockGroup(item)) {
            switch (item.groupType) {
              case "bulleted_list_item":
                return (
                  <BulletedList
                    key={item.blocks[0].id}
                    blocks={
                      item.blocks as Array<
                        | BulletedListItemBlockObjectResponse
                        | HasChildrenBulletedList
                      >
                    }
                    depth={depth}
                  />
                );
              case "numbered_list_item":
                return (
                  <NumberedList
                    key={item.blocks[0].id}
                    blocks={
                      item.blocks as Array<
                        | NumberedListItemBlockObjectResponse
                        | HasChildrenNumberedList
                      >
                    }
                    depth={depth}
                  />
                );
              default:
                return null;
            }
          } else {
            switch (item.type) {
              case "heading_1":
                return <HeadingLevel1 key={item.id} block={item} />;
              case "heading_2":
                return <HeadingLevel2 key={item.id} block={item} />;
              case "heading_3":
                return <HeadingLevel3 key={item.id} block={item} />;
              case "code":
                return <Code key={item.id} block={item} />;
              case "image":
                return <Image key={item.id} block={item} />;
              case "paragraph":
                return <Paragraph key={item.id} block={item} depth={depth} />;
              case "bookmark":
                return <Bookmark key={item.id} block={item} />;
              default:
                return null;
            }
          }
        })()
      )}
    </div>
  );
};

export default NotionRenderer;

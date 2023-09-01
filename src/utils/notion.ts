import type {
  PageObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export default {
  getPageTitle: (page: PageObjectResponse | PartialPageObjectResponse) => {
    if ("properties" in page) {
      const titleKey = Object.keys(page.properties).find(
        (key) => page.properties[key].type === "title"
      );

      return titleKey
        ? (page.properties[titleKey] as any).title[0].plain_text
        : "제목 없음";
    }

    return "제목 없음";
  },
};

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
  blocks: Array<HasChildrenBlockObject>;
};

import notionServices from "@/services/notion";

import PostList from "./PostList";

export const revalidate = 0;

const Page = async () => {
  const postList = await notionServices.getList();

  return <PostList postList={postList} />;
};

export default Page;

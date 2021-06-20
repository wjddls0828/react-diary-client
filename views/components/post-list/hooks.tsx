import { Post } from 'share/interfaces/post';
import { useMemo, useState } from 'react';
import { useCallback } from 'react';
import { POSTS_PER_PAGE } from 'share/constant';
import postAPI from 'common/api/postAPI';

export const usePagedPosts = ({ initialPosts, total }) => {
  const [pagedPosts, setPagedPosts] = useState<Post[]>(initialPosts);
  const pageCount = useMemo(() => Math.ceil(total / POSTS_PER_PAGE), [total]);

  const changePage = useCallback(async ({ selected }: { selected: number }) => {
    const getPostsByPage = (selected: number) => async () => {
      const pagedPosts = await postAPI.getAllPostsByPage(selected + 1); // TODO: use SWR later?

      if (!pagedPosts) return;

      const { posts } = pagedPosts;
      setPagedPosts(posts);
      console.log(posts);
    };

    getPostsByPage(selected)();
  }, []);

  return {
    pagedPosts,
    pageCount,
    changePage,
  };
};

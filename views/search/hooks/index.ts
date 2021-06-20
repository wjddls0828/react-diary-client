import { Post } from 'share/interfaces/post';
import { useEffect, useMemo, useState } from 'react';
import { useCallback } from 'react';
import { POSTS_PER_PAGE } from 'share/constant';
import postAPI from 'common/api/postAPI';

export const usePagedPosts = (initialPosts: Post[], term: string, total: number) => {
  const [pagedPosts, setPagedPosts] = useState<Post[]>(initialPosts);
  const pageCount = useMemo(() => Math.ceil(total / POSTS_PER_PAGE), [total]);

  useEffect(() => {
    setPagedPosts(initialPosts);
  }, [initialPosts]);

  const changePage = useCallback(
    async ({ selected }: { selected: number }) => {
      const getPostsByPage = (selected: number) => async () => {
        const pagedPosts = await postAPI.searchPosts(term, selected + 1);

        if (!pagedPosts) return;

        const { posts } = pagedPosts;
        console.log(posts);
        setPagedPosts(posts);
      };

      getPostsByPage(selected)();
    },
    [term]
  );

  return {
    pagedPosts,
    pageCount,
    changePage,
  };
};

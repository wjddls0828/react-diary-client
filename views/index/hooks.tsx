import { Post } from 'share/interfaces/post';
import { useMemo, useState } from 'react';

import { useEffect, useCallback } from 'react';
import { POSTS_PER_PAGE } from 'share/constant';
import postAPI from 'common/api/postAPI';

export const usePagedPosts = ({ initialPosts, total }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pagedPosts, setPagedPosts] = useState<Post[]>(initialPosts);
  const pageCount = useMemo(() => Math.ceil(total / POSTS_PER_PAGE), [total]);

  const changePage = useCallback(({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  }, []);

  const getPostsByPage = useCallback(
    (page: number) => async () => {
      const pagedPosts = await postAPI.getAllPostsByPage(page + 1); // TODO: use SWR later?

      if (!pagedPosts) return;

      const { posts } = pagedPosts;
      setPagedPosts(posts);
    },
    []
  );

  useEffect(() => {
    getPostsByPage(currentPage)();
  }, [currentPage]);

  return {
    pagedPosts,
    pageCount,
    changePage,
  };
};

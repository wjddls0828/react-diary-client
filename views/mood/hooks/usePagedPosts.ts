import { Post } from 'share/interfaces/post';
import { useEffect, useMemo, useState } from 'react';
import { useCallback } from 'react';
import { POSTS_PER_PAGE } from 'share/constant';
import postAPI from 'common/api/postAPI';

interface UsePagedPostsProps {
  initialPosts: Post[];
  total: number;
  moodId: number;
}

export const usePagedPosts = ({ initialPosts, total, moodId }: UsePagedPostsProps) => {
  const [pagedPosts, setPagedPosts] = useState(initialPosts);
  const pageCount = useMemo(() => Math.ceil(total / POSTS_PER_PAGE), [total]);

  useEffect(() => {
    setPagedPosts(initialPosts);
  }, [moodId, initialPosts]);

  const changePage = useCallback(
    async ({ selected }: { selected: number }) => {
      const getPostsByPage = (selected: number) => async () => {
        const pagedPosts = await postAPI.getPostsByMoodId(moodId, selected + 1); // TODO: use SWR later?

        if (!pagedPosts) return;

        const { posts } = pagedPosts;
        setPagedPosts(posts);
      };

      getPostsByPage(selected)();
    },
    [moodId]
  );

  return {
    pagedPosts,
    pageCount,
    changePage,
  };
};

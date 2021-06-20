import { Post } from 'share/interfaces/post';
import { useMemo, useState } from 'react';
import { useCallback } from 'react';
import { POSTS_PER_PAGE } from 'share/constant';
import postAPI from 'common/api/postAPI';
import { MOOD_ICONS } from 'common/constant';
import { parseDateToYearMonth } from 'common/utils/parseDateToYearMonth';

export const usePagedPosts = ({ initialPosts, total }) => {
  const [pagedPosts, setPagedPosts] = useState<Post[]>(initialPosts);
  const pageCount = useMemo(() => Math.ceil(total / POSTS_PER_PAGE), [total]);

  const changePage = useCallback(async ({ selected }: { selected: number }) => {
    const getPostsByPage = (selected: number) => async () => {
      const pagedPosts = await postAPI.getAllPostsByPage(selected + 1); // TODO: use SWR later?

      if (!pagedPosts) return;

      const { posts } = pagedPosts;
      setPagedPosts(posts);
    };

    getPostsByPage(selected)();
  }, []);

  return {
    pagedPosts,
    pageCount,
    changePage,
  };
};

export const useMonthlyPosts = () => {
  const [moodCounts, setMoodCounts] = useState([]);

  const setMonthlyPosts = useCallback(async (fetchInfo) => {
    if (!fetchInfo) return;

    const targetTime = new Date(fetchInfo.start);
    const yearMonth = parseDateToYearMonth(targetTime, 2);
    const data = await postAPI.getPostsAndMoodCountsByYearMonth(yearMonth);
    if (!data) return [];

    const { posts, counts } = data;
    setMoodCounts(counts); //TODO : 상태관리 - react-query for caching? or redux?

    const postEvents = posts.map((post: Post) => {
      return {
        id: post.id,
        start: post['createdAt'],
        color: 'transparent',
        className: MOOD_ICONS.find((mood) => mood.id === post.moodId).className,
      };
    });

    return postEvents;
  }, []);

  return { moodCounts, setMoodCounts, setMonthlyPosts };
};

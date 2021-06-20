import postAPI from 'common/api/postAPI';

const getRecentMoodId = async () => {
  const { posts } = await postAPI.getAllPostsByPage(1);
  return posts[0].moodId ?? 1;
};

export default getRecentMoodId;

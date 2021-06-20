import { PagedPosts, Post, PostCountsByMoodId, PostRequestBody } from 'share/interfaces/post';
import axios from './axios';
import endpoints from './endpoints';

const postAPI = {
  getAllPostsByPage: async (page: number): Promise<PagedPosts> => {
    const posts: PagedPosts = await axios
      .get<PagedPosts>(`${endpoints.POST_API}?page=${page}`)
      .catch((err) => {
        console.error(err);
        return null;
      });

    return posts;
  },

  getPostById: async (id: number): Promise<Post> => {
    const post: Post = await axios.get<Post>(`${endpoints.POST_API}/${id}`).catch((err) => {
      console.error(err);
      return null;
    });

    return post;
  },

  createPost: async (body: PostRequestBody): Promise<Post> => {
    const newPost: Post = await axios.post<Post>(endpoints.POST_API, body).catch((err) => {
      console.error(err);
      return null;
    });

    return newPost;
  },

  updatePost: async (id: number, body: Partial<PostRequestBody>): Promise<Post> => {
    const post: Post = await axios.patch<Post>(`${endpoints.POST_API}/${id}`, body).catch((err) => {
      console.error(err);
      return null;
    });

    return post;
  },

  deletePost: async (id: number): Promise<boolean> => {
    const result: boolean = await axios
      .delete<boolean>(`${endpoints.POST_API}/${id}`)
      .catch((err) => {
        console.error(err);
        return null;
      });

    return result;
  },

  searchPosts: async (keyword: string, page: number): Promise<PagedPosts> => {
    const posts = await axios
      .get<Post[]>(`${endpoints.POST_API}/search?keyword=${keyword}&page=${page}`)
      .catch((err) => {
        console.error(err);
        return null;
      });

    return posts;
  },

  getPostsByMoodId: async (moodId: number, page: number): Promise<Post[]> => {
    const posts = await axios
      .get<Post[]>(`${endpoints.POST_API}/mood/${moodId}?page=${page}`)
      .catch((err) => {
        console.error(err);
        return null;
      });

    return posts;
  },

  getMonthlyMoodPostCounts: async (term: string): Promise<PostCountsByMoodId[]> => {
    const postCountsByMoodId = await axios
      .get<PostCountsByMoodId[]>(`${endpoints.POST_API}/mood?term=${term}`)
      .catch((err) => {
        console.error(err);
        return null;
      });

    return postCountsByMoodId;
  },

  getPostsAndMoodCountsByYearMonth: async (term: string) => {
    const postCountsByMoodId = await axios
      .get(`${endpoints.POST_API}/monthly?term=${term}`)
      .catch((err) => {
        console.error(err);
        return null;
      });

    return postCountsByMoodId;
  },
};

export default postAPI;

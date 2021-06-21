export interface Post {
  id: number;
  userId: number;
  moodId: number;
  content: string;
  pureContent: string;
  createdAt: string;
  isCompleted: boolean;
}

export interface PagedPosts {
  total: number;
  posts: Post[];
}

export interface PostRequestBody {
  moodId: number;
  rawContent: string;
  pureContent: string;
}

export interface PostCountsByMoodId {
  moodId: number;
  count: number;
}

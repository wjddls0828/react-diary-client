export interface Post {
  id: number;
  userId: number;
  moodId: number;
  content: string;
  createdAt: string;
  isCompleted: boolean;
}

export interface PostRequestBody {
  moodId: number;
  content: string;
}

export interface PostCountsByMoodId {
  moodId: number;
  count: number;
}

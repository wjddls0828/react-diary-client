export interface Post {
  id: number;
  userId: number;
  title: string;
  content: string;
  isCompleted: boolean;
  isBookmarked: boolean;
  createdAt: string;
}

export interface PostRequestBody {
  title: string;
  content: string;
}

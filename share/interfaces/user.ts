export interface User {
  id: number;
  name: string;
  email: string;
  blogTitle: number;
}
export interface DecodedUserData {
  data: User;
  timestamp: number;
  iat: number;
  exp: number;
}

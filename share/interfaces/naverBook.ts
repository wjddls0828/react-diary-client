export interface NaverBook {
  title: string; //제목에서 검색어와 일치하는 부분은 태그로 감싸져 있다.
  link: string;
  image?: string;
  author: string;
  publisher: string;
  pubdate: string;
  price?: string;
  discount?: string;
  isbn: string;
  description: string; //패시지에서 검색어와 일치하는 부분은 태그로 감싸져 있다.
}

export interface PagedNaverBooks {
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  items: NaverBook[];
}

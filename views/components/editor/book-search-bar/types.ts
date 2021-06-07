import { NaverBook } from 'share/interfaces/naverBook';

export interface BookSearchProps {
  insertOnEditor: (book: NaverBook) => void;
  show: boolean;
}

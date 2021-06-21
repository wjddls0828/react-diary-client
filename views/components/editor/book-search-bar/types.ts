import { NaverBook } from 'share/interfaces/naverBook';

export interface BookSearchProps {
  insertOnEditor: (book: Partial<NaverBook>) => void;
  show: boolean;
}

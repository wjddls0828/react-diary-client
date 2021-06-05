export interface PaginationButtonProps {
  number: number;
  focus?: boolean;
  onClick: () => void;
}

export interface PaginationButtonStyleProps {
  focus?: boolean;
}

export interface PaginationProps {
  currentPage: number;
  maxPage: number;
  updatePage: (idx: number) => () => void;
}

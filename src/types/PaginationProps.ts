export type PaginationProps = {
  gotoNextPage: (() => void) | null;
  gotoPreviousPage: (() => void) | null;
};

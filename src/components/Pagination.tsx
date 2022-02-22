import React from 'react';
import { StyledPagButton, StyledPag } from '../styles/styles';
import { PaginationProps } from '../types/PaginationProps';

export default function Pagination({
  gotoNextPage,
  gotoPreviousPage,
}: PaginationProps) {
  return (
    <StyledPag>
      {gotoPreviousPage && (
        <StyledPagButton onClick={gotoPreviousPage}>Previous</StyledPagButton>
      )}
      {gotoNextPage && (
        <StyledPagButton onClick={gotoNextPage}>Next</StyledPagButton>
      )}
    </StyledPag>
  );
}

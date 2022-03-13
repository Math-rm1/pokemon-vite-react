import React from 'react';
import { StyledPagButton, StyledPag } from '../../styles/Styles';
import { PaginationProps } from '../../types/PaginationProps';

function Pagination({ gotoNextPage, gotoPreviousPage }: PaginationProps) {
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

export default Pagination;

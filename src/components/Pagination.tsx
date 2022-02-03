import React from 'react';
import { PaginationButton, PaginationContainer } from '../styles/styles';
import { PaginationProps } from '../typings/PaginationProps';

export default function Pagination({
  gotoNextPage,
  gotoPreviousPage,
}: PaginationProps) {
  return (
    <PaginationContainer>
      {gotoPreviousPage && (
        <PaginationButton onClick={gotoPreviousPage}>Previous</PaginationButton>
      )}
      {gotoNextPage && (
        <PaginationButton onClick={gotoNextPage}>Next</PaginationButton>
      )}
    </PaginationContainer>
  );
}

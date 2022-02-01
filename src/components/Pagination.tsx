import React from 'react';
import { PaginationContainer } from '../styles/styles';
import Button from './Button';

export default function Pagination() {
  return (
    <PaginationContainer>
      <Button text='Previous' />
      <Button text='Next' />
    </PaginationContainer>
  );
}

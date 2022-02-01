import React from 'react';
import { PaginationButton } from '../styles/styles';
import { ButtonProps } from '../typings/ButtonProps';

export default function Button(props: ButtonProps) {
  return <PaginationButton>{props.text}</PaginationButton>;
}

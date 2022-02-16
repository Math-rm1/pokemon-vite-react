import React, { useState } from 'react';
import Header from '../components/Header';
import List from '../components/List';
import Pagination from '../components/Pagination';
import { useFetch } from '../hooks/useFetch';
import { Pokemon } from '../types/Pokemon';

export default function Home() {
  const [currentPageUrl, setCurrentPageUrl] = useState<string>(
    'https://pokeapi.co/api/v2/pokemon/',
  );

  const {
    data: pokemonList,
    isLoading,
    previousUrl,
    nextUrl,
  } = useFetch<Pokemon[]>(currentPageUrl);

  function gotoNextPage() {
    if (nextUrl) setCurrentPageUrl(nextUrl);
  }

  function gotoPrevPage() {
    if (previousUrl) setCurrentPageUrl(previousUrl);
  }

  return (
    <>
      <Header />
      <List pokemonList={pokemonList} isLoading={isLoading} />
      <Pagination
        gotoNextPage={nextUrl ? gotoNextPage : null}
        gotoPreviousPage={previousUrl ? gotoPrevPage : null}
      />
    </>
  );
}

import axios, { AxiosResponse, CancelTokenSource } from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import List from '../components/List';
import Pagination from '../components/Pagination';
import { Pokemon } from '../typings/Pokemon';
import { PokemonResponse } from '../typings/PokemonResponse';

export default function Home() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const [previousPageUrl, setPreviousPageUrl] = useState<string>('');
  const [nextPageUrl, setNextPageUrl] = useState<string>('');
  const [currentPageUrl, setCurrentPageUrl] = useState<string>(
    'https://pokeapi.co/api/v2/pokemon',
  );

  useEffect(() => {
    const source: CancelTokenSource = axios.CancelToken.source();

    (async () => {
      setLoading(true);
      const res: AxiosResponse = await axios.get(currentPageUrl, {
        cancelToken: source.token,
      });

      const pokemonResults: Pokemon[] = await Promise.all(
        res.data.results.map(async (p: PokemonResponse) => {
          return (await axios.get(p.url)).data as Pokemon;
        }),
      );

      setNextPageUrl(res.data.next);
      setPreviousPageUrl(res.data.previous);

      setLoading(false);
      setPokemonList(pokemonResults);
    })();

    return () => {
      source.cancel();
    };
  }, [currentPageUrl]);

  function gotoNextPage() {
    if (nextPageUrl) setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    if (previousPageUrl) setCurrentPageUrl(previousPageUrl);
  }

  return (
    <>
      <Header />
      <List pokemonList={pokemonList} />
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPreviousPage={previousPageUrl ? gotoPrevPage : null}
      />
    </>
  );
}

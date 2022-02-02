import axios, { AxiosResponse, CancelTokenSource } from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import List from '../components/List';
import Pagination from '../components/Pagination';
import { Pokemon } from '../typings/Pokemon';
import { PokemonResponse } from '../typings/PokemonResponse';

export default function Home() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [currentPageUrl, setCurrentPageUrl] = useState<string>(
    'https://pokeapi.co/api/v2/pokemon',
  );

  useEffect(() => {
    const source: CancelTokenSource = axios.CancelToken.source();

    (async () => {
      const res: AxiosResponse = await axios.get(currentPageUrl, {
        cancelToken: source.token,
      });

      const pokemonResults: Pokemon[] = await Promise.all(
        res.data.results.map(async (p: PokemonResponse) => {
          return (await axios.get(p.url)).data as Pokemon;
        }),
      );

      setPokemonList(pokemonResults);
    })();

    return () => {
      source.cancel();
    };
  }, [currentPageUrl]);

  return (
    <>
      <Header />
      <List pokemonList={pokemonList} />
      <Pagination />
    </>
  );
}

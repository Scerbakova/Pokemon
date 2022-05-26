import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type SinglePokemonResponse = {
  // 'moves': {
  //   'name': string
  //   'url': string
  // }[],
  'moves': [{
    move: {
      name: string,
      url: string,
    }
  }],
  'sprites': {
    'other': {
      'official-artwork': {
        // eslint-disable-next-line camelcase
        front_default: string;
      }
    }
  }
  name: string,
  id: number,
  weight: number,
  height: number,
}

export type AllPokemonsResponse = {
  count: number
  next: string
  previous: null | string
  results: {
    name: string
    url: string
  }[]
}

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    // getPokemonByName: builder.query<SinglePokemonResponse, string>({
    //   query: (name) => `pokemon/${name}`,
    // }),
    getPokemonById: builder.query<SinglePokemonResponse, number>({
      query: (id) => `pokemon/${id}`,
    }),
    // getAllPokemons: builder.query<AllPokemonsResponse, void>({
    //   query: () => 'pokemon',
    // }),
    getAllPokemons: builder.query<AllPokemonsResponse, void>({
      query: () => 'pokemon',
    }),
    // getMorePokemons: builder.query<AllPokemonsResponse, void>({
    //   query: () => 'pokemon/?offset=10&limit=100',
    // }),
    // getMorePokemons: builder.query<AllPokemonsResponse, string>({
    //   query: (next) => `${next.replace(next.slice(0, 34), '/pokemon/')}`,
    // }),
  }),
});

export const { useGetAllPokemonsQuery, useGetPokemonByIdQuery } = pokemonApi;

export default pokemonApi;

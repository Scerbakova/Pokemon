import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type SinglePokemonResponse = {
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
    getPokemonById: builder.query<SinglePokemonResponse, number>({
      query: (id) => `pokemon/${id}`,
    }),
    getAllPokemons: builder.query<AllPokemonsResponse, number>({
      query: (amount) => `pokemon/?offset=10&limit=${amount}`,
    }),
  }),
});

export const { useGetAllPokemonsQuery, useGetPokemonByIdQuery } = pokemonApi;

export default pokemonApi;

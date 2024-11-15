import { HTTPClientNonAuth } from '@/config/http';
import { apiPokemon, apiPokemonForm, apiPokemonSpecies, apiPokemonType } from './_root';
import { createURL } from '@/config/service';

export const getPokemons = ({ queryKey }) => {
  const [, params] = queryKey;

  return HTTPClientNonAuth({
    method: 'GET',
    url: apiPokemonForm(),
    params,
  });
};

export const getPokemon = ({ queryKey }) => {
  const [, { id }] = queryKey;

  return HTTPClientNonAuth({
    method: 'GET',
    url: createURL(apiPokemonForm(), id),
  });
};

export const getPokemonDetail = ({ queryKey }) => {
  const [, { id }] = queryKey;

  return HTTPClientNonAuth({
    method: 'GET',
    url: createURL(apiPokemon(), id),
  });
}

export const getPokemonSpecies = ({ queryKey }) => {
  const [, { id }] = queryKey;

  return HTTPClientNonAuth({
    method: 'GET',
    url: createURL(apiPokemonSpecies(), id),
  });
};

export const getPokemonType = ({ queryKey }) => {
  const [, { id }] = queryKey;

  return HTTPClientNonAuth({
    method: 'GET',
    url: createURL(apiPokemonType(), id),
  });
};
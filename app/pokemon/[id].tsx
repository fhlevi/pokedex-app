import React from 'react'
import { Flex } from '@/components/atoms/flex';
import * as PokodexHeader from '@/components/molecules/pokodex-header';
import { Container } from '@/components/atoms/container';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getPokemon, getPokemonDetail, getPokemonType } from '@/services/pokemon';
import { Card } from '@/components/atoms/card';
import { ScrollArea } from '@/components/atoms/scroll-area';


const pokemonTypes: Record<string, string> = {
  bug: "#A7B723",
  dark: "#75574C",
  dragon: "#7037FF",
  electric: "#F9CF30",
  fairy: "#E69EAC",
  fighting: "#C12239",
  fire: "#F57D31",
  flying: "#A891EC",
  ghost: "#70559B",
  grass: "#74CB48",
  ground: "#DEC16B",
  ice: "#9AD6DF",
  normal: "#AAA67F",
  poison: "#A43E9E",
  psychic: "#FB5584",
  rock: "#B69E31",
  steel: "#B7B9D0",
  water: "#6493EB"
};

const PokemonDetailPage = () => {
  const { id } = useParams()

  const queryType = useQuery(
    ['pokemon-type', { id }],
    getPokemonType,
  );
  const pokemonType = queryType?.data?.data || {};

  const queryDetail = useQuery(
    ['pokemon-detail', { id }],
    getPokemonDetail,
  );
  const pokemonDetail = queryDetail?.data?.data || {};

  const queryPokemon = useQuery(
    ['pokemon-list', { id }],
    getPokemon,
  );
  const pokemon = queryPokemon?.data?.data;

  return (
    <Container>
      <Flex 
        direction="col" 
        className="h-full relative" 
        style={{ 
          backgroundColor: pokemonTypes[pokemonType?.name || 'steel'] || 'steel' 
        }}>
        <PokodexHeader.Detail name={pokemon?.name} />
        <img 
          src="/images/pokeball.svg" 
          className="absolute right-0 top-2" 
          alt="pokeball" 
        />
        <div className="w-full h-[144px] flex items-end justify-center">
          <img 
            src={pokemon?.sprites?.front_default} 
            alt=""
            style={{
              transform: 'scale(3)'
            }} 
          />
        </div>
        <div className="p-1 h-[calc(100vh-76px-144px)]">
          <Card className="bg-white h-full rounded-lg px-5 pt-14 pb-5">
            <ScrollArea className="h-full overflow-y-auto">
              <div 
                className="text-base font-semibold text-center mb-4" 
                style={{ 
                  color: pokemonTypes[pokemonType?.name || 'steel'] || 'steel' 
                }}>
                  About
              </div>
              <div className="grid grid-cols-3 mb-4">
                <div className="flex flex-col gap-1 border-r border-gray-light">
                  <div className="w-full text-center py-2 gap-2 flex">
                    <div className="w-full">{(pokemonDetail?.weight || 0) / 10} kg</div>
                  </div>
                  <div className="w-full text-center">Weight</div>
                </div>
                <div className="flex flex-col gap-1 border-r border-gray-light">
                  <div className="w-full text-center py-2 gap-2 flex">
                    <div className="w-full">{(pokemonDetail?.height || 0) / 10} m</div>
                  </div>
                  <div className="w-full text-center">Height</div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="w-full text-center py-2 gap-2 flex">
                    <div className="w-full">-</div>
                  </div>
                  <div className="w-full text-center">Moves</div>
                </div>
              </div>
            </ScrollArea>
          </Card>
        </div>
      </Flex>
    </Container>
  )
}

export default PokemonDetailPage;
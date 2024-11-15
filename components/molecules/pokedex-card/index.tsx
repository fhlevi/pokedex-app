import React from 'react';
import { z } from 'zod';
import { useQuery } from 'react-query';
import { getPokemon } from '@/services/pokemon';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '@/components/atoms/card';

const PokedexCardSchema = z.object({
  item: z.object({
    name: z.string(),
    url: z.string(),
  }),
});

type SchemaProps = z.infer<typeof PokedexCardSchema>;

export const PokedexCard = ({ item }: SchemaProps) => {
  const navigate = useNavigate();

  const queryPokemon = useQuery(
    ['pokemon-list', { id: item.name }],
    getPokemon,
  );
  const result = queryPokemon?.data?.data;

  const handleNavigate = () => {
    React.startTransition(() => {
      navigate(`/pokemon/${result?.id}`);
    });
  };

  return (
    <button onClick={handleNavigate} className="h-[130px]">
      <Card className="shadow-[rgba(60,_64,_67,_0.3)_0px_1px_2px_0px,_rgba(60,_64,_67,_0.15)_0px_2px_6px_2px] rounded-lg relative cursor-pointer">
        <div className="absolute bottom-5 z-10 w-full flex justify-center">
          <img src={result?.sprites?.front_default} className="scale-110" />
        </div>
        <div className="h-11 w-full bg-gray-light absolute bottom-0 rounded-[7px] pt-4 px-2 flex items-center justify-center">
          {result?.name}
        </div>
      </Card>
    </button>
  );
};

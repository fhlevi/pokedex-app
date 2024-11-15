import { Label } from '@/components/atoms/label';
import { Flex } from '@/components/atoms/flex';
import { PokodexSearch } from '../pokodex-search';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const PokodexHeaderSchema = z.object({
  onSearch: z.function().args(z.string()),
});

const PokodexHeaderPartial = PokodexHeaderSchema.partial({
  onSearch: true,
});

type TPokodexSearch = z.infer<typeof PokodexHeaderPartial>;

export const Search = ({ onSearch }: TPokodexSearch) => {
  return (
    <Flex className="px-3 pt-3 pb-6 flex flex-col space-y-3">
      <Flex className="gap-4">
        <img src="/icons/pokeball.svg" width={36} height={36} />
        <Label size="24px" className="font-bold">
          Pokédex
        </Label>
      </Flex>
      <Flex>
        <PokodexSearch onSearch={onSearch} />
      </Flex>
    </Flex>
  );
};

export const Detail = ({ name }: Record<string, string>) => {
  const navigate = useNavigate()

  const back = () => {
    React.startTransition(() => {
      navigate('/');
    })
  }

  return (
    <Flex className="px-5 pt-5 pb-6 flex flex-col space-y-3 h-[76px]">
      <Flex className="gap-4 w-full h-full items-center">
        <em 
          className="fa-solid fa-arrow-left text-3xl text-white cursor-pointer"
          onClick={back}
        />
        <Label size="24px" className="font-bold">
          {name}
        </Label>
      </Flex>
    </Flex>
  )
}

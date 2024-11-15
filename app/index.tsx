import { Flex } from '@/components/atoms/flex';
import * as PokodexHeader from '@/components/molecules/pokodex-header';
import { Container } from '@/components/atoms/container';
import { PokodexList } from '@/components/organisms/pokodex-list';
import { getPokemons } from '@/services/pokemon';
import { useQuery } from 'react-query';
import React from 'react';

function HomePage() {
  const [query, setQuery] = React.useState<string>('');
  const [offset, setOffset] = React.useState<number>(0);

  const queryPokemon = useQuery(
    ['pokemon-list', { limit: 20, offset }],
    getPokemons,
  );
  const results = queryPokemon?.data?.data?.results || [];
  const resultFilter = results?.filter((item: Record<string, string>) =>
    item.name.includes(query),
  );

  const handleSearch = (search: string) => setQuery(search);

  return (
    <Container>
      <Flex direction="col" className="h-full bg-red-50">
        <PokodexHeader.Search onSearch={handleSearch} />
        <PokodexList items={resultFilter} />
      </Flex>
    </Container>
  );
}

export default HomePage;

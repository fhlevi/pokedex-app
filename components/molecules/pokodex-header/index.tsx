import React from 'react'
import { Label } from '@/components/atoms/label';
import { Flex } from '@/components/atoms/flex';
import { PokodexSearch } from '../pokodex-search';

type Props = {}

export const PokodexHeader = (props: Props) => {
    return (
        <Flex className="px-3 pt-3 pb-6 flex flex-col space-y-3">
            <Flex className="gap-4">
                <img src="/icons/pokeball.svg" width={36} height={36} />
                <Label size="24px" className="font-bold">Pokédex</Label>
            </Flex>
            <Flex>
                <PokodexSearch />
            </Flex>
        </Flex>
    )
}
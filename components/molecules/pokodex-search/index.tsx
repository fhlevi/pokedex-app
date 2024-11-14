import { TextField } from '@radix-ui/themes';
import React from 'react';
import { z } from 'zod';

const PokodexSearchSchema = z.object({});

const PokodexSearchPartial = PokodexSearchSchema.partial({});

type TPokodexSearch = z.infer<typeof PokodexSearchPartial>;

export const PokodexSearch = ({}: TPokodexSearch) => {
  const [query, setQuery] = React.useState('');

  return (
    <TextField.Root
      className="w-full"
      radius="full"
      size="3"
      placeholder="Search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}>
      <TextField.Slot>
        <em className="fa-solid fa-magnifying-glass text-red-50"></em>
      </TextField.Slot>

      {query && (
        <TextField.Slot onClick={() => setQuery('')}>
          <em className="fa-solid fa-xmark text-red-50 cursor-pointer"></em>
        </TextField.Slot>
      )}
    </TextField.Root>
  );
};

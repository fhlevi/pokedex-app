import { TextField } from '@radix-ui/themes';
import React, { useEffect } from 'react';
import { z } from 'zod';

const PokodexSearchSchema = z.object({
  onSearch: z.function().args(z.string()),
});

const PokodexSearchPartial = PokodexSearchSchema.partial({
  onSearch: true,
});

type TPokodexSearch = z.infer<typeof PokodexSearchPartial>;

export const PokodexSearch = ({ onSearch }: TPokodexSearch) => {
  const [query, setQuery] = React.useState('');

  useEffect(() => {
    onSearch && onSearch(query);
  }, [query]);

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

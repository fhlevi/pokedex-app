import { ScrollArea } from '@/components/atoms/scroll-area';
import { z } from 'zod';
import { Card } from '@/components/atoms/card';
import { PokedexCard } from '@/components/molecules/pokedex-card';

const TodoListSchema = z.object({
  items: z.array(
    z.object({
      name: z.string(),
      url: z.string()
    }),
  ),
});

const TodoListPartial = TodoListSchema.partial({
  items: true
});

type SchemaProps = z.infer<typeof TodoListPartial>;

export const PokodexList = ({ items = [] }: SchemaProps) => {
  return (
    <div className="p-1 h-[calc(100vh-124px)]">
      <Card className="bg-white h-full rounded-lg px-3 pt-6">
        <ScrollArea className="h-full overflow-y-auto">
          <div className="grid grid-cols-3 h-full gap-3 my-3">
            {items.map((item) => (
              <PokedexCard 
                key={item.name}
                item={item}
              />
            ))}
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
};
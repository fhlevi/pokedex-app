import { Flex } from '@/components/atoms/flex';
import { ScrollArea } from '@/components/atoms/scroll-area';
import { z } from 'zod';
import { PokodexHeader } from '@/components/molecules/pokodex-header';
import { Card } from '@/components/atoms/card';

const TodoListSchema = z.object({
  items: z.array(
    z.object({
      id: z.string(),
      todo: z.string(),
      date: z.string(),
    }),
  ),
});

const TodoListPartial = TodoListSchema.partial({
  items: true
});

type SchemaProps = z.infer<typeof TodoListPartial>;

export const PokodexList = ({ items }: SchemaProps) => {
  return (
    <Flex direction="col" className="h-full bg-red-50">
      <PokodexHeader />

      <div className="p-1 h-[calc(100vh-124px)]">
        <Card className="bg-white h-full rounded-lg px-3 pt-6">
          <ScrollArea className="h-full overflow-y-auto">
            <div className="grid grid-cols-3 h-screen">
              {Array(100).fill(0).map((e) => (
                <div className="h-[108px]">ss</div>
              ))}
            </div>
          </ScrollArea>
        </Card>
      </div>
    </Flex>
  );
};
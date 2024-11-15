import { cn } from '@/utils/cn';
import { z } from 'zod';

const FlexSchema = z.object({
  children: z.any(),
  direction: z.enum(['col', 'row']),
  className: z.string(),
  style: z.any(),
});

const FlexPartial = FlexSchema.partial({
  className: true,
  direction: true,
});

type SchemaProps = z.infer<typeof FlexPartial>;

export const Flex = ({
  children,
  direction = 'row',
  className,
  style,
}: SchemaProps) => {
  const directions = {
    col: 'flex-col',
    row: 'flex-row',
  }[direction];

  return (
    <div className={cn('flex', directions, className)} style={style}>
      {children}
    </div>
  );
};

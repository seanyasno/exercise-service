import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    body: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
  })
  .strict();

export const PostMinAggregateInputObjectSchema = Schema;

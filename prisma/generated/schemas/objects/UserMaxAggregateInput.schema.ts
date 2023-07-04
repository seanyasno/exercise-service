import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    full_name: z.literal(true).optional(),
    email: z.literal(true).optional(),
    address: z.literal(true).optional(),
  })
  .strict();

export const UserMaxAggregateInputObjectSchema = Schema;

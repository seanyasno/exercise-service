import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.postCreateManyInput> = z
  .object({
    id: z.number().optional(),
    title: z.string(),
    body: z.string(),
    user_id: z.number(),
  })
  .strict();

export const postCreateManyInputObjectSchema = Schema;

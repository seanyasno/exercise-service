import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userCreateManyInput> = z
  .object({
    id: z.number(),
    full_name: z.string(),
    email: z.string(),
    address: z.string(),
  })
  .strict();

export const userCreateManyInputObjectSchema = Schema;

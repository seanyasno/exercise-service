import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.postCreateWithoutUserInput> = z
  .object({
    title: z.string(),
    body: z.string(),
  })
  .strict();

export const postCreateWithoutUserInputObjectSchema = Schema;

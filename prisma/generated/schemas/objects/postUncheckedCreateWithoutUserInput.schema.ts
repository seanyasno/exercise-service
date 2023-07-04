import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.postUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.number().optional(),
    title: z.string(),
    body: z.string(),
  })
  .strict();

export const postUncheckedCreateWithoutUserInputObjectSchema = Schema;

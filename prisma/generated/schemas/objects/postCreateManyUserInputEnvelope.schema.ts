import { z } from 'zod';
import { postCreateManyUserInputObjectSchema } from './postCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.postCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => postCreateManyUserInputObjectSchema),
      z.lazy(() => postCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const postCreateManyUserInputEnvelopeObjectSchema = Schema;

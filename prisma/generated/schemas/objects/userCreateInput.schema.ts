import { z } from 'zod';
import { postCreateNestedManyWithoutUserInputObjectSchema } from './postCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userCreateInput> = z
  .object({
    id: z.number(),
    full_name: z.string(),
    email: z.string(),
    address: z.string(),
    post: z
      .lazy(() => postCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const userCreateInputObjectSchema = Schema;

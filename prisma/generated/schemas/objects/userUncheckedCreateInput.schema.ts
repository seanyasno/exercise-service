import { z } from 'zod';
import { postUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './postUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userUncheckedCreateInput> = z
  .object({
    id: z.number(),
    full_name: z.string(),
    email: z.string(),
    address: z.string(),
    post: z
      .lazy(() => postUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict();

export const userUncheckedCreateInputObjectSchema = Schema;

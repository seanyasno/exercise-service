import { z } from 'zod';
import { postScalarWhereInputObjectSchema } from './postScalarWhereInput.schema';
import { postUpdateManyMutationInputObjectSchema } from './postUpdateManyMutationInput.schema';
import { postUncheckedUpdateManyWithoutPostInputObjectSchema } from './postUncheckedUpdateManyWithoutPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.postUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => postScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => postUpdateManyMutationInputObjectSchema),
      z.lazy(() => postUncheckedUpdateManyWithoutPostInputObjectSchema),
    ]),
  })
  .strict();

export const postUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;

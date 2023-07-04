import { z } from 'zod';
import { postWhereUniqueInputObjectSchema } from './postWhereUniqueInput.schema';
import { postUpdateWithoutUserInputObjectSchema } from './postUpdateWithoutUserInput.schema';
import { postUncheckedUpdateWithoutUserInputObjectSchema } from './postUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.postUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => postWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => postUpdateWithoutUserInputObjectSchema),
      z.lazy(() => postUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const postUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;

import { z } from 'zod';
import { postWhereUniqueInputObjectSchema } from './postWhereUniqueInput.schema';
import { postUpdateWithoutUserInputObjectSchema } from './postUpdateWithoutUserInput.schema';
import { postUncheckedUpdateWithoutUserInputObjectSchema } from './postUncheckedUpdateWithoutUserInput.schema';
import { postCreateWithoutUserInputObjectSchema } from './postCreateWithoutUserInput.schema';
import { postUncheckedCreateWithoutUserInputObjectSchema } from './postUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.postUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => postWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => postUpdateWithoutUserInputObjectSchema),
      z.lazy(() => postUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => postCreateWithoutUserInputObjectSchema),
      z.lazy(() => postUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const postUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;

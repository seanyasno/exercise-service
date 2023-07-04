import { z } from 'zod';
import { postWhereUniqueInputObjectSchema } from './postWhereUniqueInput.schema';
import { postCreateWithoutUserInputObjectSchema } from './postCreateWithoutUserInput.schema';
import { postUncheckedCreateWithoutUserInputObjectSchema } from './postUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.postCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => postWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => postCreateWithoutUserInputObjectSchema),
      z.lazy(() => postUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const postCreateOrConnectWithoutUserInputObjectSchema = Schema;

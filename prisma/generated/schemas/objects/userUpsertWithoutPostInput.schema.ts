import { z } from 'zod';
import { userUpdateWithoutPostInputObjectSchema } from './userUpdateWithoutPostInput.schema';
import { userUncheckedUpdateWithoutPostInputObjectSchema } from './userUncheckedUpdateWithoutPostInput.schema';
import { userCreateWithoutPostInputObjectSchema } from './userCreateWithoutPostInput.schema';
import { userUncheckedCreateWithoutPostInputObjectSchema } from './userUncheckedCreateWithoutPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userUpsertWithoutPostInput> = z
  .object({
    update: z.union([
      z.lazy(() => userUpdateWithoutPostInputObjectSchema),
      z.lazy(() => userUncheckedUpdateWithoutPostInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => userCreateWithoutPostInputObjectSchema),
      z.lazy(() => userUncheckedCreateWithoutPostInputObjectSchema),
    ]),
  })
  .strict();

export const userUpsertWithoutPostInputObjectSchema = Schema;

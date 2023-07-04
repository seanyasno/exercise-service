import { z } from 'zod';
import { userCreateWithoutPostInputObjectSchema } from './userCreateWithoutPostInput.schema';
import { userUncheckedCreateWithoutPostInputObjectSchema } from './userUncheckedCreateWithoutPostInput.schema';
import { userCreateOrConnectWithoutPostInputObjectSchema } from './userCreateOrConnectWithoutPostInput.schema';
import { userUpsertWithoutPostInputObjectSchema } from './userUpsertWithoutPostInput.schema';
import { userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';
import { userUpdateWithoutPostInputObjectSchema } from './userUpdateWithoutPostInput.schema';
import { userUncheckedUpdateWithoutPostInputObjectSchema } from './userUncheckedUpdateWithoutPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userUpdateOneRequiredWithoutPostNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => userCreateWithoutPostInputObjectSchema),
        z.lazy(() => userUncheckedCreateWithoutPostInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => userCreateOrConnectWithoutPostInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => userUpsertWithoutPostInputObjectSchema).optional(),
    connect: z.lazy(() => userWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => userUpdateWithoutPostInputObjectSchema),
        z.lazy(() => userUncheckedUpdateWithoutPostInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const userUpdateOneRequiredWithoutPostNestedInputObjectSchema = Schema;

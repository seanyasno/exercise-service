import { z } from 'zod';
import { userCreateWithoutPostInputObjectSchema } from './userCreateWithoutPostInput.schema';
import { userUncheckedCreateWithoutPostInputObjectSchema } from './userUncheckedCreateWithoutPostInput.schema';
import { userCreateOrConnectWithoutPostInputObjectSchema } from './userCreateOrConnectWithoutPostInput.schema';
import { userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userCreateNestedOneWithoutPostInput> = z
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
    connect: z.lazy(() => userWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const userCreateNestedOneWithoutPostInputObjectSchema = Schema;

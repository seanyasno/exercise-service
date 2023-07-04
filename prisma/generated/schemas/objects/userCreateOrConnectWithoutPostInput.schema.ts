import { z } from 'zod';
import { userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';
import { userCreateWithoutPostInputObjectSchema } from './userCreateWithoutPostInput.schema';
import { userUncheckedCreateWithoutPostInputObjectSchema } from './userUncheckedCreateWithoutPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userCreateOrConnectWithoutPostInput> = z
  .object({
    where: z.lazy(() => userWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => userCreateWithoutPostInputObjectSchema),
      z.lazy(() => userUncheckedCreateWithoutPostInputObjectSchema),
    ]),
  })
  .strict();

export const userCreateOrConnectWithoutPostInputObjectSchema = Schema;

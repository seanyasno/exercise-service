import { z } from 'zod';
import { postCreateWithoutUserInputObjectSchema } from './postCreateWithoutUserInput.schema';
import { postUncheckedCreateWithoutUserInputObjectSchema } from './postUncheckedCreateWithoutUserInput.schema';
import { postCreateOrConnectWithoutUserInputObjectSchema } from './postCreateOrConnectWithoutUserInput.schema';
import { postCreateManyUserInputEnvelopeObjectSchema } from './postCreateManyUserInputEnvelope.schema';
import { postWhereUniqueInputObjectSchema } from './postWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.postCreateNestedManyWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => postCreateWithoutUserInputObjectSchema),
        z.lazy(() => postCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => postUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => postUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => postCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => postCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => postCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => postWhereUniqueInputObjectSchema),
        z.lazy(() => postWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const postCreateNestedManyWithoutUserInputObjectSchema = Schema;

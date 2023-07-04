import { z } from 'zod';
import { postCreateWithoutUserInputObjectSchema } from './postCreateWithoutUserInput.schema';
import { postUncheckedCreateWithoutUserInputObjectSchema } from './postUncheckedCreateWithoutUserInput.schema';
import { postCreateOrConnectWithoutUserInputObjectSchema } from './postCreateOrConnectWithoutUserInput.schema';
import { postUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './postUpsertWithWhereUniqueWithoutUserInput.schema';
import { postCreateManyUserInputEnvelopeObjectSchema } from './postCreateManyUserInputEnvelope.schema';
import { postWhereUniqueInputObjectSchema } from './postWhereUniqueInput.schema';
import { postUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './postUpdateWithWhereUniqueWithoutUserInput.schema';
import { postUpdateManyWithWhereWithoutUserInputObjectSchema } from './postUpdateManyWithWhereWithoutUserInput.schema';
import { postScalarWhereInputObjectSchema } from './postScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.postUncheckedUpdateManyWithoutUserNestedInput> =
  z
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
      upsert: z
        .union([
          z.lazy(() => postUpsertWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => postUpsertWithWhereUniqueWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => postCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => postWhereUniqueInputObjectSchema),
          z.lazy(() => postWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => postWhereUniqueInputObjectSchema),
          z.lazy(() => postWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => postWhereUniqueInputObjectSchema),
          z.lazy(() => postWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => postWhereUniqueInputObjectSchema),
          z.lazy(() => postWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => postUpdateWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => postUpdateWithWhereUniqueWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => postUpdateManyWithWhereWithoutUserInputObjectSchema),
          z
            .lazy(() => postUpdateManyWithWhereWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => postScalarWhereInputObjectSchema),
          z.lazy(() => postScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const postUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Schema;

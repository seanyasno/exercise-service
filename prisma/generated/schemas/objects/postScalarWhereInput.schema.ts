import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.postScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => postScalarWhereInputObjectSchema),
        z.lazy(() => postScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => postScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => postScalarWhereInputObjectSchema),
        z.lazy(() => postScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    body: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user_id: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const postScalarWhereInputObjectSchema = Schema;

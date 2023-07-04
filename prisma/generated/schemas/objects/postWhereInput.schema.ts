import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { userWhereInputObjectSchema } from './userWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.postWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => postWhereInputObjectSchema),
        z.lazy(() => postWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => postWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => postWhereInputObjectSchema),
        z.lazy(() => postWhereInputObjectSchema).array(),
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
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => userWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const postWhereInputObjectSchema = Schema;

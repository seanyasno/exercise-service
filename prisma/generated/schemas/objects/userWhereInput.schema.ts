import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { PostListRelationFilterObjectSchema } from './PostListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => userWhereInputObjectSchema),
        z.lazy(() => userWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => userWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => userWhereInputObjectSchema),
        z.lazy(() => userWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    full_name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    address: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    post: z.lazy(() => PostListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const userWhereInputObjectSchema = Schema;

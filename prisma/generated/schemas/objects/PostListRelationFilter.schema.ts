import { z } from 'zod';
import { postWhereInputObjectSchema } from './postWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PostListRelationFilter> = z
  .object({
    every: z.lazy(() => postWhereInputObjectSchema).optional(),
    some: z.lazy(() => postWhereInputObjectSchema).optional(),
    none: z.lazy(() => postWhereInputObjectSchema).optional(),
  })
  .strict();

export const PostListRelationFilterObjectSchema = Schema;

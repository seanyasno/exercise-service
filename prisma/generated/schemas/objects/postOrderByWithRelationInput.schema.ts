import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { userOrderByWithRelationInputObjectSchema } from './userOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.postOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    body: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    user: z.lazy(() => userOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const postOrderByWithRelationInputObjectSchema = Schema;

import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { postOrderByRelationAggregateInputObjectSchema } from './postOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    full_name: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    address: z.lazy(() => SortOrderSchema).optional(),
    post: z
      .lazy(() => postOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const userOrderByWithRelationInputObjectSchema = Schema;

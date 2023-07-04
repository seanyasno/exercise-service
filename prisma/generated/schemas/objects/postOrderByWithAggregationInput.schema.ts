import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { postCountOrderByAggregateInputObjectSchema } from './postCountOrderByAggregateInput.schema';
import { postAvgOrderByAggregateInputObjectSchema } from './postAvgOrderByAggregateInput.schema';
import { postMaxOrderByAggregateInputObjectSchema } from './postMaxOrderByAggregateInput.schema';
import { postMinOrderByAggregateInputObjectSchema } from './postMinOrderByAggregateInput.schema';
import { postSumOrderByAggregateInputObjectSchema } from './postSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.postOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    body: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => postCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => postAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => postMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => postMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => postSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const postOrderByWithAggregationInputObjectSchema = Schema;

import { z } from 'zod';
import { userCreateNestedOneWithoutPostInputObjectSchema } from './userCreateNestedOneWithoutPostInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.postCreateInput> = z
  .object({
    title: z.string(),
    body: z.string(),
    user: z.lazy(() => userCreateNestedOneWithoutPostInputObjectSchema),
  })
  .strict();

export const postCreateInputObjectSchema = Schema;

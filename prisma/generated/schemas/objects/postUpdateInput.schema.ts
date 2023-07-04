import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { userUpdateOneRequiredWithoutPostNestedInputObjectSchema } from './userUpdateOneRequiredWithoutPostNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.postUpdateInput> = z
  .object({
    title: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    body: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    user: z
      .lazy(() => userUpdateOneRequiredWithoutPostNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const postUpdateInputObjectSchema = Schema;

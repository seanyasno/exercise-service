import { z } from 'zod';
import { postCreateManyInputObjectSchema } from './objects/postCreateManyInput.schema';

export const postCreateManySchema = z.object({
  data: z.union([
    postCreateManyInputObjectSchema,
    z.array(postCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

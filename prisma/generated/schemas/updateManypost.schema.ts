import { z } from 'zod';
import { postUpdateManyMutationInputObjectSchema } from './objects/postUpdateManyMutationInput.schema';
import { postWhereInputObjectSchema } from './objects/postWhereInput.schema';

export const postUpdateManySchema = z.object({
  data: postUpdateManyMutationInputObjectSchema,
  where: postWhereInputObjectSchema.optional(),
});

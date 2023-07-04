import { z } from 'zod';
import { postWhereInputObjectSchema } from './objects/postWhereInput.schema';

export const postDeleteManySchema = z.object({
  where: postWhereInputObjectSchema.optional(),
});

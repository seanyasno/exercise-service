import { z } from 'zod';
import { postWhereUniqueInputObjectSchema } from './objects/postWhereUniqueInput.schema';

export const postFindUniqueSchema = z.object({
  where: postWhereUniqueInputObjectSchema,
});

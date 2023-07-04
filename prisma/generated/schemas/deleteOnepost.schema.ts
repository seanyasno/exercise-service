import { z } from 'zod';
import { postWhereUniqueInputObjectSchema } from './objects/postWhereUniqueInput.schema';

export const postDeleteOneSchema = z.object({
  where: postWhereUniqueInputObjectSchema,
});

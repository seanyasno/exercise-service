import { z } from 'zod';
import { postUpdateInputObjectSchema } from './objects/postUpdateInput.schema';
import { postUncheckedUpdateInputObjectSchema } from './objects/postUncheckedUpdateInput.schema';
import { postWhereUniqueInputObjectSchema } from './objects/postWhereUniqueInput.schema';

export const postUpdateOneSchema = z.object({
  data: z.union([
    postUpdateInputObjectSchema,
    postUncheckedUpdateInputObjectSchema,
  ]),
  where: postWhereUniqueInputObjectSchema,
});

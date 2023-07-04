import { z } from 'zod';
import { postWhereUniqueInputObjectSchema } from './objects/postWhereUniqueInput.schema';
import { postCreateInputObjectSchema } from './objects/postCreateInput.schema';
import { postUncheckedCreateInputObjectSchema } from './objects/postUncheckedCreateInput.schema';
import { postUpdateInputObjectSchema } from './objects/postUpdateInput.schema';
import { postUncheckedUpdateInputObjectSchema } from './objects/postUncheckedUpdateInput.schema';

export const postUpsertSchema = z.object({
  where: postWhereUniqueInputObjectSchema,
  create: z.union([
    postCreateInputObjectSchema,
    postUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    postUpdateInputObjectSchema,
    postUncheckedUpdateInputObjectSchema,
  ]),
});

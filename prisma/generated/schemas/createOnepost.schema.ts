import { z } from 'zod';
import { postCreateInputObjectSchema } from './objects/postCreateInput.schema';
import { postUncheckedCreateInputObjectSchema } from './objects/postUncheckedCreateInput.schema';

export const postCreateOneSchema = z.object({
  data: z.union([
    postCreateInputObjectSchema,
    postUncheckedCreateInputObjectSchema,
  ]),
});

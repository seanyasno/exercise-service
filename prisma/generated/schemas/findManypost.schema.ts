import { z } from 'zod';
import { postOrderByWithRelationInputObjectSchema } from './objects/postOrderByWithRelationInput.schema';
import { postWhereInputObjectSchema } from './objects/postWhereInput.schema';
import { postWhereUniqueInputObjectSchema } from './objects/postWhereUniqueInput.schema';
import { postScalarFieldEnumSchema } from './enums/postScalarFieldEnum.schema';

export const postFindManySchema = z.object({
  orderBy: z
    .union([
      postOrderByWithRelationInputObjectSchema,
      postOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: postWhereInputObjectSchema.optional(),
  cursor: postWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(postScalarFieldEnumSchema).optional(),
});

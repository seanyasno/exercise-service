import { z } from 'zod';

export const PostScalarFieldEnumSchema = z.enum([
  'id',
  'title',
  'body',
  'user_id',
]);

import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'full_name',
  'email',
  'address',
]);

import {z} from 'zod';

export const userSchema = z.object({
    id: z.number(),
    fullName: z.string(),
    email: z.string().email(),
    address: z.string(),
});

export type User = z.infer<typeof userSchema>;

import {Post} from '../../schemas';
import {prisma} from '../../config';

export class PostDatabaseService {
    static async getPostsByUserId(userId: number, page: number, limit: number): Promise<Post[]> {
        try {
            const skip = (page - 1) * limit;
            const posts = await prisma.post.findMany({
                where: {
                    user_id: userId,
                },
                skip,
                take: limit,
            });

            return posts.map(post => ({
                id: post.id,
                title: post.title,
                body: post.body,
                userId: post.user_id,
            }));
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    static async savePosts(posts: Post[]) {
        try {
            return prisma.post.createMany({
                data: posts.map(post => ({
                    id: post.id,
                    title: post.title,
                    body: post.body,
                    user_id: post.userId,
                })),
                skipDuplicates: true,
            });
        } catch (error) {
            console.error(error);
        }
    }

    static async deletePostById(id: number) {
        return prisma.post.deleteMany({
            where: {
                id,
            },
        });
    }
}

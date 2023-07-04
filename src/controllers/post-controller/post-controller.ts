import {Request, Response} from 'express';
import {PostDatabaseService, PostExternalService} from '../../services';

export class PostController {
    static async getPostsByUserId(request: Request, response: Response) {
        try {
            const {id} = request.params;
            const {page = 1, limit = 10} = request.query;

            const userId = parseInt(id);
            const pageValue = parseInt(page as string);
            const limitValue = parseInt(limit as string);

            if (isNaN(userId) || isNaN(pageValue) || isNaN(limitValue)) {
                response.status(422).send('Invalid parameter values');
                return;
            }

            const postsFromDatabase = await PostDatabaseService.getPostsByUserId(userId, pageValue, limitValue);

            PostExternalService.getPostsByUserId(userId, pageValue, limitValue).then(posts => {
                if (postsFromDatabase.length === 0) {
                    response.send(posts);
                }

                console.log('Saving posts to database');
                PostDatabaseService.savePosts(posts).then(data => {
                    console.log('Posts saved to database:', data);
                }).catch(error => {
                    console.error('Error saving posts to database:', error);
                    throw error;
                });
            }).catch(error => {
                console.error('Error retrieving posts from external service:', error);
                throw error;
            });

            if (postsFromDatabase.length > 0) {
                response.send(postsFromDatabase);
            }
        } catch (error) {
            console.error(error);
            response.status(500).send(`Error getting posts ${error}`);
        }
    }

    static async deletePostById(request: Request, response: Response) {
        try {
            const {id} = request.params;

            if (isNaN(parseInt(id))) {
                response.status(422).send('Invalid parameter values');
                return;
            }

            await PostDatabaseService.deletePostById(parseInt(id));

            response.status(204).send('Posts deleted');
        } catch (error) {
            console.error(error);
            response.status(500).send(`Error deleting post ${error}`);
        }
    }
}

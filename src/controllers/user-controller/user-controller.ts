import {UserService} from '../../services';
import {NextFunction, Request, Response} from 'express';

export class UserController {
    static async getUsers(request: Request, response: Response, next: NextFunction) {
        response.set('Cache-Control', 'public, max-age=3600');

        const users = await UserService.getUsers();
        response.send(users);
    }
}

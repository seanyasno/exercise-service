import express from 'express';
import {UserController, PostController} from '../../controllers';

const userRoutes = express.Router();

userRoutes.get('/', UserController.getUsers);
userRoutes.get('/:id/posts', PostController.getPostsByUserId);

export {userRoutes};

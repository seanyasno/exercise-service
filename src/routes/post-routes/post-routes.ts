import express from 'express';
import {PostController} from '../../controllers';

const postRoutes = express.Router();

postRoutes.delete('/:id', PostController.deletePostById);

export {postRoutes};

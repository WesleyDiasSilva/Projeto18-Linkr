import {Router} from 'express';
import { getPostsController } from '../controllers/postsControllers/getPostsController.js';
import deletePostController from '../controllers/postsControllers/deletePostController.js';
import { newPostController } from '../controllers/postsControllers/newPostController.js';
import { authMiddleware } from '../middlewares/authMiddlewares/authMiddleware.js';
import {newPostMiddleware} from '../middlewares/postsMiddlewares/newPostMiddleware.js';

import { likePostMiddleware } from '../middlewares/postsMiddlewares/likePostMiddleware.js';
import { likePostController } from '../controllers/postsControllers/likePostController.js';

import { getAllHashtags } from "../controllers/postsControllers/getAllHashtags.js";

const route = Router();

route.post('/post', newPostMiddleware, authMiddleware, newPostController)
route.get('/posts', authMiddleware, getPostsController)

route.post('/like', likePostMiddleware, likePostController)
route.get('/hashtag', getAllHashtags)
route.delete('/delete-post/:postId', deletePostController)

export default route;
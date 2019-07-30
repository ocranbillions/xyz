import { Router } from 'express';
import likeController from '../controllers/likesController';

const { likeArticle, dislikeArticle } = likeController;

const router = Router();

router.post('/:id/like', likeArticle); // add middleware for auth
router.post('/:id/dislike', dislikeArticle);

export default router;

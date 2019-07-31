import { Router } from 'express';
import likeController from '../controllers/likesController';
import AuthMiddlewware from '../middlewares/Authentication';


const { likeArticle, dislikeArticle } = likeController;
const { verifyToken } = AuthMiddlewware;


const router = Router();

router.post('/:id/like', verifyToken, likeArticle); // add middleware for auth
router.post('/:id/dislike', verifyToken, dislikeArticle);

export default router;

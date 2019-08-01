import { Router } from 'express';
import AuthMiddleware from '../middlewares/Authentication';
import CommentController from '../controllers/CommentController';
import validate from '../middlewares/commentValidations';

const { verifyToken, verifiedUserOnly } = AuthMiddleware;
const { postComment, getArticles } = CommentController;

const router = Router();

router.post('/:slug/comments', verifyToken, verifiedUserOnly, validate.comment, postComment);
router.get('/', getArticles);

export default router;

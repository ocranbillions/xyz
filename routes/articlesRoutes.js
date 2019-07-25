import { Router } from 'express';
import ArticlesController from '../controllers/articleController';

const router = Router();

router.get('/', ArticlesController.fetchArticles);
router.post('/', ArticlesController.createArticle);

export default router;

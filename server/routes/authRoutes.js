import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();

router.post('/signup', UserController.signUp);
router.post('/signin', UserController.signIn);
router.get('/confirmation', UserController.confirmEmail);

export default router;

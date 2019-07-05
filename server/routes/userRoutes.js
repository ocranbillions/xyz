import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();

router.get('/', UserController.getUsers);
// router.get('/:id', Auth.isLoggedIn, UserController.getUserByID);
// router.get('/:owneremail/accounts', Auth.isLoggedIn, UserController.getAccountsByOwnerEmail);
// router.post('/', Auth.isLoggedIn, Auth.isAdmin, validations.validateNewStaff, UserController.createStaff);
// router.delete('/:id', Auth.isLoggedIn, Auth.isAdmin, UserController.deleteUser);

export default router;

import { Router } from 'express';
import { createUser, getUsers, getUser } from '../controllers/userController';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);

export default router;

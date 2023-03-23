// setting routes 

import express from 'express';
const router = express.Router();

import { createUser , findUsers } from '../controller/controller'

router.get("/" , findUsers);
router.post("/", createUser);

export default router 
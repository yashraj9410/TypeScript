import express from 'express';

import controller from '../controller/user-controller'

const router = express.Router();

router.get("/", controller.read_user);
router.post("/" , controller.create_user);
router.put("/", controller.update_user);
router.delete("/" , controller.delete_user);

export = router;
import express from 'express';

import controller from '../controller/user-controller'

const router = express.Router();

router.get("/", controller.read_user);
router.post("/" , controller.create_user);
router.put("/:id", controller.update_user);
router.delete("/:id" , controller.delete_user);

export = router;
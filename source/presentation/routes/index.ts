import express from 'express';
const router = express.Router();

import TopController from "../controller/top-controller";
const topController = new TopController();

router.get('/', topController.Get);

export default router;

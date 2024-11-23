import express from 'express';
const router = express.Router();

import TopController from "../controller/top-controller";
const topController = new TopController();

router.get('/', topController.Get);
router.get('/deploy', topController.Deploy);
router.get('/deployNext', topController.DeployNext);

export default router;

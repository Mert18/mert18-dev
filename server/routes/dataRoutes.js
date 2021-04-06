import express from 'express'
import { getAllData, createData } from '../controllers/dataController.js';

const router = express.Router();

router.route("/").get(getAllData).post(createData);

export default router;
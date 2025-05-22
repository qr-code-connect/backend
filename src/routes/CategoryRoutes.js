import express from 'express';
import {
    createCaTegory
} from '../controllers/CategoryController.js';

const router = express.Router();

router.post('/create_category',createCaTegory);


export default router;
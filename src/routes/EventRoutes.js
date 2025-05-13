import express from 'express';
import {
    createEvent
} from '../controllers/EventContoller.js';

const router = express.Router();

router.post('/create_event',createEvent);


export default router;
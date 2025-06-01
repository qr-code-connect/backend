// routes/TicketRoutes.js
import express from 'express';
import {getAllTickets} from '../controllers/TicketController.js'
const router = express.Router();



router.get('/get_all_tickets', getAllTickets);
export default router;
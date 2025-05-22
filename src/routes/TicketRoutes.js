import express from 'express';
import purchaseTicket from '../controllers/TicketController.js';

const router = express.Router();



router.patch('/buy_ticket',purchaseTicket);





export default router;
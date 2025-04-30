import express from "express";
import { updateAddress, deleteAddress } from '../controllers/AddressController.js';

const router = express.Router();

router.put('addresses/:id', updateAddress);
router.delete('addresses/:id', deleteAddress);

export default router;

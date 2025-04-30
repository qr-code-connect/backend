import express from "express";
import { updateAddress, deleteAddress } from '../controllers/AddressController.js';

const router = express.Router();

router.put('update_address/:id', updateAddress);
router.delete('delete_address/:id', deleteAddress);

export default router;

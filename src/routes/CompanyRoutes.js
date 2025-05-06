import express from 'express';
import {
    createCompany
} from '../controllers/CompanyController.js';

const router = express.Router();

router.post('/create_company',createCompany);

export default router;
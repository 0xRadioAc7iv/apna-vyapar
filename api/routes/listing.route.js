import express from 'express';
import { createCompany, getAllCompanies, getAllCompanyDetails, getSomeCompanyDetails, getSustainabilityRating } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', createCompany);

router.get('/getall/', getAllCompanies);
router.get('/getall/:id', getAllCompanyDetails);
router.get('/getsome', getSomeCompanyDetails);
router.get('/getrating/:id', getSustainabilityRating);

export default router;
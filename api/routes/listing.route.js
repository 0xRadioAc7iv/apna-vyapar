import express from 'express';
import { createCompany, getAllCompanyDetails, getSomeCompanyDetails, getSustainabilityRating } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', createCompany);
router.get('/getall/:id', getAllCompanyDetails);
router.get('/getsome/:id', getSomeCompanyDetails);
router.get('/getrating/:id', getSustainabilityRating);

export default router;
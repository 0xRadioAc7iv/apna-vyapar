import express from 'express';
import { createCompany, getAllCompanies, getAllCompanyDetails, getSomeCompanyDetails, getSustainabilityRating } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import multer from "multer";

const upload = multer({
    limits: {
        fieldSize: 12 * 1024 * 1024,
    },
});

const router = express.Router();

router.post('/create', createCompany);

router.get('/getall/', getAllCompanies);
router.get('/getall/:id', getAllCompanyDetails);
router.get('/getsome', getSomeCompanyDetails);
router.get('/getrating/:id', getSustainabilityRating);

export default router;
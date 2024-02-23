import express from 'express';
import { createCompany, deleteListing, updateListing, getListing, getCompanies } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', createCompany);
router.get('/get', getCompanies);
router.get('/get/:id', getListing);
router.delete('/delete/:id', deleteListing);
router.post('/update/:id', updateListing);

export default router;

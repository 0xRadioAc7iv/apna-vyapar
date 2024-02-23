import Company from '../models/company.model.js';
import { errorHandler } from '../utils/error.js';

export const createCompany = async (req, res, next) => {
  try {
    const company = new Company(req.body);
    company.save()
      .then((result) => {
        console.log(result);
      });

    return res.status(201).json(company);
  } catch (error) {
    next(error);
  }
};

export const getAllCompanyDetails = async (req, res, next) => {
  try {
    const companyDetails = await Company.findById(req.params.id);
    return res.status(200).json(companyDetails);
  } catch (error) {
    next(error);
  }
}

export const getSomeCompanyDetails = async (req, res, next) => {
  try {
    const companyDetails = await Company.findById(req.params.id);

    const logo = companyDetails.logo;
    const name = companyDetails.companyName;
    const industry = companyDetails.industry;
    const sustainabilityRating = companyDetails.sustainabilityRating;

    const dataToSend = { logo, name, industry, sustainabilityRating };

    return res.status(200).json(dataToSend);
  } catch (error) {
    next(error);
  }
}

export const getSustainabilityRating = async (req, res, next) => {
  try {
    const companyDetails = await Company.findById(req.params.id);
    const sustainabilityRating = companyDetails.sustainabilityRating;

    const dataToSend = { sustainabilityRating };

    return res.status(200).json(dataToSend);
  } catch (error) {
    next(error);
  }
}
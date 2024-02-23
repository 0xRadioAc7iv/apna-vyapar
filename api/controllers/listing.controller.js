import Company from '../models/company.model.js';
import { errorHandler } from '../utils/error.js';
import { spawn } from "child_process";

const pythonScript = 'model/ml_randomforest.py';
const command = `python ${pythonScript}`;

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

export const calculateRating = async (req, res, next) => {

  function runPythonScript(scriptPath) {
    return new Promise((resolve, reject) => {
      const pyProg = spawn('python', [scriptPath]);

      let data = '';

      pyProg.stdout.on('data', (stdout) => {
        data += stdout.toString();
      });

      pyProg.stderr.on('data', (stderr) => {
        console.error(`stderr: ${stderr}`);
      });

      pyProg.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        console.log(data);

        if (code === 0) {
          resolve(data);
        } else {
          reject(new Error(`Error executing Python script. Exit code: ${code}`));
        }
      });
    });
  }

  try {
    const companyDetails = await Company.findById(req.params.id);
    const sustainabilityRating = await runPythonScript(pythonScript);

    const dataToSend = { sustainabilityRating };
    return res.status(200).json(dataToSend);
  } catch (error) {
    next(error);
  }
}
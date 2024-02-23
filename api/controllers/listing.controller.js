import Company from '../models/company.model.js';
import { errorHandler } from '../utils/error.js';
import { spawn } from "child_process";

const pythonScript = 'model/ml_randomforest.py';

export const createCompany = async (req, res, next) => {
  try {
    const name = req.body.name;
    // const logo = req.body.logo;
    const industry = req.body.domain;
    const description = req.body.description;
    const address = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email;
    const websiteUrl = req.body.url;
    const date = req.body.date;
    const founders = req.body.founders;
    const environmentalScore = req.body.envscore;
    const socialScore = req.body.socialscore;
    const governanceScore = req.body.govscore;
    const size = req.body.size;
    let sustainabilityRating = '';

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
      sustainabilityRating = await runPythonScript(pythonScript);
    } catch (error) {
      next(error);
    }

    const company = new Company(
      {
        companyName: name,
        logo: "url",
        industry: industry,
        description: description,
        companyAddress: address,
        phoneNumber: phone,
        email: email,
        websiteUrl: websiteUrl,
        socials: ["x.com", "instagram.com", "linkedin.com"],
        foundingDate: date,
        founders: founders,
        environmentalScore: environmentalScore,
        socialScore: socialScore,
        governanceScore: governanceScore,
        companySize: size,
        sustainabilityRating: sustainabilityRating,
      }
    );

    company.save()
      .then((result) => {
        console.log(result);
      });

    console.log(company);

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

export const getAllCompanies = async (req, res, next) => {
  try {
    const companies = await Company.find();
    const dataToSend = { companies };

    return res.status(200).json(dataToSend);
  } catch (error) {
    next(error);
  }
}
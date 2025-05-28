import createCompanyService from "../services/CompanyServices/createCompanyService.js";
import getAllCompaniesService from '../services/CompanyServices/getAllcompaniesService.js'


const createCompany = async (req, res) => {
    try {
           const companyData = req.body;
           const newCompany = await createCompanyService(companyData);
           res.status(201).json(newCompany); 
    } catch (error) {
           
        res.status(500).json({message:'Error creating company', error: error.message});

    }
 
    
}


const getAllCompanies = async (req, res) => {
    try {
        const customers = await getAllCompaniesService();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching customers', error: error.message });
    };
};
export {
    createCompany,
    getAllCompanies
}
import createCompanyService from "../services/CompanyServices/createCompanyService.js";



const createCompany = async (req, res) => {
    try {
           const companyData = req.body;
           const newCompany = await createCompanyService(companyData);
           res.status(201).json(newCompany); 
    } catch (error) {
           
        res.status(500).json({message:'Error creating company', error: error.message});

    }
    
}


export {
    createCompany
}